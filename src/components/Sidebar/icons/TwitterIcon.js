import { motion } from 'framer-motion';

function TwitterIcon() {
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
      viewBox="0 0 24 24"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
      whileTap={{ scale: 0.8, outline: 'none', transition: { duration: 0.5 } }}
    >
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        fillOpacity="0.6"
        stroke="#E6E6E6"
        strokeWidth="1"
        d="M20 6.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H4c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
      ></motion.path>
    </motion.svg>
  );
}

export default TwitterIcon;
