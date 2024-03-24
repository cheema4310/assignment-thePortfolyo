import { motion } from 'framer-motion';

function LinkedinIcon() {
  const svgVariants = {
    hidden: {
      rotate: 180,
    },
    visible: {
      rotate: 0,

      transition: {
        duration: 1,
      },
    },
  };

  const pathVariantsOne = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,

      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };
  const pathVariantsTwo = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,

      transition: {
        delay: 1,
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <motion.svg
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 24 24"
      whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
      whileTap={{
        scale: 0.8,
        outline: 'none',
        transition: { duration: 0.5 },
      }}
    >
      <motion.path
        variants={pathVariantsTwo}
        initial="hidden"
        animate="visible"
        stroke="#E6E6E6"
        strokeWidth="1"
        fillRule="evenodd"
        d="M12.51 8.796v1.697a3.738 3.738 0 013.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168zM7.2 6.106a1.61 1.61 0 01-.988 1.483 1.595 1.595 0 01-1.743-.348A1.607 1.607 0 015.6 4.5c.424 0 .831.17 1.131.47.3.301.469.71.469 1.136z"
        clipRule="evenodd"
      ></motion.path>
      <motion.path
        variants={pathVariantsOne}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        whileTap={{ scale: 0.8, transition: { duration: 1 } }}
        stroke="#E6E6E6"
        strokeWidth="1"
        d="M7.2 8.809H4V19.5h3.2V8.809z"
      ></motion.path>
    </motion.svg>
  );
}

export default LinkedinIcon;
