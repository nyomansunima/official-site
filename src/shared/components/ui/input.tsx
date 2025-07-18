import { mergeClass } from "@shared/libs"
import * as React from "react"

const Input = ({
  ref,
  className,
  type,
  ...props
}: React.ComponentProps<"input"> & {
  ref?: React.RefObject<HTMLInputElement | null>
}) => {
  return (
    <input
      type={type}
      className={mergeClass(
        "flex grow h-10 w-full text-sm rounded-xl border-2 border-border border-dashed ring-0 outline-none bg-background text-foreground px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-foreground/60 focus-visible:outline-none focus-visible:border-link disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}
Input.displayName = "Input"

export { Input }
