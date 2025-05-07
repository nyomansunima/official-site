import { Button } from "@shared/components"
import Link from "next/link"

export type ContactItemData = {
  href: string
  label: string
}

type ContactItemProps = {
  contact: ContactItemData
}

export function ContactItem({ contact }: ContactItemProps) {
  const { href, label } = contact

  return (
    <Button
      variant={"outline"}
      size={"base"}
      className="h-12 transition-all duration-300 hover:-translate-y-1 bg-surface text-[.8125rem] border-2 border-border border-dashed hover:border-link"
      asChild
    >
      <Link href={href} target="_blank">
        {label}
      </Link>
    </Button>
  )
}
