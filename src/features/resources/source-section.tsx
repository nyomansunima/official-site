import resources from "./resources-data.json" with { type: "json" };
import { SourceGroup } from "./source-group";

export function SourceSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Resources.
        </span>
        <h2 className="mt-2 font-medium text-lg">Find goodies & things.</h2>

        <p className="mt-6 text-pretty leading-7">
          Helpful websites that I've been using for years that have helped me in
          developing applications and much more.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-16">
        {resources.map((group, index) => (
          <SourceGroup group={group} key={index} />
        ))}
      </div>
    </section>
  );
}
