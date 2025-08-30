import { Link } from "react-router"
import { Menu } from "./menu"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"

function Brand() {
  return (
    <Link
      to={"/"}
      className="flex justify-center items-center rounded-2xl text-sm transition-all duration-300 font-medium h-10 w-10 bg-secondary text-secondary-foreground"
    >
      <i className="fi fi-sr-folder" />
    </Link>
  )
}

function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()

  function switchTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <Button variant={"secondary"} size={"icon"} onClick={switchTheme}>
      <i className="fi fi-sr-moon-stars" />
    </Button>
  )
}

export function Header() {
  return (
    <header className="flex items-center justify-between h-24 tablet:h-28">
      <Brand />

      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <Menu />
      </div>
    </header>
  )
}
