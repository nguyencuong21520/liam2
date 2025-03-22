import { forwardRef } from "react";
import { buttonVariants } from "./button";
import { twMerge } from "tailwind-merge";
import { VariantProps } from "class-variance-authority";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <a
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export { ButtonLink };
