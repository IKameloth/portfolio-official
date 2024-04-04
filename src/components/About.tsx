"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionTitle>About me</SectionTitle>
      <p className="mb-3 text-wrap">
        After graduating I enrolled myself in the world of programming and
        learned <span className="font-medium">Web Development</span>. My
        favorite part is the problem solving aspect. My main stack is{" "}
        <span className="font-medium">React, Next.js, and Node.js</span>.
        I&apos;m also familiar with TypeScript, Laravel and RoR. I am currently
        looking for a <span className="font-medium">full-time position</span> as
        a software developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games like Wow and playing with my dogs. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        reading about{" "}
        <span className="font-medium">Uncle Bob&apos;s book Code-Clean</span>.
      </p>
      <p className="flex items-center justify-center mt-3">✨🖥👌</p>
    </motion.section>
  );
}
