import { SupportItem } from "./support-item"
import supports from "./support-data.json"

export function SupportSection() {
  return (
    <section className="flex">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-link font-mono tracking-tight">
            Support.
          </span>
          <h2 className="text-lg font-medium">Help me out.</h2>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3">
          {supports.map((support, index) => (
            <SupportItem support={support} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
