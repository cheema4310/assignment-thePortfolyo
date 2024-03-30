import CloseIcon from './CloseIcon';
import { motion } from 'framer-motion';
import NavLinks from './NavLinks';
import Button from '../shared/Button';

export default function MobileMenu({ onClose }) {
  const menuSlideVariants = {
    hidden: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
      },
    },
  };
  return (
    <motion.div
      variants={menuSlideVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed lg:hidden w-full h-full top-0 left-0 z-50 bg-darker flex justify-between items-center flex-col"
    >
      <div className="w-5/6 mx-auto py-10 flex flex-col gap-10">
        <div className="self-end" onClick={onClose}>
          <CloseIcon />
        </div>
        <div className="">
          <NavLinks onClose={onClose} />
        </div>
        <div className="my-flex">
          <Button width={150} height={50} special>
            Say Hi
          </Button>
        </div>
      </div>
      <div className="bg-darker py-3 text-md font-modern text-lighter">
        Designed & Built by{' '}
        <span className="text-textColor font-bold">Zubair Cheema</span>
      </div>
    </motion.div>
  );
}
