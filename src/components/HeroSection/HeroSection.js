import { motion } from 'framer-motion';
import bgImg from '../../assets/images/check.svg';
import Nav from '../Nav';

export default function HeroSection({ about }) {
  // Requirement: Data Storage
  // about.subTitle Field
  // static Title --> index 0 to 9 --? I develop
  // dynamic Title1 --> index 10 to 18 --? 3D visuals
  // dynamic Title2 --> index 21 to 36 --? user interfaces
  // dynamic Title3 --> index 42 to Onwards --? web applications

  const subTitle = about.subTitle;
  const staticTitle = subTitle.slice(0, 10);
  const dynamicTitleOne = subTitle.slice(10, 19) + 's and';
  const dynamicTitleTwo = subTitle.slice(22, 37);
  const dynamicTitleThree = subTitle.slice(42);
  const dynamicTitle = [dynamicTitleOne, dynamicTitleTwo, dynamicTitleThree];

  // heading variant
  const headingVariants = {
    hidden: {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    },
    visible: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        delay: 3,
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      {/* Change Nav Position Later */}
      <Nav />

      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-full h-screen bg-no-repeat bg-contain bg-right"
      >
        <div className="flex flex-col items-center h-full w-3/4 mx-auto text-lighter">
          <div className="w-20 h-20 my-16 self-start">
            <img
              src={about.avatar.url}
              className="w-full h-full rounded-full object-cover border-2 border-textColor"
              alt="avatar"
            />
          </div>
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center font-heading text-4xl self-start overflow-hidden"
          >
            <div className="font-normal">{staticTitle}</div>
            <ul className="ml-4 leading-[60px] h-[60px]">
              {dynamicTitle.map((title, index) => (
                <li
                  className="list-none text-textColor font-medium relative top-0 animate-slide after:absolute after:content-[''] after:w-full after:h-full after:border-l-2 after:border-textColor after:left-0 after:animate-cursor after:bg-darkest"
                  key={index}
                >
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="my-btn mt-24"
          >
            ask@johndoe.com
          </motion.button>
        </div>
      </div>
    </div>
  );
}
