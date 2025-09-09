export interface BioItemData {
  url: string
  label: string
}

interface BioItemProps {
  data: BioItemData
}

export function BioItem({ data }: BioItemProps) {
  const { label, url } = data
  const isValidURL = url.includes("https://") || url.includes("http://")

  return (
    <a
      href={url}
      target={isValidURL ? "_blank" : "_self"}
      className="flex items-center gap-2 py-2"
    >
      <i className="fi fi-sr-bullet text-sm text-foreground/40" />
      <span>{label}</span>
    </a>
  )
}
