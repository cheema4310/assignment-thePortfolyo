import { motion } from 'framer-motion';

function FacebookIcon({ show }) {
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
      variants={svgVariants}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
      whileTap={{
        scale: 0.8,
        outline: 'none',
        transition: { duration: 0.5 },
      }}
    >
      <motion.path
        variants={pathVariants}
        stroke="#E6E6E6"
        strokeWidth="1"
        initial="hidden"
        animate={show ? 'visible' : 'hidden'}
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        whileTap={{ scale: 0.8, transition: { duration: 1 } }}
        d="M10 20V12.5H8V9.8H10C10 9.8 10 8.7 10 7.5C10 5.7 11.2 4 13.9 4C15 4 15.8 4.1 15.8 4.1L15.7 6.6C15.7 6.6 14.9 6.6 14 6.6C13 6.6 12.9 7 12.9 7.8C12.9 8.4 12.9 6.5 12.9 9.8H15.8L15.7 12.5H12.9V20H10Z"
        fillOpacity={0.6}
      ></motion.path>
    </motion.svg>
  );
}

export default FacebookIcon;
