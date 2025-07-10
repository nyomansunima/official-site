import { Link } from "react-router"

export type CraftData = {
  title: string
  description: string
  link: string
}

type Props = {
  craft: CraftData
}

export function CraftItem({ craft }: Props) {
  const { title, description, link } = craft

  return (
    <Link
      to={link}
      target="_blank"
      className="flex p-1 rounded-2xl bg-surface relative group transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex flex-col h-full w-full p-3 rounded-xl border-2 border-border border-dashed transition-all duration-300 hover:border-link">
        <div className="flex gap-2">
          <i className="fi fi-ss-circle-small text-foreground/60 group-hover:text-link" />
          <h3 className="text-sm font-medium">{title}</h3>
        </div>

        <p className="text-sm mt-3 text-foreground/60 line-clamp-2 text-pretty leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  )
}
