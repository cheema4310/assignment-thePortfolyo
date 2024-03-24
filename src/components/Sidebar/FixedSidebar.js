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

const FixedSidebar = ({ socialHandles }) => {
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
    <div className={classes.sideBarWrapper}>
      <div className={classes.sideIcons}>
        <div className={classes.sideGithub}>
          <a href={fetchUrl('LinkedIn')} target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </div>
        <div className={classes.sideTwitter}>
          <a href={fetchUrl('Twitter')} target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
        </div>
        <div className={classes.sideUpwork}>
          <a href={fetchUrl('Instagram')} target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
        </div>

        <div className={classes.sideLinkedin}>
          <a href={fetchUrl('Facebook')} target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
        </div>
      </div>

      <div className={classes.sideEmail}>
        <div className={classes.sideGithub}>
          <a href="#projects" target="_blank" rel="noreferrer">
            <ProjectsIcon />
          </a>
        </div>
        <div className={classes.sideUpwork}>
          <a href="#services" target="_blank" rel="noreferrer">
            <ServicesIcon />
          </a>
        </div>
        <div className={classes.sideTwitter}>
          <a href="#testimonials" target="_blank" rel="noreferrer">
            <TestimonialsIcon />
          </a>
        </div>
        <div className={classes.sideLinkedin}>
          <a href="#about" target="_blank" rel="noreferrer">
            <AboutIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixedSidebar;
