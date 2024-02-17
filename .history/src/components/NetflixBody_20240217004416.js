// NetflixBody.js

import React, { useState } from "react";

const NetflixBody = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Enjoy on your TV</h2>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">
          Download your shows to watch offline
        </h2>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Stranger Things</h2>
        <p>Downloading...</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Watch everywhere</h2>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Create profiles for kids</h2>
        <p>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Frequently Asked Questions</h2>
        <ul>
          <li onClick={toggleExpand} className="cursor-pointer">
            <span className="font-bold">What is Netflix?</span>
            {isExpanded && (
              <p className="mt-2">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want without a single commercial
                – all for one low monthly price. There's always something new to
                discover and new TV shows and movies are added every week!
              </p>
            )}
          </li>
          {/* More FAQ items go here */}
        </ul>
      </div>
    </div>
  );
};

export default NetflixBody;
