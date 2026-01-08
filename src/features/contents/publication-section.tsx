import publications from "./publication-data.json" with { type: "json" };

interface PublicationData {
  title: string;
  url: string;
}

interface PublicationItemProps {
  publication: PublicationData;
}

function PublicationItem({ publication }: PublicationItemProps) {
  const { title, url } = publication;

  return (
    <a className="flex items-center gap-2 py-2" href={url} target="_blank">
      <svg
        className="fill-foreground/40"
        height="10"
        viewBox="0 0 24 24"
        width="10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
      </svg>
      <span>{title}</span>
    </a>
  );
}

export function PublicationSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-foreground/60">Publications:</h2>

      <div className="grid grid-cols-2 gap-x-16 gap-y-1 md:grid-cols-3">
        {publications.map((pub, index) => (
          <PublicationItem key={index} publication={pub} />
        ))}
      </div>
    </section>
  );
}
