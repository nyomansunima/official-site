import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shared/components"
import { Link } from "react-router"

export interface ExperienceItemData {
  team: string
  teamLabel?: string
  position: string
  timeline: string
  teamUrl: string
}

interface ExperienceItemProps {
  experience: ExperienceItemData
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const { team, position, timeline, teamUrl, teamLabel } = experience

  return (
    <Link
      to={teamUrl}
      target="_blank"
      className="flex flex-col tablet:flex-row items-start tablet:items-center text-sm gap-2 py-1 group"
    >
      <div className="flex items-center font-medium grow gap-2">
        {/* <i className="fi fi-ss-circle-small text-foreground/60" /> */}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="text-left flex-1 text-pretty cursor-pointer">
              {position}
            </TooltipTrigger>
            <TooltipContent>{teamLabel}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-foreground/60 transition-all duration-300 group-hover:text-foreground font-mono tracking-tight text-xs">
          {team} ({timeline})
        </span>
      </div>
    </Link>
  )
}
