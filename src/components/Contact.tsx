"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SectionTitle from "./SectionTitle";
import { FaPaperPlane } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const t = useTranslations("Contact");

  const handleSendEmail = async (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { data } = await sendEmail(formData);

    if (data?.error) {
      const { error } = data;
      toast.error(error.message);
      return;
    }

    toast.success("Email sent successfully!");
    setIsLoading(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionTitle>{t("title")}</SectionTitle>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {/* <a className="underline" href="mailto:matteo.camilo.k@gmail.com">
          my contact
        </a>{" "} */}
        {t("description")}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSendEmail}
      >
        <input
          className="h-14 px-4 rounded-lg bg-gray-50 border border-black/30 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={255}
          placeholder={t("email_placeholder")}
        />
        <textarea
          className="h-52 my-3 rounded-lg bg-gray-50 border border-black/30 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={t("message_placeholder")}
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              {t("btn_submit")}{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
