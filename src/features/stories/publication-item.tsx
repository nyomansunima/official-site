export type PublicationData = {
  title: string;
  url: string;
};

type Props = {
  publication: PublicationData;
};

export function PublicationItem({ publication }: Props) {
  const { title, url } = publication;

  return (
    <a
      className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-foreground/40"
      href={url}
      target="_blank"
    >
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      <span>{title}</span>
    </a>
  );
}
