//shows a loading spinner animation,
//  usually while content or data is being fetched or rendered

import styles from "@/components/load/LoadingSpinner.module.scss";
export default function LoadingSpinner() {
  return (
    <div className={`${styles.loading}`}>
      <div className={`${styles.spinner}`}></div>
    </div>
  );
}
