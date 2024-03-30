import { motion } from 'framer-motion';

export default function SkillCard({ skill, index }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -25,
      y: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.23,
        delay: index * 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full bg-darker rounded-lg"
    >
      <div className="relative px-2 py-6 lg:px-6 lg:pb-6 lg:pt-0">
        <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 my-flex bg-darker rounded-full">
          <div className="w-3/5 h-3/5">
            <img
              src={skill.image.url}
              alt="tech"
              className="w-full h-full object-cover z-10"
            />
          </div>
        </div>
        <div className="flex justify-between pt-4 pb-2 font-modern">
          <h2 className="text-lighter text-lg font-bold">{skill.name}</h2>
          <p className="text-textColor text-sm">{skill.percentage}%</p>
        </div>

        <div className="w-full h-[6px] bg-darkest border border-textColor rounded-full">
          <div
            style={{ width: `${skill.percentage}%` }}
            className={`bg-textColor h-full rounded-full`}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
