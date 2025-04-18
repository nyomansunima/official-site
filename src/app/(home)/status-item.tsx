import * as React from 'react'
import Link from 'next/link'

export type StatusData = {
  title: string
  url: string
}

type StatusItemProps = {
  status: StatusData
}

export function StatusItem({ status }: StatusItemProps): React.ReactElement {
  const { title, url } = status
  const isValidURL = url.includes('https://') || url.includes('http://')

  return (
    <li className="flex items-center transition-all duration-300 ml-2 text-foreground/60 hover:text-foreground">
      <Link
        href={url}
        target={isValidURL ? '_blank' : '_self'}
        className="flex items-center gap-2"
      >
        <i className="fi fi-br-circle-small text-sm" />
        <span>{title}</span>
      </Link>
    </li>
  )
}
