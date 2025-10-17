export type SocialData = {
  label: string;
  href: string;
};

type Props = {
  social: SocialData;
};

export function SocialItem({ social }: Props) {
  const { href, label } = social;

  return (
    <a className="flex items-center gap-2 py-2" href={href} target="_blank">
      <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
      <span>{label}</span>
    </a>
  );
}
