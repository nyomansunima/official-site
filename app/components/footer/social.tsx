'use client'

import * as React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { toast } from '../ui/toast'

interface Social {
  label: string
  href: string
  icon: string
}

interface SocialItemProps {
  social: Social
}

// predefined socials and links that help to
// connect with the author
const socials: Social[] = [
  {
    label: 'Follow on twitter',
    href: 'https://twitter.com/nyomansunima',
    icon: 'fi fi-brands-twitter',
  },
  {
    label: 'Connect now',
    href: 'https://linkedin.com/in/nyomansunima',
    icon: 'fi fi-brands-linkedin',
  },
  {
    label: 'See story',
    href: 'https://facebook.com/nyomansunima',
    icon: 'fi fi-brands-facebook',
  },
  {
    label: 'Copy & Send email',
    href: 'nyomansunima@gmail.com',
    icon: 'fi fi-rr-envelope',
  },
  {
    label: 'See the gallery',
    href: 'https://instagram.com/nyomansunima',
    icon: 'fi fi-brands-instagram',
  },
  {
    label: 'Coding projects',
    href: 'https://github.com/nyomansunima',
    icon: 'fi fi-brands-github',
  },
  {
    label: 'Design projects',
    href: 'https://dribbble.com/nyomansunima',
    icon: 'fi fi-brands-dribbble',
  },
]

export function SocialMediaList(): React.ReactElement {
  return (
    <div className="flex justify-center px-5 py-10">
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {socials.map((soc, index) => (
          <SocialItem social={soc} key={index} />
        ))}
      </ul>
    </div>
  )
}

export function SocialItem({ social }: SocialItemProps): React.ReactElement {
  const { href, icon, label } = social
  const isEmail = icon.includes('fi-rr-envelope') || label.includes('Copy')

  function copyEmailToClipboard(): void {
    const email = href

    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast('Nice, Email already copied to clipboard')
      })
      .catch(() => {
        toast('Opps, Cannot copy the email')
      })
  }

  return (
    <li className="flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger suppressHydrationWarning asChild>
            {isEmail ? (
              <Button
                variant={'outline'}
                size={'icon'}
                className="text-sm h-12 w-12 transition-all duration-500 hover:scale-95 bg-ambient"
                onClick={copyEmailToClipboard}
              >
                <i className={icon} />
              </Button>
            ) : (
              <Button
                variant={'outline'}
                size={'icon'}
                asChild
                className="text-sm h-12 w-12 transition-all duration-500 hover:scale-95 bg-ambient"
              >
                <Link href={href} target="_blank">
                  <i className={icon} />
                </Link>
              </Button>
            )}
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  )
}