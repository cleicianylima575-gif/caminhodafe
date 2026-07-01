"use client";

import { motion } from "framer-motion";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
};

export function FadeUp({
  children,
  delay = 0,
}: FadeUpProps) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{
        once: true,
      }}
    >

      {children}

    </motion.div>

  );

}