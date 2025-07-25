import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
} from "@shared/components"
import { mergeClass } from "@shared/libs"
import { Link } from "react-router"

export interface SocialData {
  label: string
  href: string
  icon: string
  className?: string
}

interface Props {
  social: SocialData
}

export function SocialItem({ social }: Props) {
  const { href, icon, label, className } = social

  return (
    <li className="flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger suppressHydrationWarning asChild>
            <Button
              variant={"outline"}
              size={"icon"}
              asChild
              className={mergeClass(
                `h-12 w-12 transition-all duration-300 border-2 border-dashed hover:border-link`,
                className,
              )}
            >
              <Link to={href} target="_blank">
                <i className={icon} />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  )
}
