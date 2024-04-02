"use client";

import React from "react";

type TSectionTitle = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: TSectionTitle) => {
  return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
};

export default SectionTitle;
