"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type BridgeMotifProps = {
  className?: string;
  strokeColor?: string;
  labelLeft?: string;
  labelRight?: string;
  animate?: boolean;
};

/**
 * Signature element: a schematic suspension-bridge line drawing.
 * Reads as a financial "blueprint" — two towers, a deck, and cables —
 * standing in for the two sides Bridge Capital connects: the business
 * and the capital. Used sparingly as a section divider / hero mark.
 *
 * HCI note: when `animate` is true, the structure "constructs" itself
 * (draws on, tower-first, deck-last) the first time it scrolls into
 * view — reinforcing the brand metaphor rather than decorating for its
 * own sake. Falls back to a static instant-draw for prefers-reduced-motion.
 */
export default function BridgeMotif({
  className = "",
  strokeColor = "var(--color-yellow)",
  labelLeft,
  labelRight,
  animate = false,
}: BridgeMotifProps) {
  const shouldReduceMotion = useReducedMotion();
  const willAnimate = animate && !shouldReduceMotion;

  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, delay: custom, ease: [0.65, 0, 0.35, 1] },
    }),
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: custom },
    }),
  };

  const initialState = willAnimate ? "hidden" : "visible";

  return (
    <motion.svg
      viewBox="0 0 1200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      initial={initialState}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {/* towers first */}
      <motion.line
        x1="300" y1="30" x2="300" y2="170"
        stroke={strokeColor} strokeWidth="2"
        variants={draw} custom={0}
      />
      <motion.line
        x1="900" y1="30" x2="900" y2="170"
        stroke={strokeColor} strokeWidth="2"
        variants={draw} custom={0.05}
      />

      {/* deck */}
      <motion.line
        x1="40" y1="160" x2="1160" y2="160"
        stroke={strokeColor} strokeWidth="2"
        variants={draw} custom={0.2}
      />

      {/* main cables */}
      <motion.path
        d="M 40 160 Q 300 40 560 160"
        stroke={strokeColor} strokeWidth="1.5" opacity="0.7"
        variants={draw} custom={0.35}
      />
      <motion.path
        d="M 640 160 Q 900 40 1160 160"
        stroke={strokeColor} strokeWidth="1.5" opacity="0.7"
        variants={draw} custom={0.4}
      />
      <motion.path
        d="M 40 160 Q 300 260 560 160"
        stroke={strokeColor} strokeWidth="1" opacity="0.25"
        variants={draw} custom={0.35}
      />
      <motion.path
        d="M 640 160 Q 900 260 1160 160"
        stroke={strokeColor} strokeWidth="1" opacity="0.25"
        variants={draw} custom={0.4}
      />

      {/* suspender cables */}
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 60 + i * 42;
        if (x > 540) return null;
        const t = (x - 40) / 520;
        const y = 160 - Math.sin(t * Math.PI) * 118;
        return (
          <motion.line
            key={`l-${i}`}
            x1={x} y1={160} x2={x} y2={y}
            stroke={strokeColor} strokeWidth="0.75" opacity="0.5"
            variants={draw} custom={0.5 + i * 0.02}
          />
        );
      })}
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 660 + i * 42;
        if (x > 1140) return null;
        const t = (x - 640) / 520;
        const y = 160 - Math.sin(t * Math.PI) * 118;
        return (
          <motion.line
            key={`r-${i}`}
            x1={x} y1={160} x2={x} y2={y}
            stroke={strokeColor} strokeWidth="0.75" opacity="0.5"
            variants={draw} custom={0.5 + i * 0.02}
          />
        );
      })}

      {/* center span marker — lands last, like a keystone */}
      <motion.circle
        cx="600" cy="160" r="4" fill={strokeColor}
        variants={fadeIn} custom={0.9}
      />

      {labelLeft && (
        <motion.text
          x="40" y="200" fill={strokeColor} fontSize="14"
          fontFamily="var(--font-mono)" opacity="0.8"
          variants={fadeIn} custom={1}
        >
          {labelLeft}
        </motion.text>
      )}
      {labelRight && (
        <motion.text
          x="1160" y="200" textAnchor="end" fill={strokeColor} fontSize="14"
          fontFamily="var(--font-mono)" opacity="0.8"
          variants={fadeIn} custom={1}
        >
          {labelRight}
        </motion.text>
      )}
    </motion.svg>
  );
}
