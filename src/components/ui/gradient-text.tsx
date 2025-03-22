import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
}

const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ as: Component = "span", className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={twMerge(
          "bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark",
          className
        )}
        {...props}
      />
    );
  }
);

GradientText.displayName = "GradientText";

export { GradientText };
