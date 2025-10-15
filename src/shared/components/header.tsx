import { useLocation } from "@tanstack/react-router"
import * as React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

interface NavMenuItemProps {
  children: React.ReactNode
  href: string
}

function Brand() {
  return (
    <a
      href="/"
      className="flex justify-center items-center rounded-2xl text-sm transition-all duration-300 font-medium h-10 w-10 bg-secondary text-secondary-foreground"
    >
      <i className="fi fi-sr-folder" />
    </a>
  )
}

export function NavMenuItem({ children, href }: NavMenuItemProps) {
  return (
    <a
      href={href}
      className="flex col-span-1 items-center text-sm transition-all duration-300 text-foreground hover:text-foreground/40"
    >
      {children}
    </a>
  )
}

function Menu() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="flex justify-center items-center cursor-pointer group relative h-10 w-10 rounded-2xl text-sm bg-secondary text-secondary-foreground"
        aria-label="Menu Button"
      >
        <i className="fi fi-sr-add"></i>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid grid-cols-2 w-full gap-x-4 gap-y-4">
          <NavMenuItem href="/works">Works</NavMenuItem>
          <NavMenuItem href="/collabs">Collabs</NavMenuItem>
          <NavMenuItem href="/crafts">Crafts</NavMenuItem>
          <NavMenuItem href="/stories">Stories</NavMenuItem>
          <NavMenuItem href="/journeys">Journeys</NavMenuItem>
          <NavMenuItem href="/resources">Resources</NavMenuItem>
          <NavMenuItem href="/about">About</NavMenuItem>
          <NavMenuItem href="/contact">Contact</NavMenuItem>
          <NavMenuItem href="/support">Support</NavMenuItem>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="flex items-center justify-between h-24 tablet:h-28">
      <Brand />

      <div className="flex items-center gap-2">
        <Menu />
      </div>
    </header>
  )
}
