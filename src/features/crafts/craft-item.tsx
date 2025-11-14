export type CraftData = {
  title: string;
  link: string;
};

type Props = {
  craft: CraftData;
};

export function CraftItem({ craft }: Props) {
  const { title, link } = craft;

  return (
    <a
      className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-foreground/40"
      href={link}
      target="_blank"
    >
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      <span>{title}</span>
    </a>
  );
}
