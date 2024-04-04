import * as React from "react";
import { SVGMotionProps, motion } from "framer-motion";

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>,
  stroke: string
) => (
  <motion.path
    strokeWidth="3"
    stroke={stroke}
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = (props: any) => {
  const { toggle, strokeColor } = props;

  return (
    <button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          stroke={strokeColor}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          stroke={strokeColor}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          stroke={strokeColor}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
