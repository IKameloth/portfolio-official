"use client";

import { LogoIconLight } from "@/icons/LogoIconLight";
import React, { useRef, useState } from "react";
import ThemeToggleButton from "../ThemeToggleButton";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/hooks/useDimensions";
import Navigation from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useTheme } from "@/context/theme-context";
import { LogoIconDark } from "@/icons/LogoIconDark";
import { useOnClickOutSide } from "@/hooks/useOnClickOutSide";

const sidebar = {
  open: (height = 800) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const HeaderPlus = () => {
  const { theme } = useTheme();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleOffLinks = () => {
    if (isOpen) return toggleOpen();
  };

  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutSide(navRef, () => handleOffLinks());

  return (
    <>
      <motion.div className="sticky z-50 bg-white bg-opacity-80  dark:bg-gray-900 w-full top-0 start-0 inset-x-0 h-16 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly mx-auto p-3">
          <motion.nav
            className="inline-flex items-center w-10 h-10 justify-center text-sm border border-slate-200 rounded-lg md:hidden hover:bg-gray-300  dark:bg-slate-700 dark:border dark:border-slate-500"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div
              className="absolute top-0 left-0 -z-10 w-full h-auto bg-slate-200 dark:bg-slate-900"
              variants={sidebar}
              ref={navRef}
            >
              <Navigation onClose={() => toggleOpen()} theme={theme} />
            </motion.div>
            <MenuToggle
              toggle={() => toggleOpen()}
              strokeColor={theme === "light" ? "#2e2e2e" : "#64748b"}
            />
          </motion.nav>
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="/#home"
            className="hidden md:flex items-center space-x-3 rtl:space-x-reverse"
          >
            {theme === "light" ? (
              <LogoIconLight className="w-[2.25rem] h-[2.25rem] rounded-full" />
            ) : (
              <LogoIconDark className="w-[2.25rem] h-[2.25rem] rounded-full dark:bg-white" />
            )}
          </motion.a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ThemeToggleButton className="flex items-center" />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      {/* <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute right-7 top-4 p-3"
          onClick={() => handleDrawerToggle()}
        >
          <MdShieldMoon className="text-5xl" />
        </button>
        <ul className="flex flex-col justify-center items-center space-y-4">
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <a href="/#home">Home</a>
          </li>
        </ul>
      </div> */}

      {/* <motion.nav
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 "
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => handleToggle()} />
      </motion.nav> */}
    </>
  );
};

export default HeaderPlus;
