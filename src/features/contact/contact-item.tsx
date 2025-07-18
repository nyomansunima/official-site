import { Button } from "@shared/components"
import { Link } from "react-router"

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
    <Button
      variant={"outline"}
      size={"base"}
      className="h-12 transition-all duration-300 hover:-translate-y-1 bg-surface text-[.8125rem] border-2 border-dashed hover:border-link"
      asChild
    >
      <Link to={href} target="_blank">
        {label}
      </Link>
    </Button>
  )
}
