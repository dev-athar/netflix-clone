import React, { useEffect, useState } from "react";

export default function FAQ() {
  const [expandedSegment, setExpandedSegment] = useState(null);
  const [iconRotation, setIconRotation] = useState({}); // State to track icon rotation angle

  const toggleExpand = (segment) => {
    if (expandedSegment === segment) {
      setExpandedSegment(null);
      setIconRotation({ ...iconRotation, [segment]: 0 }); // Reset icon rotation angle when segment is collapsed
    } else {
      setExpandedSegment(segment);
      setIconRotation({ ...iconRotation, [segment]: 45 }); // Set icon rotation angle to 180 degrees when segment is expanded
    }
  };

  // Function to generate Tailwind CSS class names dynamically
  const generateClassName = (baseClass, rotation) => {
    return `${baseClass} transform ${
      rotation !== 0 ? `rotate-${rotation}` : ""
    }`;
  };

  return (
    <div className="w-full mx-auto p-20 bg-black text-white text-center pt-0">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <ul className="max-w-4xl m-auto">
        <li onClick={() => toggleExpand("whatIsNetflix")} className="pb-2">
          <div className="faq-title">
            <div>What is Netflix?</div>
            <svg
              className={generateClassName(
                "w-10",
                iconRotation["whatIsNetflix"]
              )}
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
          </div>
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
        {/* Repeat the same pattern for other FAQ segments */}
      </ul>
    </div>
  );
}
