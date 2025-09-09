export interface ExperienceItemData {
  team: string
  position: string
  timeline: string
  url: string
}

interface ExperienceItemProps {
  experience: ExperienceItemData
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const { team, position, timeline, url } = experience

  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-col tablet:flex-row items-start tablet:items-center gap-2 py-2"
    >
      <div className="flex items-center grow gap-2">
        <i className="fi fi-sr-bullet text-sm text-foreground/40" />
        <span>
          {team} ({position})
        </span>
      </div>

      <span className="text-foreground/40 text-sm">{timeline}</span>
    </a>
  )
}
