import Link from "next/link"

export type PublicationData = {
  title: string
  url: string
}

type PublicationItemProps = {
  publication: PublicationData
}

export function PublicationItem({ publication }: PublicationItemProps) {
  const { title, url } = publication

  return (
    <Link
      href={url}
      target="_blank"
      className="flex bg-surface rounded-2xl col-span-1 p-1 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex items-center rounded-xl h-full w-full gap-2 p-3 border-2 border-border border-dashed group-hover:border-link">
        <i className="fi fi-br-circle-small text-foreground/60" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </Link>
  )
}
