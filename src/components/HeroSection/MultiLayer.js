import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const backImageUrl = require('../../assets/images/back1.png');
const frontImageUrl = require('../../assets/images/front.png');

export default function MultiLayer() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['-50%', '400%']);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-content-center"
    >
      <motion.div
        style={{ y: textY }}
        className="relative z-10 text-darker text-center"
      >
        <h2 className="my-heading-6xl text-navBg">John Doe</h2>
        <p className="my-heading-normal">Software Developer</p>
        <p className="my-para w-4/5 mx-auto">
          From Los Angeles, America. I develop 3D visuals, user interfaces and
          web applications
        </p>
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
