import { Link } from "react-router"

export interface SupportData {
  title: string
  url: string
}

interface Props {
  support: SupportData
}

export function SupportItem({ support }: Props) {
  const { title, url } = support

  return (
    <Link to={url} target="_blank" className="flex items-center py-2 gap-2">
      <i className="fi fi-sr-bullet text-sm text-foreground/40" />
      <span>{title}</span>
    </Link>
  )
}
