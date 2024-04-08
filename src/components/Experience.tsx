"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useTheme } from "@/context/theme-context";
import SectionTitle from "./SectionTitle";
import { useTranslations } from "next-intl";
import { CgWorkAlt } from "react-icons/cg";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const t = useTranslations("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionTitle>{t("title")}</SectionTitle>
      <VerticalTimeline lineColor={theme === "light" ? "#6b7280" : "#f3f4f6"}>
        <VerticalTimelineElement
          visible={true}
          contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgb(255 255 255 / 0.1)",
            boxShadow: "none",
            border: "1px solid rgb(0 0 0 / 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date={t("last_job.date")}
          icon={<CgWorkAlt />}
          iconStyle={{
            background: theme === "light" ? "#f3f4f6" : "#1f2937",
            fontSize: "1.5rem",
            color: theme === "light" ? "#1f2937" : "#f3f4f6",
          }}
        >
          <h3 className="font-semibold capitalize">{t("last_job.title")}</h3>
          <p className="font-normal !mt-0">{t("last_job.location")}</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {t("last_job.description")}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgb(255 255 255 / 0.1)",
            boxShadow: "none",
            border: "1px solid rgb(0 0 0 / 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date={t("second_job.date")}
          icon={<CgWorkAlt />}
          iconStyle={{
            background: theme === "light" ? "#f3f4f6" : "#1f2937",
            fontSize: "1.5rem",
            color: theme === "light" ? "#1f2937" : "#f3f4f6",
          }}
        >
          <h3 className="font-semibold capitalize">{t("second_job.title")}</h3>
          <p className="font-normal !mt-0">{t("second_job.location")}</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {t("second_job.description")}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgb(255 255 255 / 0.1)",
            boxShadow: "none",
            border: "1px solid rgb(0 0 0 / 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date={t("third_job.date")}
          icon={<CgWorkAlt />}
          iconStyle={{
            background: theme === "light" ? "#f3f4f6" : "#1f2937",
            fontSize: "1.5rem",
            color: theme === "light" ? "#1f2937" : "#f3f4f6",
          }}
        >
          <h3 className="font-semibold capitalize">{t("third_job.title")}</h3>
          <p className="font-normal !mt-0">{t("third_job.location")}</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {t("third_job.description")}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgb(255 255 255 / 0.1)",
            boxShadow: "none",
            border: "1px solid rgb(0 0 0 / 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date={t("fourth_job.date")}
          icon={<CgWorkAlt />}
          iconStyle={{
            background: theme === "light" ? "#f3f4f6" : "#1f2937",
            fontSize: "1.5rem",
            color: theme === "light" ? "#1f2937" : "#f3f4f6",
          }}
        >
          <h3 className="font-semibold capitalize">{t("fourth_job.title")}</h3>
          <p className="font-normal !mt-0">{t("fourth_job.location")}</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {t("fourth_job.description")}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
