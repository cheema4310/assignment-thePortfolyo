import classes from './Slider.module.css';

export default function Slider({ projects }) {
  const width = `${480 * projects.length}px`;

  return (
    <div
      className={`${classes.slider} w-full h-96 bg-transparent relative overflow-hidden grid place-items-center`}
    >
      <div style={{ width }} className={`${classes.slideTrack} flex`}>
        {projects.map((project, index) => (
          <div className="w-[480px] h-96 flex items-center px-6">
            <img
              src={project.image.url}
              key={index}
              className="w-full duration-700 hover:scale-110 border-darker border-[8px] rounded-lg"
              alt={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
