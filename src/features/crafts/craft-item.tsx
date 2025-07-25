import { Link } from "react-router"

export interface CraftData {
  title: string
  description: string
  link: string
}

interface Props {
  craft: CraftData
}

export function CraftItem({ craft }: Props) {
  const { title, description, link } = craft

  return (
    <Link
      to={link}
      target="_blank"
      className="flex flex-col bg-surface p-3 rounded-2xl border-2 border-border border-dashed transition-all duration-300 hover:border-link"
    >
      <div className="flex gap-1">
        <i className="fi fi-sr-bullet text-sm" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>

      <p className="text-sm mt-3 text-foreground/60 line-clamp-2 text-pretty leading-relaxed">
        {description}
      </p>
    </Link>
  )
}
