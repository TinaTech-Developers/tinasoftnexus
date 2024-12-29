"use client";
import { useState, useEffect, useRef } from "react";

function OurBelief() {
  // Refs for tracking the divs' positions
  const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [positions, setPositions] = useState([]);

  // Calculate the center position of each div (top center aligned)
  const calculatePositions = () => {
    const newPositions = divRefs.map((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2, // Center X of the div
          y: rect.top, // Position the line at the top of the shape (before translating)
        };
      }
      return { x: 0, y: 0 };
    });
    setPositions(newPositions);
  };

  // Recalculate positions when the component mounts or updates
  useEffect(() => {
    calculatePositions();
    window.addEventListener("resize", calculatePositions); // Recalculate on window resize
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  return (
    <div className="h-full pt-36 bg-cover bg-no-repeat bg-center bg-[url('/bg.avif')] w-full h-scree grid grid-cols-1 md:grid-cols-4 w-ful md:mt-16 gap-10 mx-auto md:h-">
      {/* Dotted string-like curved line */}
      {/* {positions.length > 0 && (
        <svg
          className="hidden md:block absolute -top-20 left-0 right-0 bottom-0 z-0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <path
            d={`M ${positions[0].x} ${positions[0].y - 200} 
              C ${positions[0].x + 100} ${positions[0].y - 210}, 
                ${positions[1].x - 100} ${positions[1].y - 210}, 
                ${positions[1].x} ${positions[1].y - 200}
              C ${positions[1].x + 100} ${positions[1].y - 200}, 
                ${positions[2].x - 100} ${positions[2].y - 200}, 
                ${positions[2].x} ${positions[2].y - 160}
              C ${positions[2].x + 100} ${positions[2].y - 210}, 
                ${positions[3].x - 100} ${positions[3].y - 210}, 
                ${positions[3].x} ${positions[3].y - 170}`}
            fill="transparent"
            stroke="blue"
            strokeWidth="2"
            strokeDasharray="5,5" // Dotted effect
          />
        </svg>
      )} */}

      {/* First item */}
      <div
        ref={divRefs[0]}
        className="transform transition-transform duration-300 ease-in-out
        translate-y-0 hover:translate-y-[-20px] mx-auto
        flex items-center justify-center w-44 h-44 hover:shadow-2xl bg-blue-950 m-10 rounded-full shadow-xl z-10"
      >
        <div className="w-40 h-40 border-y-4 rounded-full border-x-4 hover:border-blue-500 border-white flex items-center justify-center">
          <p className="text-center text-white text-sm px-2 font-semibold">
            Innovation Drives Growth
          </p>
        </div>
      </div>

      {/* Second item */}
      <div
        ref={divRefs[1]}
        className="transform transition-transform duration-300 ease-in-out
        md:translate-y-[-150px] hover:translate-y-[-170px] mx-auto
        flex items-center justify-center w-44 h-44 hover:shadow-2xl bg-blue-950 m-10 rounded-full shadow-xl z-10 "
      >
        <div className="w-40 h-40 border-y-4 rounded-full border-x-4 hover:border-blue-500 border-white flex items-center justify-center">
          <p className="text-center text-white text-sm px-2 font-semibold">
            Technology should empower, not intimidate
          </p>
        </div>
      </div>

      {/* Third item */}
      <div
        ref={divRefs[2]}
        className="transform transition-transform duration-300 ease-in-out
        translate-y-0 hover:translate-y-[-20px]  mx-auto
        flex items-center justify-center w-44 h-44 hover:shadow-2xl bg-blue-950 m-10 rounded-full shadow-xl z-10"
      >
        <div className="w-40 h-40 border-y-4 rounded-full border-x-4 hover:border-blue-500 border-white flex items-center justify-center">
          <p className="text-center text-white text-sm px-2 font-semibold">
            Customer success is our success
          </p>
        </div>
      </div>

      {/* Fourth item */}
      <div
        ref={divRefs[3]}
        className="transform transition-transform duration-300 ease-in-out
        md:translate-y-[-150px] hover:translate-y-[-170px] mx-auto
        flex items-center justify-center w-44 h-44 hover:shadow-2xl bg-blue-950 m-10 rounded-full shadow-xl z-10"
      >
        <div className="w-40 h-40 border-y-4 rounded-full border-x-4 hover:border-blue-500 border-white flex items-center justify-center">
          <p className="text-center text-white text-sm px-2 font-semibold">
            Digital excellence is just the beginning
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurBelief;
