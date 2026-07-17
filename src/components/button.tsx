import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn, tv, type VariantProps } from "tailwind-variants/lite";

const buttonVariants = tv({
  base: "flex shrink-0 cursor-pointer select-none items-center gap-1 whitespace-nowrap rounded-2xl border border-transparent font-medium text-sm leading-none tracking-tight outline-none",
  defaultVariants: {
    size: "default",
    variant: "default",
  },
  variants: {
    size: {
      default:
        "h-8.5 gap-1 px-3 has-data-[icon=inline-start]:pr-4 has-data-[icon=inline-end]:pl-4",
      icon: "flex size-8.5 items-center justify-center rounded-2xl",
      "icon-lg": "size-9 rounded-lg",
      "icon-sm": "flex size-7 items-center justify-center rounded-xl",
      lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      sm: "h-7 gap-1 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
    },
    variant: {
      default: "bg-primary text-primary-foreground",
      outline: "border border-border! border-dashed bg-background",
      secondary: "bg-secondary text-secondary-foreground",
      text: "text-foreground hover:text-foreground/40",
    },
  },
});

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ className, size, variant }))}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
