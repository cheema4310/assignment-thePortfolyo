import classes from './TextTyping.module.css';

export default function TextTyping({ text }) {
  return (
    <div className={classes.animateText}>
      {text} <span></span>
    </div>
  );
}
