import { motion } from 'framer-motion';
function AboutIcon({ show }) {
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
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        whileTap={{ scale: 0.8, transition: { duration: 1 } }}
        stroke="#E6E6E6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a8.949 8.949 0 004.951-1.488A3.987 3.987 0 0013 16h-2a3.987 3.987 0 00-3.951 3.512A8.948 8.948 0 0012 21zm3-11a3 3 0 11-6 0 3 3 0 016 0z"
      ></motion.path>
    </motion.svg>
  );
}

export default AboutIcon;
