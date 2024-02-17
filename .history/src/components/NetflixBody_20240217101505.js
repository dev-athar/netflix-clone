// NetflixBody.js

import React, { useState } from "react";

const NetflixBody = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mx-auto p-20 bg-black text-white">
      <div className="mb-4 ">
        <h2 className="text-4xl font-bold mb-2">Enjoy on your TV</h2>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
        <img src="tv.png" alt="tv" />
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
          <li
            onClick={() => toggleExpand("whatIsNetflix")}
            className="cursor-pointer"
          >
            <span className="font-bold">What is Netflix?</span>
            {isExpanded.whatIsNetflix && (
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
          <li
            onClick={() => toggleExpand("howMuchDoesItCost")}
            className="cursor-pointer"
          >
            <span className="font-bold">How much does Netflix cost?</span>
            {isExpanded.howMuchDoesItCost && (
              <p className="mt-2">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.
              </p>
            )}
          </li>
          <li
            onClick={() => toggleExpand("whereCanIWatch")}
            className="cursor-pointer"
          >
            <span className="font-bold">Where can I watch?</span>
            {isExpanded.whereCanIWatch && (
              <p className="mt-2">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favorite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </p>
            )}
          </li>
          <li
            onClick={() => toggleExpand("howDoICancel")}
            className="cursor-pointer"
          >
            <span className="font-bold">How do I cancel?</span>
            {isExpanded.howDoICancel && (
              <p className="mt-2">
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NetflixBody;
