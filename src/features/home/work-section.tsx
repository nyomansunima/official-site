import type { Work } from "content-collections";

type Props = {
  works: Work[];
};

type WorkItemProps = {
  work: Work;
};

function WorkItem({ work }: WorkItemProps) {
  return (
    <a className="flex items-center gap-2" href={`/works/${work._meta.path}`}>
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      {work.title}
    </a>
  );
}

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

      <div className="mt-10 flex flex-col gap-5">
        {works.map((work, i) => (
          <WorkItem key={i} work={work} />
        ))}
      </div>
    </section>
  );
}
