import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { mergeClass } from "@shared/libs"

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = ({
  ref,
  className,
  align = "end",
  sideOffset = 4,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof PopoverPrimitive.Content
  > | null>
}) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={mergeClass(
        "z-50 w-72 rounded-2xl bg-surface p-1 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin] group",
        className,
      )}
      {...props}
    >
      <div className="flex h-full p-5 w-full border-2 border-border border-dashed transition-all duration-300 group-hover:border-link rounded-xl">
        {children}
      </div>
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
