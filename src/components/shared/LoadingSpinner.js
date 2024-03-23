import { useLocation } from 'react-router-dom';
import classes from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  const location = useLocation();
  let asOverlay = false;

  if (location.pathname === '/') {
    asOverlay = true;
  }

  return (
    <div
      className={`${asOverlay ? classes.loadingSpinnerOverlay : classes.col} `}
    >
      <div className={`${classes.sp} ${classes['sp-wave']}`}></div>
    </div>
  );
}
