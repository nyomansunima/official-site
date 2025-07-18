import { Link } from "react-router"

export interface StatusData {
  title: string
  url: string
}

interface StatusItemProps {
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
        <i className="fi fi-sc-check-circle" />
        <span>{title}</span>
      </Link>
    </li>
  )
}
