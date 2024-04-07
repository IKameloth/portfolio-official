import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = (props: any) => {
  const { link, onClose } = props;
  const t = useTranslations("Navbar");

  return (
    <motion.li
      className="cursor-pointer w-[20rem] h-[5rem] underline"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={`/${link.hash}`}
        className="flex font-semibold text-lg h-full items-center justify-center"
        onClick={() => onClose()}
      >
        {t(link.name.toLocaleLowerCase())}
      </a>
    </motion.li>
  );
};

export default MenuItem;
