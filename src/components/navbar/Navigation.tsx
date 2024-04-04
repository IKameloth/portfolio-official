import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import MenuItem from "./MenuItem";
import { LogoIconLight } from "@/icons/LogoIconLight";
import { LogoIconDark } from "@/icons/LogoIconDark";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface NavigationProps {
  onClose: () => void;
  theme: string;
}

const Navigation = ({ onClose, theme }: NavigationProps) => {
  return (
    <>
      <div className="w-full h-[4rem] bg-white bg-opacity-80  dark:bg-gray-900"></div>
      <motion.ul
        variants={variants}
        className="flex flex-col items-center w-full h-auto border-b border-t border-slate-700/30"
      >
        <motion.span className="flex md:hidden items-center space-x-3 rtl:space-x-reverse mt-5">
          {theme === "light" ? (
            <LogoIconLight className="w-[2.25rem] h-[2.25rem] rounded-full" />
          ) : (
            <LogoIconDark className="w-[2.25rem] h-[2.25rem] rounded-full dark:bg-white" />
          )}
        </motion.span>
        {links.map((link, index) => (
          <MenuItem link={link} key={index} onClose={onClose} />
        ))}
      </motion.ul>
    </>
  );
};

export default Navigation;
