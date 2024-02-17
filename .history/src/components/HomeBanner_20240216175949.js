import React from "react";
import "../styles/HomeBanner.module.css";

export default function HomeBanner() {
  return (
    <div className="">
      <div className=" text-white flex-row">
        <div className="justify-right" data-uia="hero-title">
          Unlimited movies, TV shows and more.
        </div>
        <h2 className="" data-uia="our-story-card-subtitle">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="">
          <input type="text" className="" placeholder="Email Address" />
          <button className="">Get Started</button>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
}
