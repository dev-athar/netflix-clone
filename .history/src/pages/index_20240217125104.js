import React from "react";
import "../app/globals.css";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import NetflixBody from "@/components/NetflixBody";
import NetflixFooter from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="bg-class h-screen bg-cover bg-center backdrop-blur-md">
        <div className="h-full bg-gradient-to-r from-black via-transparent to-black">
          <Header />
          <HomeBanner />
        </div>
        <NetflixBody />
        <FAQ />
        <NetflixFooter />
      </div>
    </React.Fragment>
  );
}
