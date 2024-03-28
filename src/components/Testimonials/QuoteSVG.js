import React from 'react';
import { motion } from 'framer-motion';

function QuoteSVG({ index }) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,

      transition: {
        duration: 2,
        delay: index * 0.5,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 24 24"
    >
      <motion.path
        variants={pathVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        stroke="#AC885B"
        strokeWidth="0.5px"
        d="M6 6a2 2 0 00-2 2v3a2 2 0 002 2h3a3 3 0 01-3 3H5a1 1 0 100 2h1a5 5 0 005-5V8a2 2 0 00-2-2H6zm9 0a2 2 0 00-2 2v3a2 2 0 002 2h3a3 3 0 01-3 3h-1a1 1 0 100 2h1a5 5 0 005-5V8a2 2 0 00-2-2h-3z"
        clipRule="evenodd"
      ></motion.path>
    </svg>
  );
}

export default QuoteSVG;
