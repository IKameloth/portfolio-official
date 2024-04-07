"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionTitle from "./SectionTitle";
import Project from "./Project";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionTitle>{t("title")}</SectionTitle>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
