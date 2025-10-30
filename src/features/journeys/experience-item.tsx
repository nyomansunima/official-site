export type ExperienceItemData = {
  team: string;
  position: string;
  timeline: string;
  url: string;
};

type ExperienceItemProps = {
  experience: ExperienceItemData;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const { team, position, timeline, url } = experience;

  return (
    <a
      className="flex tablet:flex-row flex-col items-start tablet:items-center gap-2 py-2"
      href={url}
      target="_blank"
    >
      <div className="flex grow items-center gap-2">
        <i className="fi fi-sr-bullet text-foreground/40 text-sm" />
        <div className="flex items-center gap-2">
          {team}
          <span className="font-mono text-foreground/40 text-sm tracking-tighter">
            ({position})
          </span>
        </div>
      </div>

      <span className="ml-5 tablet:ml-0 text-foreground/40 text-sm">
        {timeline}
      </span>
    </a>
  );
}
