import React from "react";
import "../app/globals.css";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="bg-class ">
        <Header />
        <HomeBanner />
      </div>
    </React.Fragment>
  );
}
