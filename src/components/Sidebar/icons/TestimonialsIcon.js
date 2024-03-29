import { motion } from 'framer-motion';

function TestimonialsIcon({ show }) {
  const svgVariants = {
    hidden: {
      rotate: -180,
    },
    visible: {
      rotate: 0,

      transition: {
        duration: 1,
      },
    },
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,

      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      ariaHidden="true"
      //   className="w-6 h-6 text-gray-800 dark:text-white"
      viewBox="0 0 24 24"
      variants={svgVariants}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
      whileTap={{
        scale: 0.8,
        outline: 'none',
        transition: { duration: 0.5 },
      }}
    >
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate={show ? 'visible' : 'hidden'}
        stroke="#E6E6E6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 00-.629.256.868.868 0 00-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 004.89 16H9l3 4 3-4h4.111a.896.896 0 00.629-.256.868.868 0 00.26-.619v-9.25a.868.868 0 00-.26-.619.896.896 0 00-.63-.256z"
      ></motion.path>
    </motion.svg>
  );
}

export default TestimonialsIcon;
