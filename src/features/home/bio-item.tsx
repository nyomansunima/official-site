import * as React from "react"
import Link from "next/link"

export type BioItemData = {
  url: string
  label: string
}

type BioItemProps = {
  data: BioItemData
}

export function BioItem({ data }: BioItemProps) {
  const { label, url } = data
  const isValidURL = url.includes("https://") || url.includes("http://")

  return (
    <li className="flex items-center transition-all duration-300 ml-2 group hover:text-link">
      <Link
        href={url}
        target={isValidURL ? "_blank" : "_self"}
        className="flex items-center gap-2"
      >
        <i className="fi fi-br-circle-small text-sm text-foreground/60 group-hover:text-link" />
        <span>{label}</span>
      </Link>
    </li>
  )
}
