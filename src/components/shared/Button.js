import classes from './Button.module.css';
import { motion } from 'framer-motion';

export default function Button({
  href,
  children,
  width,
  height,
  classNames,
  special,
}) {
  return (
    <div
      className={`${special && classes.specialBtn} ${
        classes.animateBtn
      } ${classNames}`}
      style={{ width, height }}
    >
      <motion.a whileTap={{ scale: 0.9 }} href={`mailto:${href}`}>
        {children}
      </motion.a>
    </div>
  );
}
