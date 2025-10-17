import bioData from "./bio-data.json" with { type: "json" };
import type { BioItemData } from "./bio-item";
import { BioItem } from "./bio-item";

const bios = bioData as BioItemData[];

export function BioSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Links & resources.
        </span>
        <h2 className="mt-2 font-medium text-lg">Explore good things.</h2>

        <p className="mt-6 text-pretty leading-7">
          Check something that make you feel better or see what's i have built
          for you. Check it now.
        </p>
      </div>

      <ul className="mt-10 flex flex-col gap-1">
        {bios.map((data, index) => (
          <BioItem data={data} key={index} />
        ))}
      </ul>
    </section>
  );
}
