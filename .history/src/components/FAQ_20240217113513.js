import React, { useState } from "react";

export default function FAQ() {
  const [expandedSegment, setExpandedSegment] = useState(null);

  const toggleExpand = (segment) => {
    if (expandedSegment === segment) {
      setExpandedSegment(null);
    } else {
      setExpandedSegment(segment);
    }
  };

  return (
    <div className="w-full mx-auto p-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <ul className="">
        <li onClick={() => toggleExpand("whatIsNetflix")} className="p-2">
          <p className="faq-title">What is Netflix?</p>
          {expandedSegment === "whatIsNetflix" && (
            <p className="faq-description">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </p>
          )}
        </li>
        <li
          onClick={() => toggleExpand("howMuchDoesItCost")}
          className="cursor-pointer"
        >
          <p className="faq-title">How much does Netflix cost?</p>
          {expandedSegment === "howMuchDoesItCost" && (
            <p className="faq-description">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              USD 2.99 to USD 9.99 a month. No extra costs, no contracts.
            </p>
          )}
        </li>
        <li
          onClick={() => toggleExpand("whereCanIWatch")}
          className="cursor-pointer"
        >
          <p className="faq-title">Where can I watch?</p>
          {expandedSegment === "whereCanIWatch" && (
            <p className="faq-description">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </p>
          )}
        </li>
        <li
          onClick={() => toggleExpand("howDoICancel")}
          className="cursor-pointer"
        >
          <p className="faq-title">How do I cancel?</p>
          {expandedSegment === "howDoICancel" && (
            <p className="faq-description">
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          )}
        </li>
      </ul>
    </div>
  );
}
