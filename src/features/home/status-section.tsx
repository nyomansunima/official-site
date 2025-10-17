import status from "./status-data.json" with { type: "json" };
import { StatusItem } from "./status-item";

export function StatusSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col text-pretty leading-7!">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Progress & updates.
        </span>
        <h2 className="mt-2 font-medium text-lg">What's going on?</h2>

        <p className="mt-6 text-pretty leading-7">
          Currently working on cool projects and build something that make me
          exciting. That's including saas, products or services.
        </p>
      </div>

      <ul className="mt-10 flex flex-col gap-1">
        {status.map((stat, i) => (
          <StatusItem key={i} status={stat} />
        ))}
      </ul>
    </section>
  );
}
