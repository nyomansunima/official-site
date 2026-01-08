import resources from "./resources-data.json" with { type: "json" };

interface ResData {
  title: string;
  url: string;
}

interface ResItemProps {
  source: ResData;
}

interface ResGroupData {
  title: string;
  list: ResData[];
}

interface GroupProps {
  group: ResGroupData;
}

function ResItem({ source }: ResItemProps) {
  const { title, url } = source;

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

function ResGroup({ group }: GroupProps) {
  const { title, list } = group;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground/60">{title}:</h2>

      <div className="grid grid-cols-2 gap-x-16 gap-y-1 md:grid-cols-3">
        {list.map((sou, index) => (
          <ResItem key={index} source={sou} />
        ))}
      </div>
    </div>
  );
}

export function ResourcesSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-16">
        {resources.map((group, index) => (
          <ResGroup group={group} key={index} />
        ))}
      </div>
    </section>
  );
}
