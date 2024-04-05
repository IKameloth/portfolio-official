"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "./SectionTitle";
import { toolsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.005 * index,
    },
  }),
};

const Tools = () => {
  const { ref } = useSectionInView("Tools");

  return (
    <section
      ref={ref}
      id="tools"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionTitle>Tools i have used</SectionTitle>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {toolsData.map((tool, index) => (
          <motion.li
            className="bg-gray-100 border border-black/5 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-gray-100"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span className="flex flex-col items-center">{tool.icon}</span>
            {tool.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Tools;
