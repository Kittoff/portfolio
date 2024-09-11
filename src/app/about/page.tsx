"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import Slide from "@/components/Slide";
import SvgComponent from "./SvgComponent";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [speedFactor, setSpeedFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setSpeedFactor(window.innerWidth < 768 ? 6 : 6);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mx-auto overflow-hidden h-[300vh]">
      <div className="uppercase text-[30vw] font-extrabold leading-[7rem] mt-40 md:leading-[15rem] md:text-[20vw]">
        <div ref={containerRef}>
          {["freelance", "creative", "developper"].map((text, index) => (
            <Slide
              key={text}
              text={text}
              directionType={index % 2 === 0 ? "right" : "left"}
              left={index === 0 ? "10%" : index === 1 ? "-10%" : "20%"}
              progress={scrollYProgress}
              speedFactor={speedFactor * (index === 0 ? 2 : 1)}
              translateDistance={100}
            />
          ))}
        </div>
      </div>

      <SvgComponent svgRef={svgRef} />
    </div>
  );
};

export default About;
