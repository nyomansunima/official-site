import { useLocation } from "@tanstack/react-router";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type NavMenuItemProps = {
  children: React.ReactNode;
  href: string;
};

function Brand() {
  return (
    <a
      className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary font-medium text-secondary-foreground text-sm transition-all duration-300"
      href="/"
    >
      <i className="fi fi-sr-folder" />
    </a>
  );
}

export function NavMenuItem({ children, href }: NavMenuItemProps) {
  return (
    <a
      className="col-span-1 flex items-center text-foreground text-sm transition-all duration-300 hover:text-foreground/40"
      href={href}
    >
      {children}
    </a>
  );
}

function Menu() {
  const [open, setOpen] = React.useState(false);
  const _location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        aria-label="Menu Button"
        className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl bg-secondary text-secondary-foreground text-sm"
      >
        <i className="fi fi-sr-add" />
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid w-full grid-cols-2 gap-x-4 gap-y-4">
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
  );
}

export function Header() {
  return (
    <header className="flex h-24 tablet:h-28 items-center justify-between">
      <Brand />

      <div className="flex items-center gap-2">
        <Menu />
      </div>
    </header>
  );
}
