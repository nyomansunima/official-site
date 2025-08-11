import { Button } from "@shared/components"
import { Link } from "react-router"

export function CTASection() {
  return (
    <section className="mt-24">
      <div className="flex flex-col not-prose">
        <span className="text-sm font-mono text-foreground/40 tracking-tight">
          Get Started.
        </span>
        <h2 className="py-2">What you're waiting for?</h2>
      </div>

      <p>
        Don't waste time and attention for someone else. You in the perfect
        spots and with the right person.
      </p>

      <div className="not-prose flex gap-3 mt-10">
        <Button asChild variant={"secondary"}>
          <Link
            to={"https://cal.com/nyomansunima/build-opportunity"}
            target="_blank"
          >
            Book a Call
          </Link>
        </Button>

        <Button asChild variant={"text"}>
          <Link to={"/contact"}>Connect</Link>
        </Button>
      </div>
    </section>
  )
}
