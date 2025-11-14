export type ContactData = {
  href: string;
  label: string;
};

type Props = {
  contact: ContactData;
};

export function ContactItem({ contact }: Props) {
  const { href, label } = contact;

  return (
    <a
      className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-foreground/40"
      href={href}
      target="_blank"
    >
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      <span>{label}</span>
    </a>
  );
}
