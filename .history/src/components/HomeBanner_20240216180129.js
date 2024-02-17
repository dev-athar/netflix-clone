import React from "react";

export default function HomeBanner() {
  return (
    <div className="justify-center">
      <div className=" text-white ">
        <h1 className="text-5xl" data-uia="hero-title">
          Unlimited movies, TV shows and more.
        </h1>
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
