import React from 'react';
// import { FiGithub } from 'react-icons/fi';
// import { SiUpwork } from 'react-icons/si';
// import { FiLinkedin } from 'react-icons/fi';
// import { FiTwitter } from 'react-icons/fi';

import classes from './FixedSidebar.module.css';

const FixedSidebar = () => {
  return (
    <div className={classes.sideBarWrapper}>
      <div className={classes.sideIcons}>
        <div className={classes.sideGithub}>
          <a
            href="https://github.com/cheema4310"
            target="_blank"
            rel="noreferrer"
          >
            {/* <FiGithub /> */}
            icon
          </a>
        </div>
        <div className={classes.sideUpwork}>
          <a
            href="https://www.upwork.com/freelancers/~01607e1315b671d3d8"
            target="_blank"
            rel="noreferrer"
          >
            {/* <SiUpwork /> */}
            icon
          </a>
        </div>
        <div className={classes.sideTwitter}>
          <a
            href="https://twitter.com/cheema4310"
            target="_blank"
            rel="noreferrer"
          >
            {/* <FiTwitter /> */}
            icon
          </a>
        </div>
        <div className={classes.sideLinkedin}>
          <a
            href="https://www.linkedin.com/in/muhammadzubaircheema/"
            target="_blank"
            rel="noreferrer"
          >
            {/* <FiLinkedin /> */}
            icon
          </a>
        </div>
      </div>
      <div className={classes.sideEmail}>
        <a href="mailto:cheema4310@gmail.com">Cheema4310@gmail.com</a>
      </div>
    </div>
  );
};

export default FixedSidebar;
