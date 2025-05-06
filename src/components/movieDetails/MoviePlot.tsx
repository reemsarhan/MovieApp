import styles from "./movie.details.page.module.scss";
export default function MoviePlot({ plot }: { plot: string }) {
  return <p className={styles.plot}>{plot}</p>;
}
