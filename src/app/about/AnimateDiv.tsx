import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedDivProps {
  text: string;
  index: number;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ text, index }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "0px 0px -200px 0px", once: true });

  return (
    <motion.div
      ref={ref}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`bg-red-600 mb-4 p-4 w-96 absolute top-0 ${
        index % 2 === 0 ? "right-0" : "left-0"
      }`}
      style={{
        top: `${0 + index * 100}px`,
        right: index % 2 === 0 ? "55%" : "auto",
        left: index % 2 !== 0 ? "55%" : "auto",
      }}
    >
      <h2>{text}</h2>
    </motion.div>
  );
};

export default AnimatedDiv;
