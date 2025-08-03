import { NewsletterForm } from "@features/newsletter"

export function NewsletterSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono text-foreground/40 tracking-tight">
          Newsletter.
        </span>
        <h2 className="py-2 text-lg font-medium">Get weekly updates.</h2>

        <p className="mt-6 text-pretty leading-7">
          Ohh, you can join my weekly newsletter about online business, indie
          hacking and solopreneur. No spam and shit.
        </p>
      </div>

      <div className="flex flex-col mt-10">
        <NewsletterForm />
      </div>
    </section>
  )
}
