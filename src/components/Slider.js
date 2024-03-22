// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// export default function Slider({ projects }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 3000);

//       return () => clearInterval(interval);
//     }, [projects.length]);

//   const imageVariant = {
//     start: { x: 0, y: 0 },
//     end: { x: currentIndex * -100, y: 0 },
//   };

//   return (
//     <div className="w-full h-64 bg-gray-200 overflow-hidden">
//       <motion.div
//         className="flex w-full h-full"
//         variants={imageVariant}
//         initial="start"
//         animate="end"
//         transition={{ duration: 2, ease: 'easeInOut' }}
//       >
//         {projects.map((project, index) => (
//           <div className="basis-1/3">
//             <img
//               src={project.image.url}
//               key={index}
//               className="w-full h-full"
//               alt={index}
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Assuming you have an array of image URLs in a file called images.js

const Slider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex absolute top-1/2 transform -translate-y-1/2">
        <div className="flex w-full">
          <AnimatePresence initial={false} custom={currentIndex}>
            {projects.map((project, index) => (
              <motion.img
                key={index}
                src={project.image.url}
                className="w-full h-auto"
                initial={{ x: index === 0 ? '0%' : '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: index === currentIndex ? '100%' : '-100%' }}
                transition={{ duration: 0.5 }}
                // style={{ zIndex: index === currentIndex ? 1 : 0 }}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slider;
