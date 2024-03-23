import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const backImageUrl = require('../../assets/images/back1.png');
const frontImageUrl = require('../../assets/images/front.png');

export default function MultiLayer({ projects }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['-50%', '400%']);

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  const subHeadingVariants = {
    hidden: {
      opacity: 0,
      scale: 0.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        delay: 1,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-content-center"
    >
      <motion.div
        style={{ y: textY }}
        className="relative z-10 text-darker text-center"
      >
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="my-heading-8xl text-navBg"
        >
          John Doe
        </motion.h2>
        <motion.h2
          variants={subHeadingVariants}
          initial="hidden"
          animate="visible"
          className="my-heading"
        >
          Software Developer
        </motion.h2>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: backgroundY,
          backgroundImage: `url(${backImageUrl})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      ></motion.div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${frontImageUrl})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
}
