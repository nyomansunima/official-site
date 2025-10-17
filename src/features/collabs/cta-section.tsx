import { Button } from "@shared/components";

export function CTASection() {
  return (
    <section className="mt-24">
      <div className="not-prose flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Get Started.
        </span>
        <h2 className="py-2">What you're waiting for?</h2>
      </div>

      <p>
        Don't waste time and attention for someone else. You in the perfect
        spots and with the right person.
      </p>

      <div className="not-prose mt-10 flex gap-3">
        <Button asChild variant={"secondary"}>
          <a
            href={"https://cal.com/nyomansunima/build-opportunity"}
            rel="noopener"
            target="_blank"
          >
            Book a Call
          </a>
        </Button>

        <Button asChild variant={"text"}>
          <a href={"/contact"}>Connect</a>
        </Button>
      </div>
    </section>
  );
}
