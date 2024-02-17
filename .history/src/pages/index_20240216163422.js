import React from "react";
import "../app/globals.css";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";

export default function HomePage() {
  return (
    <React.Fragment className="h-screen 
    bg-[url("")] 
    bg-no-repeat" >
      <Header />
      <HomeBanner />
    </React.Fragment>
  );
}
