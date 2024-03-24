import { motion } from 'framer-motion';

function ProjectsIcon() {
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
    >
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke="red"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
      ></motion.path>
    </motion.svg>
  );
}

export default ProjectsIcon;