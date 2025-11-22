"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedHeroCirclesProps {
  variant: "desktop" | "mobile";
}

const AnimatedHeroCircles: React.FC<AnimatedHeroCirclesProps> = ({
  variant,
}) => {
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  if (variant === "desktop") {
    return (
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[143%] max-w-[500px] min-w-[450px] aspect-square rounded-full border-8 border-pink-pastel"
          animate={pulseAnimation}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[126%] max-w-[440px] min-w-[390px] aspect-square rounded-full border-8 border-pink-pastel"
          animate={pulseAnimation}
          transition={{ ...pulseAnimation.transition, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[109%] max-w-[380px] min-w-[330px] aspect-square rounded-full border-8 border-pink-pastel"
          animate={pulseAnimation}
          transition={{ ...pulseAnimation.transition, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[91%] max-w-[320px] min-w-[275px] aspect-square rounded-full border-8 border-pink-pastel"
          animate={pulseAnimation}
          transition={{ ...pulseAnimation.transition, delay: 0.3 }}
        ></motion.div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[145%] max-w-[320px] min-w-[290px] aspect-square rounded-full border-6 border-pink-pastel "
        animate={pulseAnimation}
      ></motion.div>
      <motion.div
        className="absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[123%] max-w-[270px] min-w-[245px] aspect-square rounded-full border-6 border-pink-pastel "
        animate={pulseAnimation}
        transition={{ ...pulseAnimation.transition, delay: 0.1 }}
      ></motion.div>
      <motion.div
        className="absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[102%] max-w-[225px] min-w-[200px] aspect-square rounded-full border-6 border-pink-pastel "
        animate={pulseAnimation}
        transition={{ ...pulseAnimation.transition, delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84%] max-w-[185px] min-w-[165px] aspect-square rounded-full border-6 border-pink-pastel "
        animate={pulseAnimation}
        transition={{ ...pulseAnimation.transition, delay: 0.3 }}
      ></motion.div>
    </div>
  );
};

export default AnimatedHeroCircles;
