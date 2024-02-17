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
      <div className="text-center p-3">Made with ❤️ by @dev-athar</div>
      <div className="bg-class h-screen bg-cover bg-center">
        <div className="h-full">
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
