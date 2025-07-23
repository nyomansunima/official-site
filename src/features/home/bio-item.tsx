import { Link } from "react-router"

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
    <li className="flex items-center group">
      <Link
        to={url}
        target={isValidURL ? "_blank" : "_self"}
        className="flex items-center gap-2"
      >
        <i className="fi fi-sr-bullet text-sm transition-all duration-300 group-hover:scale-125" />
        <span>{label}</span>
      </Link>
    </li>
  )
}
