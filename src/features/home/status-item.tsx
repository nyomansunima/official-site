export type StatusData = {
  title: string;
  url: string;
};

type StatusItemProps = {
  status: StatusData;
};

export function StatusItem({ status }: StatusItemProps) {
  const { title, url } = status;
  const isValidURL = url.includes("https://") || url.includes("http://");

  return (
    <a
      className="flex items-center gap-2 py-2"
      href={url}
      target={isValidURL ? "_blank" : "_self"}
    >
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      <span>{title}</span>
    </a>
  );
}
