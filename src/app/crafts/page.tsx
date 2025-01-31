import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { CraftListSection } from '@features/crafts'

export const metadata: Metadata = {
  title: 'Crafts | Nyoman Sunima',
  description:
    'See all of my projects, business, products, side husltes and something that i built',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Crafts | Nyoman Sunima',
    description:
      'See all of my projects, business, products, side husltes and something that i built',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Crafts | Nyoman Sunima',
    description:
      'See all of my projects, business, products, side husltes and something that i built',
  },
}

export default function CraftsPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <CraftListSection />
    </div>
  )
}
