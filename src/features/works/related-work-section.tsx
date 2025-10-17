import type { WorkData } from "./work-service";

type RelatedWorksSectionProps = {
  relatedWorks: WorkData[];
};

type ItemProps = {
  work: WorkData;
};

function Item({ work }: ItemProps) {
  const { title, slug } = work;

  return (
    <a className="flex items-center gap-2 py-2" href={`/works/${slug}`}>
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      <span>{title}</span>
    </a>
  );
}

export function RelatedWorkSection({ relatedWorks }: RelatedWorksSectionProps) {
  return (
    <section className="mt-20 flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Read more.
        </span>
        <h2 className="mt-2 font-medium text-lg">Another works.</h2>
      </div>

      <ul className="mt-6 flex flex-col gap-2">
        {relatedWorks.map((work, i) => (
          <Item key={i} work={work} />
        ))}
      </ul>
    </section>
  );
}
