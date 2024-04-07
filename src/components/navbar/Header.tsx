"use client";

import { LogoIconLight } from "@/icons/LogoIconLight";
import React, { useRef } from "react";
import ThemeToggleButton from "../ThemeToggleButton";
import { motion, useCycle } from "framer-motion";
import Navigation from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useTheme } from "@/context/theme-context";
import { LogoIconDark } from "@/icons/LogoIconDark";
import { useOnClickOutSide } from "@/hooks/useOnClickOutSide";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LaguajeSelector from "./LaguajeSelector";
import { useTranslations } from "next-intl";

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

const Header = () => {
  const { theme } = useTheme();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const t = useTranslations("Navbar");

  const handleOffLinks = () => {
    if (isOpen) return toggleOpen();
  };

  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutSide(navRef, () => handleOffLinks());

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky z-50 bg-gray-100 bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 w-full top-0 start-0 inset-x-0 h-16 border-b border-gray-200 dark:border-gray-600"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly mx-auto p-3">
          <motion.nav
            className="inline-flex items-center w-10 h-10 justify-center text-sm border border-gray-100 rounded-lg md:hidden hover:bg-gray-300  dark:bg-slate-700 dark:border dark:border-slate-500"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={navRef}
          >
            <motion.div
              className="absolute top-0 left-0 -z-10 w-full h-auto bg-gray-100 dark:bg-slate-900"
              variants={sidebar}
            >
              <Navigation onClose={toggleOpen} theme={theme} />
            </motion.div>
            <MenuToggle
              toggle={toggleOpen}
              strokeColor={theme === "light" ? "#2e2e2e" : "#64748b"}
            />
          </motion.nav>
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="#home"
            className="hidden md:flex items-center space-x-3 rtl:space-x-reverse"
          >
            {theme === "light" ? (
              <LogoIconLight className="w-[2.25rem] h-[2.25rem] rounded-full" />
            ) : (
              <LogoIconDark className="w-[2.25rem] h-[2.25rem] rounded-full dark:bg-gray-100" />
            )}
          </motion.a>
          <div className="flex space-x-5 md:order-2">
            <div className="flex md:order-2 rtl:space-x-reverse">
              <ThemeToggleButton className="flex items-center" />
            </div>
            <div className="flex md:order-3 rtl:space-x-reverse">
              <LaguajeSelector />
            </div>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              {links.map((link) => (
                <motion.li
                  className="flex items-center justify-center relative"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={cn(
                      "flex w-full items-center justify-center px-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-100":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {t(link.name.toLocaleLowerCase())}
                    {link.name === activeSection && (
                      <motion.span
                        className="rounded-full absolute inset-0 bg-gray-800 dark:bg-gray-100 h-1 mt-6"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
