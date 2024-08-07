import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({
  children,
  href,
  isHovered,
}: {
  children: React.ReactNode;
  href: string;
  isHovered: boolean;
}) => {
  return (
    // <Link href={href} className="relative block">
    <motion.div
      className="relative block overflow-hidden whitespace-nowrap text-font-black"
      style={{
        lineHeight: 0.9,
      }}
    >
      {React.Children.map(children, (child) => {
        if (typeof child === "string") {
          return (
            <>
              <motion.div>
                {child.split("").map((l, i) => (
                  <motion.span
                    key={i}
                    animate={isHovered ? "hovered" : "initial"}
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-100%" },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: "easeInOut",
                      delay: STAGGER * i,
                    }}
                    className="inline-block z-10 relative"
                  >
                    {l}
                  </motion.span>
                ))}
              </motion.div>
              <div className="absolute inset-0">
                {child.split("").map((l, i) => (
                  <motion.span
                    key={i}
                    animate={isHovered ? "hovered" : "initial"}
                    variants={{
                      initial: { y: "100%" },
                      hovered: { y: 0 },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: "easeInOut",
                      delay: STAGGER * i,
                    }}
                    className="inline-block z-10 relative"
                  >
                    {l}
                  </motion.span>
                ))}
              </div>
            </>
          );
        }
        return child;
      })}
    </motion.div>
    // </Link>
  );
};

export default FlipLink;
