// is used to show a skeleton screen — 
// a visual placeholder that mimics the layout of content while the real data is being loaded.

import styles from "@/components/load/SkeletonLoader.module.scss";

export default function SkeletonLoader() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonPoster}></div>
      <div className={styles.skeletonTitle}></div>
    </div>
  );
}
