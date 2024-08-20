"use client";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  // Obtenir la progression du scroll
  const { scrollYProgress } = useScroll();
  // const path = useMotionValue(0);

  // Transformer la progression du scroll pour animer le pathLength de 0 à 1
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div className="bg-green-900 h-[150vh]">
      <svg
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-[50%] mt-[60vh]"
        viewBox="0 0 600 1200"
      >
        <path
          className="line01 line fill-none stroke-white"
          d="M 10 200  600 200"
        ></path>
        <path
          ref={ref}
          className="line02 line fill-none stroke-white "
          d="M 10 400  600 400"
        ></path>
        <path
          className="line03 line fill-none stroke-white"
          d="M 10 600  600 600"
        ></path>
        <path
          className="line04 line fill-none stroke-white"
          d="M 10 800  600 800"
        ></path>
        <path
          className="line05 line fill-none stroke-white"
          d="M 10 1000  600 1000"
        ></path>
        <text className="text01" x="30" y="190">
          2018
        </text>
        <text className="text02" x="30" y="390">
          2019
        </text>
        <text className="text03" x="30" y="590">
          2020
        </text>

        <motion.path
          className="theLine"
          d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
          fill="none"
          stroke="white"
          stroke-width="10px"
          pathLength={inView ? pathLength : 0}
        />

        <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
        <circle className="ball ball02" r="20" cx="278" cy="301"></circle>
        <circle className="ball ball03" r="20" cx="327" cy="501"></circle>
        <circle className="ball ball04" r="20" cx="203" cy="701"></circle>
      </svg>
    </div>
  );
};

export default About;
