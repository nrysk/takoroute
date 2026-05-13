import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/app/_lib/utils";

const linkVariants = cva(
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

interface TrLinkProps
  extends Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps>,
    LinkProps,
    VariantProps<typeof linkVariants> {}

export function TrLink({ className, variant, size, ...props }: TrLinkProps) {
  return (
    <Link className={cn(linkVariants({ variant, size, className }))} {...props}>
      {props.children}
    </Link>
  );
}
