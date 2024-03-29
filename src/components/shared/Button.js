import classes from './Button.module.css';

export default function Button({ href, children, width, height, special }) {
  return (
    <div
      className={`${special && classes.specialBtn} ${classes.animateBtn}`}
      style={{ width, height }}
    >
      <a href={`mailto:${href}`}>{children}</a>
    </div>
  );
}
