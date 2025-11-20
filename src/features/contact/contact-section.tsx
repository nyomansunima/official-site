import contacts from "./contact-data.json" with { type: "json" };

type ContactData = {
  href: string;
  label: string;
};

type ContactItemProps = {
  contact: ContactData;
};

function ContactItem({ contact }: ContactItemProps) {
  const { href, label } = contact;

  return (
    <a className="flex items-center gap-2 py-2" href={href} target="_blank">
      <svg
        className="fill-foreground/40"
        height="14"
        viewBox="0 0 24 24"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}

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
