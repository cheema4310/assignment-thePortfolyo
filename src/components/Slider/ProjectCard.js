import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
  const techString = project.techStack.join();
  const desiredOutput = techString.replace(/,/g, '-');

  return (
    <Link
      to={project.liveurl}
      className="w-[480px] h-96 flex items-center px-6 overflow-hidden"
    >
      <div className="w-[480px] relative duration-700 hover:scale-110">
        <img
          src={project.image.url}
          key={index}
          className="w-full border-darker bg-darkest shadow-outline rounded-xl"
          alt={index}
        />
        <div className="absolute bottom-0 left-0 w-full py-4 bg-glass font-bold text-center rounded-b-xl">
          {desiredOutput}
        </div>
      </div>
    </Link>
  );
}
