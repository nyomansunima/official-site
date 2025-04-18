import { Button } from '@shared/components'
import Link from 'next/link'
import * as React from 'react'

export function CTASection(): React.ReactElement {
  return (
    <section className="mt-24">
      <div className="flex flex-col not-prose">
        <span className="text-sm font-mono text-foreground/60">
          Get Started.
        </span>
        <h2 className="py-2">What you're waiting for?</h2>
        <hr className="mt-2 border-dashed" />
      </div>

      <p>
        Don't waste time and attention for someone else. You in the perfect
        spots and with the right person.
      </p>

      <div className="not-prose flex gap-3 mt-10">
        <Button asChild variant={'outline'}>
          <Link
            href={'https://cal.com/nyomansunima/build-opportunity'}
            target="_blank"
          >
            Book a Call
          </Link>
        </Button>

        <Button asChild variant={'text'}>
          <Link href={'/contact'}>Connect</Link>
        </Button>
      </div>
    </section>
  )
}
