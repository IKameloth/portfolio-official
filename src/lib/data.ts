import React from "react";
import { CgWorkAlt } from "react-icons/cg";

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
  SiPostman,
  SiReact,
  SiRedux,
  SiRuby,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import corpcommentImg from "/public/corpcomment.png";

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

export const ExperiencesData = [
  {
    title: "Software developer",
    location: "Valparaiso, Chile",
    description:
      "Jumpitt Labs S.A. - MicroFrontend with ReactJS, Typescript, Redux, Antd. Others Web development using MaterialUI and Tailwind. API Gateway with NestJS, RubyOnRails and a litte bit of ReactNative in a mobile project.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - January 2024",
  },
  {
    title: "Software developer",
    location: "Santiago, Chile",
    description:
      "Autentia S.A. - Web development usign RubyOnRails, Javascript, Bulma, ReactJS and Typescript. Support for Rest API with SOAP services using RubyOnRails.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2018 - May 2022",
  },
  {
    title: "Backend developer",
    location: "Valparaiso, Chile",
    description:
      "Jumpitt Labs S.A. - Web development usign PHP, Laravel5, vanilla Javascript and Bootstrap.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2017 - September 2018",
  },
  {
    title: "Junior developer",
    location: "Vina del Mar, Chile",
    description:
      "Qality S.A. - Professional practice - Web development usign PHP, CodeIgniter, vanilla Javascript, Jquery, HTML and CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2017 - May 2017",
  },
];

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
  {
    name: "Postman",
    icon: React.createElement(SiPostman),
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
] as const;
