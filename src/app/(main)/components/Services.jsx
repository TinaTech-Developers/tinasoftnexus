"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

function Services() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
const servicesData = [
  {
    image: "/coding.jpg",
    heading: "Custom Software Development",
    link: "/services/software",
    description:
      "We design and develop tailor-made software solutions to optimize business processes, increase efficiency, and drive innovation.",
  },
  {
    image: "/mobil.png",
    heading: "Mobile App Development",
    link: "/services/software",
    description:
      "Our team builds high-performance mobile applications for iOS and Android, creating seamless experiences for your users.",
  },
  {
    image: "/consulting.jpg",
    heading: "IT Consulting",
    link: "/services/consulting",
    description:
      "We provide expert guidance to help your business leverage technology strategically, improve operations, and achieve goals.",
  },
  {
    image: "/cctv1.jpeg",
    heading: "CCTV Installation",
    link: "/services/cctv",
    description:
      "Professional CCTV system setup for homes and businesses, ensuring security, monitoring, and peace of mind.",
  },
  {
    image: "/network1.webp",
    heading: "Networking Solutions",
    link: "/services/networking",
    description:
      "We design, implement, and maintain reliable network infrastructures to keep your organization connected and efficient.",
  },
  {
    image: "/hard.jpg",
    heading: "Hardware Maintenance",
    link: "/services/hardware-repair",
    description:
      "Comprehensive maintenance and repair for all your IT hardware, ensuring minimal downtime and maximum performance.",
  },
];

function Service({ image, heading, description, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-xl overflow-hidden shadow-lg bg-white"
    >
      {/* Image with overlay */}
      <div className="relative h-64 w-full group">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
          <h3 className="text-xl font-semibold text-white">{heading}</h3>
        </div>
      </div>

      {/* Content Box */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{heading}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="mt-5 flex justify-center">
          <Button name="More Info" link={link} />
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
