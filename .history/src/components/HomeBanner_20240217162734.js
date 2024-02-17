import React from "react";

export default function HomeBanner() {
  return (
    <div className="grid place-items-center">
      <div className="text-center">
        <p className="text-white text-3xl font-bold m-3" data-uia="hero-title">
          Unlimited movies, TV shows and more.
        </p>
        <p
          className="text-white text-md m-3"
          data-uia="our-story-card-subtitle"
        >
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-white text-l">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="">
        <input
          type="text"
          className=" w-96 opacity-75 bg-black border border-white text-sm rounded-sm p-2.5 m-2 text-white"
          placeholder="Email Address"
        />
        <button className="button">Get Started</button>
      </div>
      <div className="shadow"></div>
    </div>
  );
}
