"use client";
// import styles from './style.module.scss';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { opacity, slideUp } from "../utils/anim";

const words = [
  "Bienvenue",
  "Welcome",
  "Benvenuto",
  "Bem-vindo",
  "Välkommen",
  "Willkommen",
  "Welkom",
  "ようこそ",
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className="h-[100vh] w-[100vw] flex items-center justify-center fixed z-[1000] bg-primary"
        >
          {dimension.width > 0 && (
            <>
              <motion.p
                className="flex text-white text-5xl items-center absolute z-[1]"
                variants={opacity}
                initial="initial"
                animate="enter"
              >
                <span className="block w-2 h-2 bg-white rounded-full mr-2"></span>
                {words[index]}
              </motion.p>
              <svg className="absolute top-0 w-full h-[calc(100%+2rem)]">
                <motion.path
                  className="fill-primary"
                  variants={curve}
                  initial="initial"
                  exit="exit"
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}