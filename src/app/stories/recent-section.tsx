import * as React from 'react'
import { RecentData, RecentItem } from './recent-item'
import storiesData from './stories-data.json'

const recents = [...storiesData].reverse() as RecentData[]

export function RecentlySection(): React.ReactElement {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground/60 font-mono">Recents.</span>
        <h2 className="text-lg font-medium">Just now.</h2>
        <hr className="border-dashed !mt-3" />
      </div>

      <div className="flex flex-col gap-2">
        {recents.map((recent, i) => (
          <RecentItem recent={recent} key={i} />
        ))}
      </div>
    </section>
  )
}
