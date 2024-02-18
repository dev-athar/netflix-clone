// Header.js

import React from "react";
const Header = () => {
  // Dummy language options
  const languageOptions = ["English", "Spanish", "French", "German"];

  return (
    <header className=" flex justify-between lg:justify-around items-center p-2 bg-gradient-to-b from-black m-auto pb-40">
      <div className=" w-24 p-1 m-4 lg:w-40">
        {/* Netflix logo */}
        <img src="/logo.png" alt="Netflix Logo" className="" />
      </div>
      <div className="">
        {/* Language dropdown */}
        <select className="bg-black text-white p-3 rounded-md m-4">
          {languageOptions.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
        {/* Sign In button */}
        <button className="button">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
