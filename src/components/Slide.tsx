import { MotionValue, useTransform, motion } from "framer-motion";
import React from "react";

const Slide = ({
  directionType,
  progress,
  left,
  text,
  speedFactor = 1, // Valeur par défaut de speedFactor
  translateDistance = 150, // Valeur par défaut de translateDistance
}: {
  text: string;
  directionType: "left" | "right";
  progress: MotionValue<number>;
  left: string;
  speedFactor?: number;
  translateDistance?: number; // Ajout de translateDistance en tant que prop
}) => {
  const direction = directionType === "left" ? -1 : 1;

  // Calcul de la translation horizontale en fonction de la progression, de la direction et de la distance
  const translateX = useTransform(
    progress,
    [0, 1],
    [
      translateDistance * direction * speedFactor,
      -translateDistance * direction * speedFactor,
    ]
  );

  return (
    <motion.div
      style={{ x: translateX, left: left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase text={[text]} />
    </motion.div>
  );
};
const Phrase = ({ text }: { text: string[] }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Slide;
