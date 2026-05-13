import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary/90 text-on-primary",
        secondary: "bg-secondary hover:bg-secondary/90 text-on-secondary",
      },
      size: {
        default: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface TrButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {}

export function TrButton({
  className,
  variant,
  size,
  disabled,
  ...props
}: TrButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </button>
  );
}
