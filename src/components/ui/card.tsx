import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref" | "children"> {
  gradient?: boolean;
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, gradient, hover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={twMerge(
          "relative rounded-xl overflow-hidden",
          gradient &&
            "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary-light/5 before:to-accent-light/5 dark:before:from-primary-dark/5 dark:before:to-accent-dark/5",
          hover &&
            "group transition-all duration-300 hover:shadow-xl hover:shadow-primary-light/5 dark:hover:shadow-primary-dark/5",
          className
        )}
        whileHover={
          hover
            ? {
                scale: 1.02,
                transition: { duration: 0.2 },
              }
            : undefined
        }
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };
