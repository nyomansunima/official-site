import contact from "./contact-data.json"
import { ContactItem } from "./contact-item"

export function ContactSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Contact.
        </span>
        <h2 className="text-lg font-medium mt-2">Connect & collabs.</h2>

        <p className="mt-6 text-pretty leading-7">
          Get in touch and connect with me for new opportunities, jobs, works
          and collaborations.
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-10">
        {contact.contacts.map((con, index) => (
          <ContactItem contact={con} key={index} />
        ))}
      </div>
    </section>
  )
}
