import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { ContactList, SocialMediaList } from '@features/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me right now, start your idea',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Contact',
    description: 'Get in touch with me right now, start your idea',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Contact',
    description: 'Get in touch with me right now, start your idea',
  },
}

export default function ContactPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-medium !leading-tight">
        Get in touch & build
        <br />
        things together.
      </h3>

      <div className="flex flex-col mt-10">
        <ContactList />
        <SocialMediaList />
      </div>
    </div>
  )
}
