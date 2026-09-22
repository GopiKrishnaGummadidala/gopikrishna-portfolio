"use client";

import { motion } from "framer-motion";

export function FloatingText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`flex flex-wrap gap-x-[0.22em] ${className ?? ""}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (wordIndex * 12 + charIndex) * 0.05,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
