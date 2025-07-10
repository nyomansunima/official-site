import { Link } from "react-router"

export type SupportData = {
  title: string
  description: string
  url: string
}

type Props = {
  support: SupportData
}

export function SupportItem({ support }: Props) {
  const { title, description, url } = support

  return (
    <Link
      to={url}
      target="_blank"
      className="flex bg-surface p-1 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
    >
      <div className="flex flex-col h-full w-full border-2 border-border border-dashed rounded-xl p-3 transition-all duration-300 group-hover:border-link">
        <div className="flex items-center gap-2">
          <i className="fi fi-ss-circle-small text-foreground/60 group-hover:text-link" />
          <h3 className="text-sm font-medium text-wrap">{title}</h3>
        </div>

        <p className="text-sm text-foreground/60 mt-3 text-pretty line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  )
}
