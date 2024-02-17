import React from "react";
import "../app/globals.css";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="bg-class h-screen bg-cover bg-center">
        <div className="bg-gradient-to-r from-black  to-black" z-20>
          .
          <Header />
          <HomeBanner />
        </div>
      </div>
    </React.Fragment>
  );
}
