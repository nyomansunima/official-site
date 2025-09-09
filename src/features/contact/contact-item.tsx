export interface ContactData {
  href: string
  label: string
}

interface Props {
  contact: ContactData
}

export function ContactItem({ contact }: Props) {
  const { href, label } = contact

  return (
    <a href={href} target="_blank" className="flex items-center gap-2 py-2">
      <i className="fi fi-sr-bullet text-sm text-foreground/40" />
      <span>{label}</span>
    </a>
  )
}
