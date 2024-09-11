import React, { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface SplitTextProps extends MotionProps {
  children: ReactNode; // Define the type for children
}

export function SplitText({ children, ...rest }: SplitTextProps) {
  // Split the children into words
  const words = React.Children.toArray(children).join(" ").split(" ");

  return (
    <>
      {words.map((word, i) => {
        return (
          <div
            key={`${children}-${i}`} // Use a more unique key
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <motion.div
              {...rest}
              style={{ display: "inline-block", willChange: "transform" }}
              custom={i}
            >
              {word + (i !== words.length - 1 ? "\u00A0" : "")}
            </motion.div>
          </div>
        );
      })}
    </>
  );
}
