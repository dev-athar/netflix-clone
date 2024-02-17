import React from "react";
import "../app/globals.css";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";

export default function HomePage() {
  return (
    <React.Fragment>
      <div
        className="h-screen 
    bg-[url(header-image.png)] 
    bg-no-repeat"
      >
        <Header />
        <HomeBanner />
      </div>
    </React.Fragment>
  );
}
