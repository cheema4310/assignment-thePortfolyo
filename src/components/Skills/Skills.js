import { motion } from 'framer-motion';

import SkillCard from './SkillCard';

const Skills = ({ skills }) => {
  let skillsInOrder = [];
  for (let i = skills.length - 1; i >= 0; i--) {
    const valueAtIndex = skills[i];
    skillsInOrder.push(valueAtIndex);
  }

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto py-20">
      <div className="grid lg:grid-cols-3">
        <motion.div
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 7, delay: 0.3 }}
          viewport={{ once: true }}
          className="hidden lg:col-span-1 lg:my-flex text-7xl font-semibold font-modern"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'sideways-right',
          }}
        >
          {5} Years of Experience
        </motion.div>
        <div className="lg:col-span-2 grid grid-cols-2 place-items-center gap-x-3 gap-y-12">
          {skillsInOrder.map((skill, index) => (
            <SkillCard skill={skill} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
