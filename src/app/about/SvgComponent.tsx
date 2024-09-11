import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedDiv from "./AnimateDiv";

interface SvgComponentProps {
  svgRef: React.RefObject<HTMLDivElement>;
}

const SvgComponent: React.FC<SvgComponentProps> = ({ svgRef }) => {
  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["10% end", "end end"],
  });

  const svgPathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const texts = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    "Culpa quae voluptatum nemo?",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    "Et harum quidem rerum facilis est et expedita distinctio.",
  ];

  return (
    <div ref={svgRef} className="relative h-[150vh]">
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
      >
        <motion.line
          x1="50%"
          x2="50%"
          y1="100"
          y2="900"
          stroke="red"
          strokeWidth="20"
          strokeLinecap={"round"}
          pathLength={svgPathLength}
          style={{ pathLength: svgPathLength }}
        />
      </svg>
      {texts.map((text, index) => (
        <AnimatedDiv key={index} text={text} index={index} />
      ))}
    </div>
  );
};

export default SvgComponent;
