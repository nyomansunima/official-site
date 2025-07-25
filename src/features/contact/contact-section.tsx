import { ContactItem } from "./contact-item"
import contact from "./contact-data.json"

export function ContactSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-link font-mono tracking-tight">
          Contact.
        </span>
        <h2 className="text-lg font-medium">Connect & collabs.</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        Get in touch and connect with me for new opportunities, jobs, works and
        collaborations.
      </p>

      <div className="flex flex-wrap items-center gap-2 mt-10">
        {contact.contacts.map((con, index) => (
          <ContactItem contact={con} key={index} />
        ))}
      </div>
    </section>
  )
}
