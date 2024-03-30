import { motion } from 'framer-motion';

export default function JobDetails({ job, index }) {
  const startDate = new Date(job.startDate).toDateString();
  const startDateMonth = startDate.slice(4, 7);
  const startDateYear = startDate.slice(11);

  const endDate = new Date(job.endDate).toDateString();
  const endDateMonth = endDate.slice(4, 7);
  const endDateYear = endDate.slice(11);

  const outputDate = `${startDateMonth} ${startDateYear} - ${endDateMonth} ${endDateYear}`;

  const boxVariant = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.5,
      },
    },
  };
  //Optional: last index --> 'summary' Field is missing
  if (!job.summary) {
    job.summary = job.bulletPoints.join();
  }
  return (
    <motion.div
      variants={boxVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${
        index % 2 === 0 ? 'left-0' : 'left-0 lg:left-1/2'
      } relative w-full lg:w-1/2 py-3 px-3 lg:px-12`}
    >
      <div
        className={`hidden lg:block absolute ${
          index % 2 === 0 ? '-right-[6px]' : '-left-[6px]'
        }  top-8 w-3 h-3 bg-textColor rounded-full z-10`}
      />
      <div
        className={`${
          index % 2 === 0 && 'lg:text-end'
        } relative py-3 px-7 text-light`}
      >
        <h2 className="my-heading text-textColor">{job.jobTitle}</h2>
        <h4 className="text-xs font-modern">
          {job.company_name} {job.jobLocation}
        </h4>
        <p className="py-2 text-xs font-btn font-bold text-lighter">
          {outputDate}
        </p>
        <p className="pt-2 font-btn">{job.summary}</p>
      </div>
    </motion.div>
  );
}
