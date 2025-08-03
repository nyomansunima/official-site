import { StatusItem } from "./status-item"
import status from "./status-data.json"

export function StatusSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col leading-7! text-pretty">
        <span className="text-sm font-mono text-foreground/40 tracking-tight">
          Progress & updates.
        </span>
        <h2 className="text-lg font-medium mt-2">What's going on?</h2>

        <p className="mt-6 text-pretty leading-7">
          Currently working on cool projects and build something that make me
          exciting. That's including saas, products or services.
        </p>
      </div>

      <ul className="flex flex-col mt-10 gap-1">
        {status.map((status, i) => (
          <StatusItem key={i} status={status} />
        ))}
      </ul>
    </section>
  )
}
