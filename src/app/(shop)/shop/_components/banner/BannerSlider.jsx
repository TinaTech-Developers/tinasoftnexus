"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SlideItem from "./SlideItem";

export default function BannerSlider({ products }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <AnimatePresence mode="wait">
      <SlideItem key={index} product={products[index]} />
    </AnimatePresence>
  );
}
