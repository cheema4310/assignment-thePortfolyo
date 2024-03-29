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
        <div className={classes.sideGithub}>
          <a href={fetchUrl('LinkedIn')} target="_blank" rel="noreferrer">
            <LinkedinIcon show={show} />
          </a>
        </div>
        <div className={classes.sideTwitter}>
          <a href={fetchUrl('Twitter')} target="_blank" rel="noreferrer">
            <TwitterIcon show={show} />
          </a>
        </div>
        <div className={classes.sideUpwork}>
          <a href={fetchUrl('Instagram')} target="_blank" rel="noreferrer">
            <InstagramIcon show={show} />
          </a>
        </div>

        <div className={classes.sideLinkedin}>
          <a href={fetchUrl('Facebook')} target="_blank" rel="noreferrer">
            <FacebookIcon show={show} />
          </a>
        </div>
      </div>

      <div className={classes.sideEmail}>
        <div className={classes.sideGithub}>
          <a href="#projects" target="_blank" rel="noreferrer">
            <ProjectsIcon show={show} />
          </a>
        </div>
        <div className={classes.sideUpwork}>
          <a href="#services" target="_blank" rel="noreferrer">
            <ServicesIcon show={show} />
          </a>
        </div>
        <div className={classes.sideTwitter}>
          <a href="#testimonials" target="_blank" rel="noreferrer">
            <TestimonialsIcon show={show} />
          </a>
        </div>
        <div className={classes.sideLinkedin}>
          <a href="#about" target="_blank" rel="noreferrer">
            <AboutIcon show={show} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FixedSidebar;
