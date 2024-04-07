"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { motion, useCycle } from "framer-motion";
import { UsaFlag } from "@/icons/UsaFlag";
import { SpainFlag } from "@/icons/SpainFlag";
import { useOnClickOutSide } from "@/hooks/useOnClickOutSide";
import { cn } from "@/lib/utils";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LaguajeSelector = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isPending, startTransition] = useTransition();
  const localLanguaje = useLocale();
  const [languaje, setLanguaje] = useState<string | null>(localLanguaje);
  const router = useRouter();

  const handleOff = () => {
    if (isOpen) return toggleOpen();
  };

  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutSide(navRef, () => handleOff());

  useEffect(() => {
    startTransition(() => {
      router.replace(`/${languaje}`);
    });
  }, [languaje, router]);

  return (
    <motion.div className="flex items-center">
      <motion.div
        whileTap={{
          scale: 0.8,
          borderRadius: "100%",
        }}
        onClick={() => toggleOpen()}
        className="relative flex items-center h-7 w-12 hover:cursor-pointer"
      >
        <motion.button className="gap-1.5">
          {languaje === "es" ? (
            <SpainFlag className="h-7 w-7 rounded-full " />
          ) : (
            <UsaFlag className="h-7 w-7 rounded-full " />
          )}
        </motion.button>
        <BiChevronDown
          className={cn("h-4 w-4 ml-2 transition-all text-muted-foreground", {
            "-rotate-180": isOpen,
          })}
        />
      </motion.div>

      {isOpen ? (
        <div
          ref={navRef}
          className="absolute right-0.5 md:right-auto top-full text-muted-foreground bg-white rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <div>
              <button
                onClick={() => {
                  setLanguaje("en");
                  toggleOpen();
                }}
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div className="inline-flex items-center">
                  <UsaFlag className="h-3.5 w-3.5 rounded-full me-2" />
                  English
                </div>
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setLanguaje("es");
                  toggleOpen();
                }}
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div className="inline-flex items-center">
                  <SpainFlag className="h-3.5 w-3.5 rounded-full me-2" />
                  Español
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
};

export default LaguajeSelector;
