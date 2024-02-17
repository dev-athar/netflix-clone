import React from "react";
import "../styles/HomeBanner.module.css";

export default function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="our-story">
        <h1 className="text-" data-uia="hero-title">
          Unlimited movies, TV shows and more.
        </h1>
        <h2
          className="our-story-card-subtitle"
          data-uia="our-story-card-subtitle"
        >
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="email-form-title">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
          />
          <button className="input-group-button btn-danger text-white">
            Get Started
          </button>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="bg" src="header-image.png" alt=""></img>
    </div>
  );
}
