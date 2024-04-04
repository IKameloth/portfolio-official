"use client";

import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const UpButton = () => {
  const { activeSection } = useActiveSectionContext();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.a
        animate={activeSection !== "Home" ? "open" : "closed"}
        variants={variants}
        whileTap={{
          scale: 0.5,
          borderRadius: "100%",
        }}
        href="/#home"
        className="fixed rounded-full flex items-center justify-center bottom-5 right-5 bg-slate-200 dark:bg-slate-900 w-[3rem] h-[3rem] backdrop-blur-[0.5] border border-slate-300 dark:border-slate-800 shadow-2xl"
      >
        <BsArrowUp className="text-lg" />
      </motion.a>
    </AnimatePresence>
  );
};

export default UpButton;
