import * as React from "react"
import { Link, useLocation } from "react-router"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

interface NavMenuItemProps {
  children: React.ReactNode
  href: string
}

export function NavMenuItem({ children, href }: NavMenuItemProps) {
  return (
    <li className="flex w-full col-span-1">
      <Link
        to={href}
        viewTransition
        className="flex justify-center items-center text-sm transition-all duration-300 text-foreground hover:text-link"
      >
        {children}
      </Link>
    </li>
  )
}

export function Menu() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="flex justify-center items-center cursor-pointer group relative h-10 w-10 rounded-2xl text-sm border-2 border-border border-dashed transition-all duration-300 hover:border-link"
        aria-label="Menu Button"
      >
        <i className="fi fi-sr-add"></i>
      </PopoverTrigger>
      <PopoverContent>
        <ul className="grid grid-cols-2 w-full gap-x-4 gap-y-4">
          <NavMenuItem href="/works">Works</NavMenuItem>
          <NavMenuItem href="/collabs">Collabs</NavMenuItem>
          <NavMenuItem href="/crafts">Crafts</NavMenuItem>
          <NavMenuItem href="/stories">Stories</NavMenuItem>
          <NavMenuItem href="/journeys">Journeys</NavMenuItem>
          <NavMenuItem href="/resources">Resources</NavMenuItem>
          <NavMenuItem href="/about">About</NavMenuItem>
          <NavMenuItem href="/contact">Contact</NavMenuItem>
          <NavMenuItem href="/support">Support</NavMenuItem>
        </ul>
      </PopoverContent>
    </Popover>
  )
}
