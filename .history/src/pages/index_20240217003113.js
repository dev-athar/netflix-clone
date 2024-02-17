import React from "react";
import "../app/globals.css";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import List from "@/components/List";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="bg-class h-screen bg-cover bg-center">
        <div className="h-full bg-gradient-to-r from-black via-transparent to-black">
          <Header />
          <HomeBanner />
          <List />
        </div>
      </div>
    </React.Fragment>
  );
}
