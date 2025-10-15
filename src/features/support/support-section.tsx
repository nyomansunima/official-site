import supports from "./support-data.json"
import { SupportItem } from "./support-item"

export function SupportSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Support.
        </span>
        <h2 className="text-lg font-medium mt-2">Help me out.</h2>

        <p className="mt-6 text-pretty leading-7">
          Support my works, open source projects that i've working on. You can
          give me a coffee to speed up.
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-10">
        {supports.map((support, index) => (
          <SupportItem support={support} key={index} />
        ))}
      </div>
    </section>
  )
}
