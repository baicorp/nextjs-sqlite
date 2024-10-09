import React from "react";

export default function Loading() {
  return (
    <div className="w-4 h-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle
          transform="rotate(0)"
          // transformOrigin="center"
          fill="none"
          stroke="#000"
          strokeWidth="15"
          strokeLinecap="round"
          strokeDasharray="230 1000"
          strokeDashoffset="0"
          cx="100"
          cy="100"
          r="70"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0"
            to="360"
            dur="2"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
}
