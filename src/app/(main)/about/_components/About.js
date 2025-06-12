"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AboutInfo() {
  const slides = [
    {
      image: "/pngwing.com.png",
      description:
        "Empowering communities by enabling digital access and cloud computing.",
      fullDescription:
        "We are committed to empowering communities by enabling equitable digital access and harnessing the transformative power of cloud computing. By bridging the digital divide, we provide individuals, organizations, and underserved populations with the tools, infrastructure, and knowledge needed to participate fully in the digital economy. Through scalable, cloud-based solutions, we foster innovation, enhance access to essential services, and create new opportunities for education, entrepreneurship, and social development. Our approach ensures that no community is left behind in the digital age.",
    },
    {
      image: "/hand.webp",
      description: "Empowering Communities with the Touch of Technology",
      fullDescription:
        "Use of modern digital tools and innovations to enhance the lives of people within a community by improving access to education, communication, economic opportunities, and essential services. By integrating technology thoughtfully, communities gain the resources and connectivity needed to foster growth, inclusion, and resilience, enabling individuals to actively participate in and shape their own development and future",
    },
    {
      image: "/whiteh.webp",
      description: "Secure, scalable and socially impactful tech.",
      fullDescription:
        " Refers to technology solutions—including CCTV and alarm system setups, alongside our custom-developed software systems—that ensure strong security and data protection (secure), can efficiently expand to meet growing needs (scalable), and deliver meaningful benefits to communities by enhancing safety, connectivity, and overall quality of life (socially impactful).",
    },
    {
      image: "/phonee.png",
      description: "Mobile Application Development",
      fullDescription:
        "Our mobile app development service focuses on creating high-quality, user-friendly apps tailored to meet the unique needs of our clients and their audiences. Whether for Android, iOS, or cross-platform solutions, we specialize in building intuitive, responsive, and feature-rich mobile applications that enhance user engagement and streamline business operations. From concept and design to deployment and maintenance, we ensure every app is crafted with precision, performance, and purpose—helping businesses and communities stay connected and competitive in today’s digital world.",
    },
    {
      image: "/hardware.png",
      description: "Hardware Maintanance and Support",
      fullDescription:
        "At Tinasoft Nexus, our Hardware Maintenance and Support service is dedicated to keeping your computer systems running efficiently and reliably. We offer regular check-ups, repairs, upgrades, and responsive technical support to minimize downtime and extend the life of your hardware. With a proactive and professional approach, we help ensure your business stays productive by maintaining the performance and stability of your essential computer infrastructure.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-4 gap-4 md:mt-20">
      {/* Left: Image with animated description overlay */}
      <div className="col-span-1 h-80 md:h-96 relative overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={slides[currentIndex].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex}`}
              fill
              quality={100}
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Caption over image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="absolute bottom-4 left-4 right-4 bg-blue-950/80 text-white p-4 rounded-xl text-sm md:text-base w-[45%]"
            >
              {slides[currentIndex].description}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: Full Description Text */}
      <div className="col-span-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].fullDescription}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            className="text-gray-800 text-base md:text-lg"
          >
            {slides[currentIndex].fullDescription}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AboutInfo;
