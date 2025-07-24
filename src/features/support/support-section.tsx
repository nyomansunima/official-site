import { SupportItem } from "./support-item"
import supports from "./support-data.json"

export function SupportSection() {
  return (
    <section className="flex">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-link font-mono tracking-tight">
            Support.
          </span>
          <h2 className="text-lg font-medium">Help me out.</h2>
        </div>

        <p className="mt-6 text-pretty leading-7">
          Support my works, open source projects that i've working on. You can
          give me a coffee to speed up.
        </p>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3 mt-10">
          {supports.map((support, index) => (
            <SupportItem support={support} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
