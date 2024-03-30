import { useRef } from 'react';
import { useInView } from 'framer-motion';
import JobDetails from './JobDetails';

export default function Timeline({ timeline }) {
  const timelineRef = useRef();
  const isInView = useInView(timelineRef, { once: true });

  return (
    <div className="mt-20">
      <h2 className="pt-32 pb-20 my-heading-5xl text-center">
        Career Snapshot
      </h2>
      <div
        ref={timelineRef}
        className={`relative w-11/12 lg:w-4/5 mx-auto lg:after:content-[''] lg:after:absolute lg:after:w-px lg:after:h-full lg:after:top-0 lg:after:left-1/2 lg:after:bg-dark lg:after:-ml-[0.5px] lg:after:-z-10 ${
          isInView && 'lg:after:animate-moveline'
        }`}
      >
        {timeline.map((job, index) => (
          <JobDetails key={index} job={job} index={index} />
        ))}
      </div>
    </div>
  );
}
