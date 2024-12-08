'use client'
import * as React from 'react'

import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { usePathname } from 'next/navigation'
import { useClickOutside, useKeyEvent, usePathChange } from '@shared/hooks'
import { Button } from '../ui/button'

interface NavMenuItemProps {
  children: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

function renderPathBrand(pathname: string): string {
  if (pathname === '/') {
    return 'home'
  } else {
    const brand = pathname.replace('/', '')
    if (brand.includes('works')) {
      return brand.split('/')[0]
    }

    return brand
  }
}

export function Brand(): React.ReactElement {
  const pathname = usePathname()

  return (
    <div className="text-foreground/50 dark:text-foreground/70 text-sm gap-3 flex relative z-10">
      <Link
        href={'/'}
        className="transition-all duration-300 hover:-translate-x-1"
      >
        <span className="font-medium">nyomansunima.one</span>
      </Link>
      <span className="text-foreground hidden tablet:block">/</span>
      <span className="text-foreground transition-all duration-300 hover:-translate-x-1 cursor-pointer hidden tablet:block">
        {renderPathBrand(pathname)}
      </span>
    </div>
  )
}

export function NavMenuItem({
  children,
  href,
  target,
}: NavMenuItemProps): React.ReactElement {
  return (
    <li className="flex w-full col-span-1">
      <Link
        href={href}
        target={target}
        className="flex justify-center items-center text-sm transition-all duration-300 hover:-translate-x-1"
      >
        {children}
      </Link>
    </li>
  )
}

function Menu(): React.ReactElement {
  const modalRef = React.useRef<HTMLDivElement>(null)
  const [isShow, setShow] = React.useState<boolean>(false)

  useClickOutside(modalRef, () => {
    setShow(false)
  })

  usePathChange(() => {
    setShow(false)
  })

  useKeyEvent('keydown', 'Escape', () => {
    setShow(false)
  })

  return (
    <div className="relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => setShow(true)}
              className="hover:-translate-y-1"
            >
              <i className="fi text-xs fi-rr-bookmark" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Explore all of the menus, support & contact
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {isShow && (
        <div
          className="flex px-6 py-5 rounded-xl border border-border bg-surface w-[300px] absolute z-20 top-12 right-0"
          ref={modalRef}
        >
          <ul className="grid grid-cols-2 w-full gap-x-4 gap-y-4">
            <NavMenuItem href="/works">Works</NavMenuItem>
            <NavMenuItem href="/crafts">Crafts</NavMenuItem>
            <NavMenuItem href="/stories">Stories</NavMenuItem>
            <NavMenuItem href="/journeys">Journeys</NavMenuItem>
            <NavMenuItem href="/resources">Resources</NavMenuItem>
            <NavMenuItem href="/about">About</NavMenuItem>
            <NavMenuItem href="/contact">Contact</NavMenuItem>
            <NavMenuItem href="/support">Support</NavMenuItem>
            <NavMenuItem
              href="https://nyomansunima.lemonsqueezy.com?ref=nyomansunima"
              target="_blank"
            >
              Goodies
            </NavMenuItem>
          </ul>
        </div>
      )}
    </div>
  )
}

export function Actions(): React.ReactElement {
  return (
    <div className="flex relative z-10 gap-2">
      <Menu />
    </div>
  )
}

export function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between h-20 tablet:h-44">
      <Brand />
      <Actions />
    </header>
  )
}
