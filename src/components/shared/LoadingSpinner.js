import classes from './LoadingSpinner.module.css';

export default function LoadingSPinner() {
  return (
    <div className={classes['col-sm-2']}>
      <div className={`${classes.sp} ${classes['sp-wave']}`}></div>
    </div>
  );
}
