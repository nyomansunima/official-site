export type BioItemData = {
  url: string;
  label: string;
};

type BioItemProps = {
  data: BioItemData;
};

export function BioItem({ data }: BioItemProps) {
  const { label, url } = data;
  const isValidURL = url.includes("https://") || url.includes("http://");

  return (
    <a
      className="flex items-center gap-2 py-2"
      href={url}
      target={isValidURL ? "_blank" : "_self"}
    >
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      <span>{label}</span>
    </a>
  );
}
