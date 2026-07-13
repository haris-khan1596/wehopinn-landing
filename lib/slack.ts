import "server-only";

type SlackBlock = Record<string, unknown>;

type SlackPayload = {
  text: string; // fallback shown in notifications/previews
  blocks?: SlackBlock[];
};

/**
 * Posts a message to Slack via an incoming webhook.
 *
 * Fire-and-forget by design: notifying the team must never block or fail a
 * student's submission. Missing config or a Slack error is logged, not thrown.
 */
export async function notifySlack(payload: SlackPayload): Promise<void> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("SLACK_WEBHOOK_URL not set — skipping Slack notification.");
    return;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Slack notification failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("Slack notification threw", err);
  }
}

export type LeadField = {
  label: string;
  value: string | null | undefined;
};

type LeadNotification = {
  emoji: string;
  title: string;
  /** Short line under the header, e.g. the person's name + email. */
  subtitle?: string;
  fields: LeadField[];
  /** Footer note, e.g. the signup source. */
  footer?: string;
};

const EMPTY = "—";

/**
 * Builds a clean Block Kit card for a new lead and sends it.
 *
 * Renders as a bold header, a responsive two-column grid of fields, and a
 * subtle context footer — much tidier than a wall of bullet points.
 */
export async function notifySlackLead(lead: LeadNotification): Promise<void> {
  const { emoji, title, subtitle, fields, footer } = lead;

  const blocks: SlackBlock[] = [
    {
      type: "header",
      text: { type: "plain_text", text: `${emoji}  ${title}`, emoji: true },
    },
  ];

  if (subtitle) {
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: subtitle },
    });
  }

  // Slack renders `fields` as a two-column grid, capped at 10 entries.
  const gridFields = fields.slice(0, 10).map(({ label, value }) => ({
    type: "mrkdwn",
    text: `*${label}*\n${value?.trim() || EMPTY}`,
  }));

  if (gridFields.length > 0) {
    blocks.push({ type: "section", fields: gridFields });
  }

  if (footer) {
    blocks.push({
      type: "context",
      elements: [{ type: "mrkdwn", text: footer }],
    });
  }

  // The top-level `text` is the notification/preview fallback for clients that
  // don't render blocks.
  const fallback = [
    `${emoji} ${title}`,
    ...fields.map((f) => `${f.label}: ${f.value?.trim() || EMPTY}`),
  ].join("\n");

  await notifySlack({ text: fallback, blocks });
}
