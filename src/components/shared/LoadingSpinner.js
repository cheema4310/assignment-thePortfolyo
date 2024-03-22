import classes from './LoadingSpinner.module.css';

export default function LoadingSpinner({ asOverlay }) {
  return (
    <div
      className={`${asOverlay && classes.loadingSpinnerOverlay} ${classes.col}`}
    >
      <div className={`${classes.sp} ${classes['sp-wave']}`}></div>
    </div>
  );
}
