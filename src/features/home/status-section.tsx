import { StatusItem } from "./status-item"
import status from "./status-data.json"

export function StatusSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col leading-7! text-pretty">
        <span className="text-sm font-mono text-link tracking-tight">
          Progress & updates.
        </span>
        <h2 className="py-2 text-lg font-medium">What's going on?</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        Currently working on cool projects and build something that make me
        exciting. That's including saas, products or services.
      </p>

      <ul className="flex flex-col mt-6 gap-3 pl-2">
        {status.map((status, i) => (
          <StatusItem key={i} status={status} />
        ))}
      </ul>
    </section>
  )
}
