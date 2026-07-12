import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="WeHopinn home">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            WH
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            WeHopinn
          </span>
        </Link>
        <Button asChild size="sm">
          <a href="#inquiry-form">Find My Accommodation</a>
        </Button>
      </div>
    </header>
  );
}
