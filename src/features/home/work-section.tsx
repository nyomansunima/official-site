import { WorkItem } from "@features/works";
import type { Work } from "content-collections";

type Props = {
  works: Work[];
};

export function WorkSection({ works }: Props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Featured works.
        </span>
        <h2 className="mt-2 font-medium text-lg">Recent work.</h2>

        <p className="mt-6 text-pretty leading-7">
          See my recent works around design, development, hacking, saas, and my
          business.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-16">
        {works.map((work, i) => (
          <WorkItem key={i} work={work} />
        ))}
      </div>
    </section>
  );
}
