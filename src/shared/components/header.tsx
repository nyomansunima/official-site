import { Link } from "react-router"
import { Menu } from "./menu"

export function Brand() {
  return (
    <Link
      to={"/"}
      className="flex items-center text-sm transition-all duration-300 hover:text-link"
    >
      nyomansunima.one
    </Link>
  )
}

export function Header() {
  return (
    <header className="flex items-center justify-between h-24 tablet:h-28">
      <Brand />
      <Menu />
    </header>
  )
}
