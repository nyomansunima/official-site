import supports from "./support-data.json" with { type: "json" };
import { SupportItem } from "./support-item";

export function SupportSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Support.
        </span>
        <h2 className="mt-2 font-medium text-lg">Help me out.</h2>

        <p className="mt-6 text-pretty leading-7">
          Support my works, open source projects that i've working on. You can
          give me a coffee to speed up.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        {supports.map((support, index) => (
          <SupportItem key={index} support={support} />
        ))}
      </div>
    </section>
  );
}
