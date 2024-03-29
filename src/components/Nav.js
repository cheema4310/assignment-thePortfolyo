import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Nav({ name }) {
  return (
    <nav className="">
      <div className="my-flex justify-between w-4/5 h-24 mx-auto">
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

        <div className="my-flex justify-around gap-6">
          <NavLink to="#projects" className="my-navlink">
            Projects
          </NavLink>
          <NavLink to="#services" className="my-navlink">
            Services
          </NavLink>
          <NavLink to="#testimonials" className="my-navlink">
            Testimonials
          </NavLink>
          <NavLink to="#about" className="my-navlink">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
