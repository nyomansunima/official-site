import { Link } from "react-router"

export interface SourceData {
  title: string
  description: string
  url: string
}

interface Props {
  source: SourceData
}

export function SourceItem({ source }: Props) {
  const { title, description, url } = source

  return (
    <Link
      to={url}
      target="_blank"
      className="flex bg-surface p-1 rounded-2xl col-span-1 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex flex-col w-full h-full border-2 border-border border-dashed transition-all duration-300 group-hover:border-link rounded-xl p-3">
        <div className="flex items-center gap-2">
          <i className="fi fi-sc-check-circle group-hover:text-link text-sm" />
          <h3 className="text-sm font-medium">{title}</h3>
        </div>

        <p className="text-sm text-foreground/60 mt-3 line-clamp-2 text-pretty leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  )
}
