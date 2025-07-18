import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { mergeClass } from "@shared/libs"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = ({
  ref,
  className,
  sideOffset = 4,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof TooltipPrimitive.Content
  > | null>
}) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={mergeClass(
      "z-50 overflow-hidden rounded-2xl p-2 px-1 bg-surface text-xs text-foreground/70",
      className,
    )}
    {...props}
  >
    <span className="px-3 py-1.5 rounded-xl border-2 border-border border-dashed">
      {children}
    </span>
  </TooltipPrimitive.Content>
)
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
