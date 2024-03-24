import { motion } from 'framer-motion';

function ServicesIcon() {
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
      animate="visible"
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
        animate="visible"
        stroke="#E6E6E6"
        strokeLinecap="round"
        strokeWidth="1"
        d="M8.737 8.737a21.49 21.49 0 013.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 013.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 11-4 0 2 2 0 014 0z"
      ></motion.path>
    </motion.svg>
  );
}

export default ServicesIcon;
