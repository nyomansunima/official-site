import type { Work } from "content-collections";

type RelatedWorksSectionProps = {
  relatedWorks: Work[];
};

type ItemProps = {
  work: Work;
};

function Item({ work }: ItemProps) {
  const { title, _meta } = work;

  return (
    <a className="flex items-center gap-2 py-2" href={`/works/${_meta.path}`}>
      <svg
        className="fill-foreground/40"
        height="14"
        viewBox="0 0 24 24"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
      </svg>
      <span>{title}</span>
    </a>
  );
}

export function RelatedWorkSection({ relatedWorks }: RelatedWorksSectionProps) {
  return (
    <section className="mt-20 flex flex-col border-border border-t border-dashed pt-16">
      <h2 className="mt-2 font-medium text-lg">Another works</h2>

      <ul className="mt-6 flex flex-col gap-2">
        {relatedWorks.map((work, i) => (
          <Item key={i} work={work} />
        ))}
      </ul>
    </section>
  );
}
