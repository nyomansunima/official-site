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
    <Link
      to={url}
      target="_blank"
      className="flex items-center bg-surface p-3 gap-1 rounded-2xl col-span-1 transition-all duration-300 hover:-translate-y-1 border-2 border-border border-dashed hover:border-link"
    >
      <i className="fi fi-sr-bullet text-sm" />
      <h3 className="text-sm font-medium">{title}</h3>
    </Link>
  )
}
