// Header.js

import React from "react";
import Link from "next/link";
import styles from "../styles/HomeBanner.module.css"; // Import CSS module for styling

const Header = () => {
  // Dummy language options
  const languageOptions = ["English", "Spanish", "French", "German"];

  return (
    <header className=" flex justify-between items-center p-2 bg-gradient-to-b from-black">
      <div className=" w-24 p-1 m-3">
        {/* Netflix logo */}
        <img src="/logo.png" alt="Netflix Logo" className="" />
      </div>
      <div className="">
        {/* Language dropdown */}
        <select className="bg-black text-white p-3 rounded-md m-3">
          {languageOptions.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
        {/* Sign In button */}
        <button className="text-white bg-red-600 p-3 rounded-md from-black ">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
