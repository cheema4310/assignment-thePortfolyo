import { motion } from 'framer-motion';
import bgImg from '../../assets/images/check.svg';

import Button from '../shared/Button';
import johnDoe from '../../assets/images/john.jpeg';

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
        duration: 1,
      },
    },
  };
  // Profile image variants
  const imageVariants = {
    hidden: {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    },
    visible: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        delay: 2,
        duration: 0.5,
      },
    },
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="w-full h-screen bg-no-repeat bg-contain bg-bottom lg:bg-right"
    >
      <div>
        <div className="flex flex-col items-center justify-start gap-8 lg:gap-16 pt-12 lg:py-20 h-full w-11/12 lg:w-3/4 mx-auto text-lighter">
          <div className="self-start my-flex gap-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="w-20 h-20"
            >
              <img
                // src={about.avatar.url}
                src={johnDoe}
                className="w-full h-full rounded-full object-cover border-4 border-textColor"
                alt="avatar"
              />
            </motion.div>

            {/* for mobile only */}
            {/* <div className="lg:hidden">
              <h2 className="text-3xl font-bold font-modern capitalize">
                {about.name}
              </h2>
              <p className="text-sm font-medium font-btn text-light">
                {about.address}
              </p>
            </div> */}
          </div>

          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center my-12 lg:my-0 font-heading text-2xl lg:text-4xl self-start overflow-hidden"
          >
            <div className="font-normal">{staticTitle}</div>
            <ul className="ml-2 lg:ml-4 leading-[60px] h-[60px]">
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
        </div>
        <div className="w-11/12 mx-auto mt-28 lg:mt-0 lg:my-flex">
          <Button href={about.contactEmail} width={180} height={60}>
            Let's chat
          </Button>
        </div>
      </div>
    </div>
  );
}
