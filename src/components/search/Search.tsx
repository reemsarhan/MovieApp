import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/components/search/Search.module.scss";
import Image from "next/image";
import { Movie } from "@/types/movie";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  searchResults: Movie[];
  updateChangeResults: (movies: Movie[]) => void;
}

const Search = ({ searchResults, updateChangeResults }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        handleSearch(searchQuery);
      } else {
        updateChangeResults([]);
        setSearchError(null);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleSearch = async (query: string) => {
    if (!query) {
      updateChangeResults([]);
      setSearchError(null);
      return;
    }

    try {
      setSearchLoading(true);
      setSearchError(null);
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
      );
      const data = await response.json();
      if (data.Search) {
        updateChangeResults(data.Search);
      } else {
        updateChangeResults([]);
        setSearchError(data.Error || "No results found");
      }
    } catch {
      setSearchError("An error occurred while searching");
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.searchWrapper}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          value={searchQuery}
          className={styles.searchInput}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
        />
      </div>

      {searchLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        searchQuery.trim() !== "" && (
          <div className={styles.movieList}>
            {searchError ? (
              <p>{searchError}</p>
            ) : searchResults.length > 0 ? (
              searchResults.map((movie) => (
                <Link key={movie.imdbID} href={`/movie-details/${movie.imdbID}`} >
                  <div className={styles.movieCard}>
                    <Image width={200} height={300}
                      src={
                        movie.Poster === "N/A"
                          ? "/movies/placeholder.jpg"
                          : movie.Poster
                      }
                      alt={movie.Title} className={styles.poster} />
                    <div className={styles.movieInfo}>
                      <h3>{movie.Title}</h3>
                      <p>Year: {movie.Year}</p>
                      <p>Rating: {movie.imdbRating || "N/A"}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Search;
