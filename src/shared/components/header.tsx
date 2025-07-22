import { Link } from "react-router"
import { Menu } from "./menu"

export function Brand() {
  return (
    <Link
      to={"/"}
      className="flex justify-center items-center rounded-2xl text-sm transition-all duration-300 font-medium h-10 w-10 border-2 border-border border-dashed hover:border-link hover:translate-y-1"
    >
      <i className="fi fi-sc-bookmark" />
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
