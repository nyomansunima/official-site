export interface SocialData {
  label: string
  href: string
}

interface Props {
  social: SocialData
}

export function SocialItem({ social }: Props) {
  const { href, label } = social

  return (
    <a href={href} target="_blank" className="flex items-center gap-2 py-2">
      <i className="fi fi-sr-bullet text-sm text-foreground/40" />
      <span>{label}</span>
    </a>
  )
}
