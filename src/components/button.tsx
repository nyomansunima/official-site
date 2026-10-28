import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cx, tv, type VariantProps } from "tailwind-variants/lite";

const buttonVariants = tv({
  base: "flex shrink-0 cursor-pointer items-center gap-1 rounded-2xl border border-transparent text-sm leading-none font-medium tracking-tight whitespace-nowrap outline-none select-none",
  defaultVariants: {
    size: "default",
    variant: "default",
  },
  variants: {
    size: {
      default:
        "h-8.5 gap-1 px-3 has-data-[icon=inline-end]:pl-4 has-data-[icon=inline-start]:pr-4",
      icon: "flex size-8.5 items-center justify-center rounded-2xl",
      "icon-lg": "size-9 rounded-lg",
      "icon-sm": "flex size-7 items-center justify-center rounded-xl",
      lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
    },
    variant: {
      default: "bg-primary text-primary-foreground",
      outline: "border-border! bg-background border border-dashed",
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
      className={(state) =>
        cx(
          buttonVariants({ size, variant }),
          typeof className === "function" ? className(state) : className
        )
      }
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
