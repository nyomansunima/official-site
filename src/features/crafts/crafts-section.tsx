import crafts from "./crafts-data.json" with { type: "json" };

type CraftData = {
  title: string;
  link: string;
};

type CraftItemProps = {
  craft: CraftData;
};

type CraftGroupData = {
  title: string;
  list: CraftData[];
};

type CraftGroupProps = {
  group: CraftGroupData;
};

function CraftItem({ craft }: CraftItemProps) {
  const { title, link } = craft;

  return (
    <a className="flex items-center gap-2 py-2" href={link} target="_blank">
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

function CraftGroup({ group }: CraftGroupProps) {
  const { title, list } = group;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground/60">{title}:</h2>

      <div className="flex flex-col gap-1">
        {list.map((craft, index) => (
          <CraftItem craft={craft} key={index} />
        ))}
      </div>
    </div>
  );
}

export function CraftSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-16">
        {crafts.map((group, i) => (
          <CraftGroup group={group} key={i} />
        ))}
      </div>
    </div>
  );
}
