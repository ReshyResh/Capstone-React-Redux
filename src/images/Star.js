import React from "react";

const Star = () => {
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="frame2"
    >
      <g id="Frame 1" clip-path="url(#clip0)">
        <path
          id="star"
          d="M100.5 3L112.961 38.5856H153.284L120.662 60.5788L133.122 96.1644L100.5 74.1712L67.8779 96.1644L80.3384 60.5788L47.7164 38.5856H88.0395L100.5 3Z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="200" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Star;
