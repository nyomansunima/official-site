import { NewsletterForm } from "@features/newsletter"

export function NewsletterSection() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono tracking-tight">
          Newsletter.
        </span>
        <h2 className="text-lg font-medium">Get weekly updates.</h2>
      </div>

      <div className="flex flex-col gap-10">
        <p className="text-foreground/60 leading-relaxed">
          <span className="text-foreground">
            Don't fall behind with the latest
          </span>{" "}
          business, financials, indie hacking, and productivity tips.{" "}
          <span className="text-foreground">We'll send you every week</span>. No
          spam and shits.
        </p>

        <NewsletterForm />
      </div>
    </section>
  )
}
