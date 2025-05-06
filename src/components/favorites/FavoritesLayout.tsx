"use client";

import { useState } from "react";
import styles from "@/components/landing/page.module.css"; // using shared styles
import ClearFavoritesButton from "@/components/favorites/ClearFavoriteButton";
import FavoritesList from "@/components/favorites/FavoritesList";
import { useFavoritesStore } from "@/store/useStore"; 
import Link from "next/link";

const FavoritesLayout = () => {
  const { favorites, removeFavorite, clearFavorites } = useFavoritesStore();

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <nav className={`${styles.navBar} ${isDarkMode ? styles.dark : styles.light}`}>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/favourites" className={styles.navLink}>
            Favorites
          </Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
          <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
          <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
        </div>
  
        <div className={styles.themeToggleContainer}>
          <button onClick={() => setIsDarkMode((prev) => !prev)} className={styles.themeToggle}>
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
  
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className={styles.menuDropdown}>
          <Link href="/" className={styles.dropdownLink}>Home</Link>
          <Link href="/favourites" className={styles.dropdownLink}>Favorites</Link>
        </div>
      )}
  
      <h1 className={styles.pageTitle}>Favourite Movies</h1>
      {favorites.length > 0 ? (
        <>
          <ClearFavoritesButton clearFavorites={clearFavorites} />
          <FavoritesList favorites={favorites} removeFavorite={removeFavorite} />
        </>
      ) : (
        <p className={styles.noFavoritesMessage}>No favourite movies added yet.</p>
      )}
    </div>
  );
}

export default FavoritesLayout;
