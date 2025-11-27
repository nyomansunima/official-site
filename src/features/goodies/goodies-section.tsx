import goodies from "./goodies-data.json" with { type: "json" };

type GoodieData = {
  title: string;
  url: string;
};

type GoodieItemProps = {
  source: GoodieData;
};

type GoodieGroupData = {
  title: string;
  list: GoodieData[];
};

type GroupProps = {
  group: GoodieGroupData;
};

function GoodieItem({ source }: GoodieItemProps) {
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

function GoodieGroup({ group }: GroupProps) {
  const { title, list } = group;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground/60">{title}:</h2>

      <div className="flex flex-col gap-1">
        {list.map((sou, index) => (
          <GoodieItem key={index} source={sou} />
        ))}
      </div>
    </div>
  );
}

export function GoodiesSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-16">
        {goodies.map((group, index) => (
          <GoodieGroup group={group} key={index} />
        ))}
      </div>
    </section>
  );
}
