
import React, { useState } from "react";

export default function FAQ() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return <div>FAQ</div>;
}
