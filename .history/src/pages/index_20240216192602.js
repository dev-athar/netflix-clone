import React from "react";
import "../app/globals.css";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="bg-class h-screen bg-cover bg-center">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <Header />
        <HomeBanner />
      </div>
    </React.Fragment>
  );
}
