import { Link } from "react-router"

export interface CraftData {
  title: string
  link: string
}

interface Props {
  craft: CraftData
}

export function CraftItem({ craft }: Props) {
  const { title, link } = craft

  return (
    <Link to={link} target="_blank" className="flex items-center gap-2 py-2">
      <i className="fi fi-sr-bullet text-sm text-foreground/40" />
      <span>{title}</span>
    </Link>
  )
}
