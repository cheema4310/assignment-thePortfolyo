import { motion } from 'framer-motion';
import bgImg from '../../assets/images/check.svg';
import Nav from '../Nav';

export default function HeroSection({ about }) {
  return (
    <div>
      {/* Change Nav Position Later */}
      <Nav />

      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-full h-screen bg-no-repeat bg-contain bg-right"
      >
        <div className="flex flex-col items-center h-full text-lighter pt-20">
          <div className="w-20 h-20">
            <img
              src={about.avatar.url}
              className="w-full h-full rounded-full object-cover border-2 border-textColor"
              alt="avatar"
            />
          </div>
          <motion.h2 className="text-modern text-5xl font-thin w-1/3 py-8">
            {about.subTitle}
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="my-btn"
          >
            ask@johndoe.com
          </motion.button>
        </div>
      </div>
    </div>
  );
}
