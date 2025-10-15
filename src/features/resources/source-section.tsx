import resources from "./resources-data.json"
import { SourceGroup } from "./source-group"

export function SourceSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm font-mono tracking-tight text-foreground/40">
          Resources.
        </span>
        <h2 className="text-lg font-medium mt-2">Find goodies & things.</h2>

        <p className="mt-6 text-pretty leading-7">
          Helpful websites that I've been using for years that have helped me in
          developing applications and much more.
        </p>
      </div>

      <div className="flex flex-col gap-16 mt-10">
        {resources.map((group, index) => (
          <SourceGroup group={group} key={index} />
        ))}
      </div>
    </section>
  )
}
