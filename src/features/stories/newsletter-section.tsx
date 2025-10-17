import { NewsletterForm } from "@features/newsletter";

export function NewsletterSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Newsletter.
        </span>
        <h2 className="mt-2 font-medium text-lg">Join weekly newsletter.</h2>

        <p className="mt-6 text-pretty leading-7">
          Ohh, you can join my weekly newsletter about online business, indie
          hacking and solopreneur. No spam and shit.
        </p>
      </div>

      <div className="mt-10 flex flex-col">
        <NewsletterForm />
      </div>
    </section>
  );
}
