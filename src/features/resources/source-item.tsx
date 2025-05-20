import { Link } from "react-router"

export type SourceData = {
  title: string
  description: string
  url: string
}

type SourceItemProps = {
  source: SourceData
}

export function SourceItem({ source }: SourceItemProps) {
  const { title, description, url } = source

  return (
    <Link
      to={url}
      target="_blank"
      className="flex bg-surface p-1 rounded-2xl col-span-1 transition-all duration-300 hover:-translate-y-1 group relative"
    >
      <div className="flex flex-col w-full h-full border-2 border-border border-dashed rounded-xl p-3">
        <div className="flex items-center gap-2">
          <i className="fi fi-br-circle-small text-foreground/60" />
          <h3 className="text-sm font-medium">{title}</h3>
        </div>

        <p className="text-sm text-foreground/60 mt-3 line-clamp-2 text-pretty leading-relaxed">
          {description}
        </p>

        <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 text-foreground/60 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
          <i className="fi fi-br-arrow-small-right -rotate-45" />
        </div>
      </div>
    </Link>
  )
}
