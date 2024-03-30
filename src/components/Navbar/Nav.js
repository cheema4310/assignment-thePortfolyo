import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import NavLinks from './NavLinks';
import MenuIcon from './MenuIcon';
import MobileMenu from './MobileMenu';

export default function Nav({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="my-flex justify-between w-11/12 lg:w-4/5 h-24 mx-auto">
        <div className="group cursor-pointer">
          <motion.h2
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="my-heading text-lighter hover:text-lightest capitalize"
          >
            {name}
          </motion.h2>
          <motion.p
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            transition={{ duration: 2, delay: 1 }}
            className="font-medium font-btn text-base text-lighter group-hover:text-lightest"
          >
            Software Developer + Designer
          </motion.p>
        </div>

        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <div className="lg:hidden" onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </div>
        <AnimatePresence>
          {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
        </AnimatePresence>
      </div>
    </nav>
  );
}
