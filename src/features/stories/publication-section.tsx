import * as React from "react"
import { PublicationData, PublicationItem } from "./publication-item"
import publicationData from "./publication-data.json"

const publications = publicationData as PublicationData[]

export function PublicationSection() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono tracking-tight">
          Publications.
        </span>
        <h2 className="text-lg font-medium">Where's the stories?</h2>
      </div>

      <div className="grid grid-cols-2 tablet:grid-cols-3 gap-2 w-full">
        {publications.map((pub, index) => (
          <PublicationItem publication={pub} key={index} />
        ))}
      </div>
    </section>
  )
}
