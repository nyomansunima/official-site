import { Link } from "react-router"
import { Menu } from "./menu"

export function Brand() {
  return (
    <Link
      to={"/"}
      className="flex justify-center items-center rounded-2xl text-sm transition-all duration-300 font-medium h-10 w-10 bg-secondary text-secondary-foreground"
    >
      <i className="fi fi-sr-folder" />
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
