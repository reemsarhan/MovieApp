"use client";

import { useState } from "react";
import { getDefaultMovies } from "@/services/movie";
import MovieCard from "@/components/movieCard/MovieCard";
import Search from "@/components/search/Search";
import styles from "@/components/landing/page.module.css";
import { Notification } from "@/components/movieDetails/Notifications";
import Link from "next/link";

import { Movie } from "@/types/movie";

export default function Home({initialMovies,initialTotalResults,}: {initialMovies: Movie[];initialTotalResults: number;}) {
  const [defaultMovies, setDefaultMovies] = useState<Movie[]>(initialMovies);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loadMoreMovies = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const data = await getDefaultMovies(nextPage);
    setDefaultMovies((prevMovies) => [...prevMovies, ...data.Search]);
    setPage(nextPage);
    setLoading(false);
  };

  const updateSearchResults = (movies: Movie[]) => {
    setSearchResults(movies);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`} 
    style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <nav className={styles.navBar}>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/favourites" className={styles.navLink}>
            Favorites
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
          <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
          <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
        </div>

        {/* Theme Toggle Button */}
        <div className={styles.themeToggleContainer}>
          <button onClick={() => setIsDarkMode((prev) => !prev)} className={styles.themeToggle}>
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Hamburger Menu Dropdown */}
      {isMenuOpen && (
        <div className={styles.menuDropdown}>
          <Link href="/" className={styles.dropdownLink}>Home</Link>
          <Link href="/favourites" className={styles.dropdownLink}>Favorites</Link>
        </div>
      )}

      <h1>Movie Library</h1>
      <Notification />
      <Search updateChangeResults={updateSearchResults} searchResults={searchResults} />
      {/* conditional rendering */}
      {
        searchResults.length === 0 && (
          <div className={styles.movieList}>
            {defaultMovies.length > 0 ? (
              defaultMovies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </div>
        )
      }

      {
        searchResults.length === 0 &&
        defaultMovies.length > 0 &&
        defaultMovies.length < initialTotalResults && (
          <button onClick={loadMoreMovies} className={styles.loadMoreButton} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </button>
        )
      }
    </div>
  );
}
