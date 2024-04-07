"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionTitle>{t("title")}</SectionTitle>
      <p className="mb-3 text-wrap">{t("paragraph_one")}</p>
      <p className="text'wrap">{t("paragraph_two")}</p>
      <p className="flex items-center justify-center mt-3">✨🖥👌</p>
    </motion.section>
  );
}
