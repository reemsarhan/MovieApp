"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/components/movieCard/MovieCard.module.css";
import { useFavoritesStore } from "../../store/useStore";

interface MovieCardProps {
  movie: {
    Title: string;
    Poster: string;
    imdbID: string;
  };
  onToggleFavorite?: (imdbID: string) => void;
  isFavorite?: boolean;
  showRemoveButton?: boolean;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [isBouncing, setIsBouncing] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleCardClick = () => {
    router.push(`/movie-details/${movie.imdbID}`);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBouncing(true);

    if (isFavorite(movie.imdbID)) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }

    setTimeout(() => setIsBouncing(false), 500);
  };

  const favorite = hasMounted && isFavorite(movie.imdbID);

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.posterContainer}>
        <Image
          src={
            movie.Poster === "N/A" ? "/movies/placeholder.jpg" : movie.Poster
          }
          alt={movie.Title}
          priority
          width={200}
          height={300}
          className={styles.poster}
        />
        <button
          type="button"
          className={`${styles.heartIcon} ${
            favorite ? styles.favorite : ""
          } ${isBouncing ? styles.bounce : ""}`}
          onClick={handleToggleFavorite}
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>
      <h3 className={styles.title}>{movie.Title}</h3>
    </div>
  );
}
