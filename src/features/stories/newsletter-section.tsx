import { NewsletterForm } from "@features/newsletter"

export function NewsletterSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Newsletter.
        </span>
        <h2 className="text-lg font-medium mt-2">Join weekly newsletter.</h2>

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
