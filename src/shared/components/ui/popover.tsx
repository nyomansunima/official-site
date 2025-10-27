import * as PopoverPrimitive from "@radix-ui/react-popover";
import { mergeClass } from "@shared/libs/utils";
import type * as React from "react";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

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
  > | null>;
}) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      align={align}
      className={mergeClass(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 group z-50 w-72 origin-[--radix-popover-content-transform-origin] rounded-2xl border-4 border-border bg-surface p-5 outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
