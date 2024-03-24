import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import TextTyping from './TextTyping/TextTyping';

const backImageUrl = require('../../assets/images/back1.png');
const frontImageUrl = require('../../assets/images/front.png');

export default function MultiLayer({ userAbout }) {
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
        delay: 1.5,
        duration: 1,
        type: 'spring',
        damping: 5,
        stiffness: 100,
      },
    },
  };
  const subHeadingVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 2,
        ease: 'easeInOut',
        // stiffness: 100,
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
          initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 1.5 }}
          className="my-heading-8xl text-navBg"
        >
          John Doe
        </motion.h2>
        <motion.h2
        // variants={headingVariants}
        // initial="hidden"
        // animate="visible"
        // className="my-heading"
        >
          <TextTyping text="I'm a " />
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
