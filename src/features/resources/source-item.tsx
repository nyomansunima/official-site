export interface SourceData {
  title: string
  url: string
}

interface Props {
  source: SourceData
}

export function SourceItem({ source }: Props) {
  const { title, url } = source

  return (
    <a href={url} target="_blank" className="flex items-center py-2 gap-2">
      <i className="fi fi-sr-bullet text-sm text-foreground/40" />
      <span>{title}</span>
    </a>
  )
}
