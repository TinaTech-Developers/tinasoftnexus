"use client";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";

const contactMethods = [
  {
    id: 1,
    icon: <FaPhoneAlt size={24} />,
    title: "Phone",
    info: "+263 71 247 1209",
    link: "tel:+263712471209",
  },
  {
    id: 2,
    icon: <FaEnvelope size={24} />,
    title: "Email",
    info: "contact@tinasoftnexus.co.zw",
    link: "mailto:contact@tinasoftnexus.co.zw",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt size={24} />,
    title: "Address",
    info: "4942 Springvale Park, Harare, Zimbabwe",
    link: "https://www.google.com/maps/place/4942+Springvale+Park,+Harare,+Zimbabwe",
  },
  {
    id: 4,
    icon: <FaComments size={24} />,
    title: "Live Chat",
    info: "Chat with us now",
    link: "#livechat", // replace with your live chat link or handler
  },
];

export default function MultipleContactMethods() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-lg shadow-lg">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12 text-gray-900"
      >
        Get in Touch with Us
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contactMethods.map(({ id, icon, title, info, link }) => (
          <motion.a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: id * 0.15, duration: 0.5 }}
            className="flex items-center gap-4 p-5 border rounded-lg shadow-sm hover:shadow-lg hover:bg-cyan-50 transition cursor-pointer"
          >
            <div className="text-cyan-700">{icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
              <p className="text-gray-600">{info}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
