import { NewsletterForm } from "@features/newsletter"

export function NewsletterSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono text-link tracking-tight">
          Newsletter.
        </span>
        <h2 className="py-2 text-lg font-medium">Get weekly updates.</h2>
      </div>

      <p className="mt-6 text-pretty leading-7 text-foreground/60">
        Ohh,{" "}
        <span className="text-foreground">
          you can join my weekly newsletter
        </span>{" "}
        about online business, indie hacking and solopreneur.{" "}
        <span className="text-foreground">No spam and shit.</span>
      </p>

      <div className="flex flex-col mt-6 gap-3">
        <NewsletterForm />
      </div>
    </section>
  )
}
