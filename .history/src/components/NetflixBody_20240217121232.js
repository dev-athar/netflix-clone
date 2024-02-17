// NetflixBody.js

import React, { useRef, useEffect } from "react";

const NetflixBody = () => {
  // Ref to access the video element
  const videoRef = useRef(null);

  // Function to handle looping behavior
  const handleVideoLoop = () => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        videoRef.current.play(); // Restart the video when it ends
      });
    }
  };

  // Effect to handle looping behavior when component mounts
  useEffect(() => {
    handleVideoLoop();
  }, []);
  return (
    <div className="w-full mx-auto p-20 bg-black text-white text-center">
      <div className="mb-4 ">
        <h2 className="text-3xl font-bold mb-4">Enjoy on your TV</h2>
        <p className="text-lg">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
        <video className="w-full" autoPlay>
          <source src="video-tv-0819.m4v" type="video/mp4" />
        </video>
        <img className=" pb-20 m-auto" src="tv.png" alt="tv" />
      </div>
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-4">
          Download your shows to watch offline
        </h2>
        <p className="text-lg">
          Save your favorites easily and always have something to watch.
        </p>
        <img className="p-0 pb-20 m-auto" src="mobile-0819.jpg" alt="mobile" />
      </div>

      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-4">Watch everywhere</h2>
        <p className="text-lg pb-20">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className="mb-4 pt-10">
        <h2 className="text-3xl font-bold mb-6">Create profiles for kids</h2>
        <p className="text-lg mb-6">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
        <img className="p-0 m-auto" src="kids.png" alt="Kids" />
      </div>
    </div>
  );
};

export default NetflixBody;
