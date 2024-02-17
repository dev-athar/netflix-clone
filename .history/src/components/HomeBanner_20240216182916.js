import React from "react";

export default function HomeBanner() {
  return (
    <div className="">
      <div className="flex justify-right text-white ">
        <p className="text-3xl font-bold" data-uia="hero-title">
          Unlimited movies, TV shows and more.
        </p>
        <p className="text-md" data-uia="our-story-card-subtitle">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-l">
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