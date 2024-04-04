"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";
import { cn } from "@/lib/utils";

const ThemeToggleButton = ({ ...props }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div {...props}>
      <AnimatePresence initial={false} mode="wait">
        <label
          htmlFor="checkbox"
          className={cn(
            "h-7 px-1 flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[60px] relative cursor-pointer transition duration-200",
            theme === "light"
              ? "bg-yellow-400 border-yellow-500"
              : "bg-slate-700 border-slate-500"
          )}
        >
          <motion.div
            initial={{
              width: "20px",
              x: theme === "light" ? 0 : 32,
            }}
            animate={{
              scale: 0.8,
              rotate: -180,
              borderRadius: "100%",
              width: ["20px", "30px", "20px", "20px"],
              x: theme === "light" ? 32 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            key={String(theme === "light")}
            className="flex items-center"
          >
            {theme === "light" ? (
              <BsSun className="text-yellow-950 w-6 h-6 rounded-full" />
            ) : (
              <BsMoon className="text-slate-300 w-6 h-6 rounded-full rotate-180" />
            )}
          </motion.div>
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={() => toggleTheme()}
            className="hidden"
            id="checkbox"
          />
        </label>
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemeToggleButton;
