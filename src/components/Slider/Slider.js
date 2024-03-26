import ProjectCard from './ProjectCard';
import classes from './Slider.module.css';

export default function Slider({ projects }) {
  const width = `${480 * projects.length}px`;

  return (
    <div
      className={`${classes.slider} w-full h-96 bg-transparent relative overflow-hidden grid place-items-center`}
    >
      <div style={{ width }} className={`${classes.slideTrack} flex`}>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </div>
  );
}
