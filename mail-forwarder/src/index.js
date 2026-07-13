import PostalMime from "postal-mime";

// Slack truncates text blocks near 3000 chars; leave headroom for the wrapper.
const MAX_BODY = 2600;

export default {
  async email(message, env, ctx) {
    const subject = message.headers.get("subject") || "(no subject)";

    // Parse the raw MIME stream into a readable body. Prefer plain text;
    // fall back to HTML when that's all the sender provided.
    let body = "(could not parse body)";
    try {
      const email = await PostalMime.parse(message.raw);
      body = (email.text || email.html || "").trim() || "(empty body)";
    } catch (err) {
      console.error("email parse failed", err);
    }

    const snippet =
      body.length > MAX_BODY ? body.slice(0, MAX_BODY) + "\n… (truncated)" : body;

    const text = [
      "📧 *New email received*",
      `• *From:* ${message.from}`,
      `• *To:* ${message.to}`,
      `• *Subject:* ${subject}`,
      "",
      "```",
      snippet,
      "```",
    ].join("\n");

    // Notify Slack — but never let a Slack failure block delivery.
    try {
      const res = await fetch(env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) {
        console.error("Slack notification failed", res.status, await res.text());
      }
    } catch (err) {
      console.error("Slack notification threw", err);
    }

    // No forward: the full email body is delivered to Slack above. Forwarding
    // to an address on this worker's own domain would re-enter the worker and
    // loop, so delivery is Slack-only.
  },
};
