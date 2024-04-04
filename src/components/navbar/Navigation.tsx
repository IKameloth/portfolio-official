import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <div className="w-full h-[4rem] bg-white bg-opacity-80  dark:bg-gray-900"></div>
      <motion.ul
        variants={variants}
        className="flex flex-col items-center w-full h-auto border-b border-t border-slate-700/30"
      >
        {links.map((link, index) => (
          <MenuItem link={link} key={index} onClose={onClose} />
        ))}
      </motion.ul>
    </>
  );
};

export default Navigation;
