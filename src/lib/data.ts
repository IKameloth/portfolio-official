import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
  FaTshirt,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiBulma,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiRuby,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "/public/corpcomment.png";
import rmtdevImg from "/public/rmtdev.png";
import wordanalyticsImg from "/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Tools",
    hash: "#tools",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const toolsData = [
  {
    name: "HTML",
    icon: React.createElement(SiHtml5),
  },
  {
    name: "CSS",
    icon: React.createElement(SiCss3),
  },
  {
    name: "JavaScript",
    icon: React.createElement(SiJavascript),
  },
  {
    name: "TypeScript",
    icon: React.createElement(SiTypescript),
  },
  {
    name: "React",
    icon: React.createElement(SiReact),
  },
  {
    name: "Next.js",
    icon: React.createElement(SiNextdotjs),
  },
  {
    name: "Node.js",
    icon: React.createElement(SiNodedotjs),
  },
  {
    name: "Git",
    icon: React.createElement(SiGit),
  },
  {
    name: "Tailwind",
    icon: React.createElement(SiTailwindcss),
  },
  {
    name: "Bulma",
    icon: React.createElement(SiBulma),
  },
  {
    name: "Bootstrap",
    icon: React.createElement(SiBootstrap),
  },
  {
    name: "MaterialUI",
    icon: React.createElement(SiMui),
  },
  {
    name: "Redux",
    icon: React.createElement(SiRedux),
  },
  {
    name: "Express",
    icon: React.createElement(SiExpress),
  },
  {
    name: "MongoDB",
    icon: React.createElement(SiMongodb),
  },
  {
    name: "PostgreSQL",
    icon: React.createElement(SiPostgresql),
  },
  {
    name: "MySQL",
    icon: React.createElement(SiMysql),
  },
  {
    name: "Framer Motion",
    icon: React.createElement(SiFramer),
  },
  {
    name: "PHP",
    icon: React.createElement(SiPhp),
  },
  {
    name: "Ruby",
    icon: React.createElement(SiRuby),
  },
  {
    name: "JQuery",
    icon: React.createElement(SiJquery),
  },
  {
    name: "Notion",
    icon: React.createElement(SiNotion),
  },
] as const;
