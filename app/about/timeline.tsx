import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

interface Timeline {
  title: string
  description: string
  image: string
  date: string
  url: string
}
interface TimelineItemProps {
  timeline: Timeline
}

// predefined timeline data
// can be changes and sort manualy to show on about section
const timelines: Timeline[] = [
  {
    title: 'Fresh graduated',
    description: 'Bali Mandara (Vocation HS)',
    image: '👍',
    date: 'July 2019',
    url: 'https://smknbalimandara.sch.id',
  },
  {
    title: 'Junior software engineer',
    description: 'Dimata IT Solutions',
    image: '🚜',
    date: 'Aug 2019 - Sep 2020',
    url: 'https://dimata.com',
  },
  {
    title: 'Senior software engineer',
    description: 'Dimata IT Solutions',
    image: '🛼',
    date: 'Sep 2020 - Dec 2022',
    url: 'https://dimata.com',
  },
  {
    title: 'Founder',
    description: 'Weebo (Web design agency)',
    image: '🗳️',
    date: 'Jan 2024 - Present',
    url: 'https://weebo.one',
  },
  {
    title: 'Founder',
    description: 'Sonibble (Creative agency)',
    image: '🏀',
    date: 'May 2024 - Present',
    url: 'https://sonibble.one',
  },
  {
    title: 'Create website resources',
    description: 'Weelab',
    image: '🐔',
    date: 'Aug 2024 - Present',
    url: 'https://weelab.space',
  },
]

function TimelineItem({ timeline }: TimelineItemProps): React.ReactElement {
  const { date, description, image, title, url } = timeline
  const isImageUrl =
    image.includes('/images') ||
    image.includes('https://') ||
    image.includes('http://')

  return (
    <Link
      href={url}
      target="_blank"
      className="flex col-span-1 border border-border bg-ambient rounded-2xl p-3 cursor-pointer transition-all duration-300 hover:scale-95"
    >
      {isImageUrl ? (
        <picture className="flex relative overflow-hidden rounded-xl h-12 w-12">
          <Image src={image} alt={title} fill className="object-cover" />
        </picture>
      ) : (
        <div className="h-12 w-12 rounded-xl bg-secondary/60 flex justify-center items-center">
          {image}
        </div>
      )}
      <div className="flex flex-col flex-grow ml-3 gap-1">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-foreground/60">{description}</span>
        <div className="items-center flex mt-1">
          <span className="flex justify-center items-center rounded-full text-xs text-foreground">
            {date}
          </span>
        </div>
      </div>
    </Link>
  )
}

function TimelineList(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3 w-full">
      {timelines.map((tl, index) => (
        <TimelineItem timeline={tl} key={index} />
      ))}
    </div>
  )
}

export function TimelineSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 laptop:pb-56">
      <h2 className="text-2xl laptop:text-3xl !leading-tight font-medium">
        Timeline
      </h2>

      <div className="flex mt-7">
        <p className="!leading-relaxed ">
          Journey of my life from how it start and how it goes. Everything
          documented on the timeline. See all of the detail information and how
          it’s going. See everything from works, career, moments and product
          launching.
        </p>
      </div>

      <div className="flex w-full mt-16">
        <TimelineList />
      </div>
    </section>
  )
}
