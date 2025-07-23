import { BioItem } from "./bio-item"
import type { BioItemData } from "./bio-item"
import bioData from "./bio-data.json"

const bios = bioData as BioItemData[]

export function BioSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono text-link tracking-tight">
          Links & resources.
        </span>
        <h2 className="py-2 text-lg font-medium">Explore good things.</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        Check something that make you feel better or see what's i have built for
        you. Check it now.
      </p>

      <ul className="flex flex-col mt-6 gap-3 pl-2">
        {bios.map((data, index) => (
          <BioItem data={data} key={index} />
        ))}
      </ul>
    </section>
  )
}
