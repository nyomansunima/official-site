import { Link } from "react-router"

export type StatusData = {
  title: string
  url: string
}

type StatusItemProps = {
  status: StatusData
}

export function StatusItem({ status }: StatusItemProps) {
  const { title, url } = status
  const isValidURL = url.includes("https://") || url.includes("http://")

  return (
    <li className="flex items-center transition-all duration-300 ml-2 hover:text-link">
      <Link
        to={url}
        target={isValidURL ? "_blank" : "_self"}
        className="flex items-center gap-2"
      >
        <i className="fi fi-br-circle-small" />
        <span>{title}</span>
      </Link>
    </li>
  )
}
