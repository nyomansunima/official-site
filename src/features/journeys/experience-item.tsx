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
      className="flex tablet:flex-row flex-col items-start tablet:items-center gap-2 py-2 transition-all duration-300 hover:text-foreground/40"
      href={url}
      target="_blank"
    >
      <div className="flex grow items-center gap-2">
        <svg
          className="fill-foreground/40"
          height="14"
          viewBox="0 0 24 24"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
        </svg>
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
