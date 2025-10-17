import contact from "./contact-data.json" with { type: "json" };
import { ContactItem } from "./contact-item";

export function ContactSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Contact.
        </span>
        <h2 className="mt-2 font-medium text-lg">Connect & collabs.</h2>

        <p className="mt-6 text-pretty leading-7">
          Get in touch and connect with me for new opportunities, jobs, works
          and collaborations.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        {contact.contacts.map((con, index) => (
          <ContactItem contact={con} key={index} />
        ))}
      </div>
    </section>
  );
}
