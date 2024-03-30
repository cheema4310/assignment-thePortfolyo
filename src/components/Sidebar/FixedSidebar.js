// Icons
import LinkedinIcon from './icons/LinkedinIcon';
import TwitterIcon from './icons/TwitterIcon';
import FacebookIcon from './icons/FacebookIcon';
import ProjectsIcon from './icons/ProjectsIcon';
import ServicesIcon from './icons/ServicesIcon';
import AboutIcon from './icons/AboutIcon';
import InstagramIcon from './icons/InstagramIcon';
import TestimonialsIcon from './icons/TestimonialsIcon';

// CSS
import classes from './FixedSidebar.module.css';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const FixedSidebar = ({ socialHandles }) => {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  const getValue = (val) => {
    if (val > 760) {
      setShow(true);
    } else if (val < 760) {
      setShow(false);
    }
  };
  useMotionValueEvent(scrollY, 'change', getValue);
  function fetchUrl(platform) {
    let requiredUrl;
    socialHandles.forEach((social) => {
      if (social.platform === platform) {
        requiredUrl = social.url;
      }
    });
    return requiredUrl;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      exit="hidden"
      transition={{ duration: 0.5 }}
      className={classes.sideBarWrapper}
    >
      <div className={classes.sideIcons}>
        <a href={fetchUrl('LinkedIn')}>
          <LinkedinIcon show={show} />
        </a>

        <a href={fetchUrl('Twitter')}>
          <TwitterIcon show={show} />
        </a>

        <a href={fetchUrl('Instagram')}>
          <InstagramIcon show={show} />
        </a>

        <a href={fetchUrl('Facebook')}>
          <FacebookIcon show={show} />
        </a>
      </div>

      <div className={classes.sideNav}>
        <a href="/#projects">
          <ProjectsIcon show={show} />
        </a>
        <a href="/#services">
          <ServicesIcon show={show} />
        </a>

        <a href="/#testimonials">
          <TestimonialsIcon show={show} />
        </a>

        <a href="/#about">
          <AboutIcon show={show} />
        </a>
      </div>
    </motion.div>
  );
};

export default FixedSidebar;
