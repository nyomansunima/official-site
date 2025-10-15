import type { BioItemData } from "./bio-item"
import bioData from "./bio-data.json"
import { BioItem } from "./bio-item"

const bios = bioData as BioItemData[]

export function BioSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono text-foreground/40 tracking-tight">
          Links & resources.
        </span>
        <h2 className="text-lg font-medium mt-2">Explore good things.</h2>

        <p className="mt-6 text-pretty leading-7">
          Check something that make you feel better or see what's i have built
          for you. Check it now.
        </p>
      </div>

      <ul className="flex flex-col mt-10 gap-1">
        {bios.map((data, index) => (
          <BioItem data={data} key={index} />
        ))}
      </ul>
    </section>
  )
}
