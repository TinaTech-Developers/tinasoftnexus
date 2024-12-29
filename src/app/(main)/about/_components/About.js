import Image from "next/image";
import React, { useState, useEffect } from "react";

function AboutInfo() {
  // Array of image sources
  const images = [
    "/roboto.png", // Replace with actual image URLs
    "/robot.png",
    "/ai.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animatingOut, setAnimatingOut] = useState(false); // Track the "closing" animation state
  const [animatingIn, setAnimatingIn] = useState(false); // Track the "opening" animation state

  // Set up the interval to switch images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!animatingOut && !animatingIn) {
        setAnimatingOut(true); // Trigger the "closing" animation for current image
        setTimeout(() => {
          // After the current image has finished closing, change the image
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          setAnimatingOut(false); // End "closing" animation
          setAnimatingIn(true); // Start "opening" animation for new image
        }, 5000); // Wait for the "closing" animation to finish (5s)
      }
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, [animatingOut, animatingIn, images.length]);

  // Reset animation state after the "opening" animation completes
  useEffect(() => {
    if (animatingIn) {
      setTimeout(() => {
        setAnimatingIn(false); // End "opening" animation after 5s
      }, 5000);
    }
  }, [animatingIn]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-4">
      <div className="col-span-1 h-80 md:h-96 relative overflow-hidden">
        {/* Current Image - Closing animation */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            animatingOut ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: animatingOut
              ? "closeEffect 5s ease-out forwards"
              : "none",
          }}
        ></div>

        {/* New Image - Opening animation */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            animatingIn ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${
              images[(currentImageIndex + 1) % images.length]
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: animatingIn ? "openEffect 5s ease-out forwards" : "none",
          }}
        ></div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}

export default AboutInfo;
