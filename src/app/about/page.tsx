import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import {
  DetailSection,
  SharingSection,
  ActivitySection,
  IndieSection,
  AchievementSection,
  EndWordSection,
} from '@features/about'
import { ArticleContent } from '@shared/components'

export const metadata: Metadata = {
  title: 'About | Nyoman Sunima',
  description: 'The whole story about me, nyoman sunima and all of the journey',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'About | Nyoman Sunima',
    description:
      'The whole story about me, nyoman sunima and all of the journey',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'About | Nyoman Sunima',
    description:
      'The whole story about me, nyoman sunima and all of the journey',
  },
}

export default function AboutPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <ArticleContent>
        <DetailSection />
        <ActivitySection />
        <SharingSection />
        <IndieSection />
        <AchievementSection />
        <EndWordSection />
      </ArticleContent>
    </div>
  )
}
