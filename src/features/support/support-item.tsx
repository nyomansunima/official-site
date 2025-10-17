export type SupportData = {
  title: string;
  url: string;
};

type Props = {
  support: SupportData;
};

export function SupportItem({ support }: Props) {
  const { title, url } = support;

  return (
    <a className="flex items-center gap-2 py-2" href={url} target="_blank">
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      <span>{title}</span>
    </a>
  );
}
