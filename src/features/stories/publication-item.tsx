import { Link } from "react-router"

export interface PublicationData {
  title: string
  url: string
}

interface Props {
  publication: PublicationData
}

export function PublicationItem({ publication }: Props) {
  const { title, url } = publication

  return (
    <Link to={url} target="_blank" className="flex items-center py-2 gap-2">
      <i className="fi fi-sr-bullet text-sm text-foreground/40" />
      <span>{title}</span>
    </Link>
  )
}
