import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollAnimation = () => {
  const loremIpsumRef = useRef<SVGForeignObjectElement | null>(null);
  const isInView = useInView(loremIpsumRef, { once: true });

  return (
    <foreignObject>
      <motion.div
        className="bg-red-900 w-[400]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        truc
      </motion.div>
    </foreignObject>
    // <foreignObject x="55%" y="100" width="600" height="400" ref={loremIpsumRef}>
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: isInView ? 1 : 0 }}
    //     transition={{ duration: 3 }}
    //     className="text-2xl"
    //   >
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vero
    //     sed perspiciatis omnis laborum explicabo.
    //   </motion.div>
    // </foreignObject>
  );
};

export default ScrollAnimation;
