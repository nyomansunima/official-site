import contacts from "./contact-data.json" with { type: "json" };
import { ContactItem } from "./contact-item";

export function ContactSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-1">
        {contacts.map((con, index) => (
          <ContactItem contact={con} key={index} />
        ))}
      </div>
    </section>
  );
}
