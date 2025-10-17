export type SourceData = {
  title: string;
  url: string;
};

type Props = {
  source: SourceData;
};

export function SourceItem({ source }: Props) {
  const { title, url } = source;

  return (
    <a className="flex items-center gap-2 py-2" href={url} target="_blank">
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      <span>{title}</span>
    </a>
  );
}
