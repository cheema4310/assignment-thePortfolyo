import { useRef } from 'react';
import { useInView } from 'framer-motion';
import JobDetails from './JobDetails';

export default function Timeline({ timeline }) {
  const timelineRef = useRef();
  const isInView = useInView(timelineRef, { once: true });

  return (
    <div className="py-20">
      <div
        ref={timelineRef}
        className={`relative w-4/5 mx-auto after:content-[''] after:absolute after:w-px after:h-full after:top-0 after:left-1/2 after:bg-dark after:-ml-[0.5px] after:-z-10 ${
          isInView && 'after:animate-moveline'
        }`}
      >
        {timeline.map((job, index) => (
          <JobDetails key={index} job={job} index={index} />
        ))}
      </div>
    </div>
  );
}
