"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlight?: string;
}

export function AnimatedText({ text, className = "", delay = 0, highlight = "" }: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Split text into words
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => {
        const isHighlighted = highlight && word.toLowerCase().includes(highlight.toLowerCase());
        return (
          <motion.span
            variants={child}
            key={index}
            className={`mr-[0.25em] ${isHighlighted ? "text-highlight-500" : ""}`}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
