import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { ContactList } from './contact-list'
import { SocialMediaList } from './social-list'

export const metadata: Metadata = {
  title: 'Contact | Nyoman Sunima',
  description: 'Get in touch with me right now, start your idea',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Contact | Nyoman Sunima',
    description: 'Get in touch with me right now, start your idea',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Contact | Nyoman Sunima',
    description: 'Get in touch with me right now, start your idea',
  },
}

export default function ContactPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 mb-10">
        <span className="text-sm text-foreground/60 font-mono">Contact.</span>
        <h2 className="text-lg font-medium">Connect & collabs.</h2>
      </div>

      <ContactList />
      <SocialMediaList />
    </div>
  )
}
