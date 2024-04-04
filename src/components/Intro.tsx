"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaHandSparkles } from "react-icons/fa6";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/hooks/useSectionInView";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mt-10 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile-pic-removebg.png"
              width={190}
              height={190}
              alt="Picture of the author"
              className="w-42 h-42 rounded-full shadow-2xl "
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Camila Mattea.</span>{" "}
        I&apos;m a <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">+4 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">ReactJS and NextJS</span>.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition delay-100" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Donwload CV{" "}
          <BsDownload className="opacity-70 group-hover:translate-x-1 transition delay-100" />
        </a>
        <a
          href="https://www.linkedin.com/in/camilo-matteo-98143619b/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/IKameloth"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
