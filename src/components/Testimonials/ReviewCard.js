import QuoteSVG from './QuoteSVG';
import { motion } from 'framer-motion';

export default function ReviewCard({ testi, index }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      x: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      key={index}
      className="bg-darker text-light rounded-xl relative h-min"
    >
      <div className="flex flex-row-reverse absolute -top-8 -right-4 ">
        <QuoteSVG index={index} />
      </div>
      <p className="font-btn text-center px-6 py-12">{testi.review}</p>
      <p className="font-modern font-semibold text-xl text-center pb-8 text-textColor">
        {testi.name}
      </p>
      <div className="w-12 h-12 absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-60">
        <img
          src={testi.image.url}
          className="w-full h-full rounded-full border-2 border-darker"
          alt="user"
        />
      </div>
    </motion.div>
  );
}
