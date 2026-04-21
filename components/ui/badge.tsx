import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border border-transparent px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 rounded-none",
  {
    variants: {
      variant: {
        default: "border-gray-200 bg-white text-[#0a0a0a] hover:border-sky-400",
        secondary:
          "border-gray-200 bg-neutral-100 text-[#0a0a0a] hover:border-sky-400",
        outline: "border-gray-200 text-[#0a0a0a] hover:border-sky-400",
        accent: "border-sky-400/40 bg-sky-50 text-sky-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
