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
