import { Link } from "react-router"

export interface SupportData {
  title: string
  description: string
  url: string
}

interface Props {
  support: SupportData
}

export function SupportItem({ support }: Props) {
  const { title, description, url } = support

  return (
    <Link
      to={url}
      target="_blank"
      className="flex flex-col bg-surface p-3 rounded-2xl border-2 border-border border-dashed transition-all duration-300 hover:-translate-y-1 hover:border-link"
    >
      <div className="flex items-center gap-1">
        <i className="fi fi-sr-bullet text-sm" />
        <h3 className="text-sm font-medium text-wrap">{title}</h3>
      </div>

      <p className="text-sm text-foreground/60 mt-3 text-pretty line-clamp-2 leading-relaxed">
        {description}
      </p>
    </Link>
  )
}
