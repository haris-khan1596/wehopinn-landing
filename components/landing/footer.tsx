import Link from "next/link";
import { Mail } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
              WH
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              WeHopinn
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <a
              href="mailto:hello@wehopinn.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              hello@wehopinn.com
            </a>
            <a
              href="https://instagram.com/wehopinn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="WeHopinn on Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
              @wehopinn
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} WeHopinn. Helping students find their place in
            Islamabad.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            <Link href="#inquiry-form" className="hover:text-foreground">
              Find My Accommodation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
