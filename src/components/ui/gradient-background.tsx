import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type BaseProps = {
  variant?: "primary" | "accent" | "mixed";
  intensity?: "light" | "medium" | "strong";
  blur?: boolean;
  animate?: boolean;
  className?: string;
};

type GradientBackgroundProps = BaseProps &
  (BaseProps["animate"] extends true
    ? HTMLMotionProps<"div">
    : React.HTMLAttributes<HTMLDivElement>);

const intensityClasses = {
  light: "opacity-5",
  medium: "opacity-10",
  strong: "opacity-20",
};

const variantClasses = {
  primary: "bg-primary-light dark:bg-primary-dark",
  accent: "bg-accent-light dark:bg-accent-dark",
  mixed:
    "bg-gradient-to-br from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark",
};

const GradientBackground = forwardRef<HTMLDivElement, GradientBackgroundProps>(
  (
    {
      className,
      variant = "primary",
      intensity = "light",
      blur = true,
      animate = true,
      ...props
    },
    ref
  ) => {
    if (animate) {
      return (
        <motion.div
          ref={ref}
          className={twMerge(
            variantClasses[variant],
            intensityClasses[intensity],
            blur && "blur-3xl",
            "absolute",
            className
          )}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          {...(props as HTMLMotionProps<"div">)}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={twMerge(
          variantClasses[variant],
          intensityClasses[intensity],
          blur && "blur-3xl",
          "absolute",
          className
        )}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      />
    );
  }
);

GradientBackground.displayName = "GradientBackground";

export { GradientBackground };
