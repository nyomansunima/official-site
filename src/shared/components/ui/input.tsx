import { mergeClass } from "@shared/libs";
import type * as React from "react";

const Input = ({
  ref,
  className,
  type,
  ...props
}: React.ComponentProps<"input"> & {
  ref?: React.RefCallback<HTMLInputElement | null>;
}) => (
  <input
    className={mergeClass(
      "flex h-10 w-full grow rounded-xl border-none bg-input px-3 py-2 text-foreground text-sm outline-none ring-0 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-foreground/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    type={type}
    {...props}
  />
);
Input.displayName = "Input";

export { Input };
