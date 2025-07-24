import { SourceGroup } from "./source-group"
import resources from "./resources-data.json"

export function SourceSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-mono tracking-tight text-link">
          Resources.
        </span>
        <h2 className="text-lg font-medium">Find goodies & things.</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        Helpful websites that I've been using for years that have helped me in
        developing applications and much more.
      </p>

      <div className="flex flex-col gap-20 mt-10">
        {resources.map((group, index) => (
          <SourceGroup group={group} key={index} />
        ))}
      </div>
    </section>
  )
}
