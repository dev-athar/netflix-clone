// Header.js

import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css"; // Import CSS module for styling

const Header = () => {
  // Dummy language options
  const languageOptions = ["English", "Spanish", "French", "German"];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Netflix logo */}
        <img src="/logo.png" alt="Netflix Logo" className={styles.logo} />
      </div>
      <div className={styles.buttonsContainer}>
        {/* Language dropdown */}
        <select className={styles.languageSelect}>
          {languageOptions.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
        {/* Sign In button */}
        <button className="text-white bg-red-600 p-3 rounded-md from-transparent">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
