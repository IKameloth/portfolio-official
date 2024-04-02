"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type TActiveSectionProvider = {
  children: React.ReactNode;
};

type TActiveSectionContext = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<TActiveSectionContext | null>(
  null
);

export const ActiveSectionProvider = ({ children }: TActiveSectionProvider) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        timeOfLastClick,
        setActiveSection,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const ctx = useContext(ActiveSectionContext);

  if (ctx === null)
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionProvider"
    );

  return ctx;
};
