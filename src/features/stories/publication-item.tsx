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
      className="flex bg-surface p-1 rounded-2xl col-span-1 transition-all duration-300 hover:-translate-y-1 group relative"
    >
      <div className="flex items-center h-full w-full border-2 gap-2 p-3 rounded-xl border-border border-dashed transition-all duration-300 group-hover:border-link">
        <i className="fi fi-sc-check-circle group-hover:text-link text-sm" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </Link>
  )
}
