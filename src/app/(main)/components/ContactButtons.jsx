"use client";
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaComments,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+263712471209", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+263773059753";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Animated Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:bg-gray-800 transition relative"
        animate={{
          y: [0, -10, 0], // bounce up then back down
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <FaComments size={34} />
        <span className="absolute top-1 right-1 bg-white rounded-full p-1 text-[10px] shadow">
          {isOpen ? (
            <FaMinus size={8} color="red" />
          ) : (
            <FaPlus size={8} color="green" />
          )}
        </span>
      </motion.button>

      {/* Animated Contact Buttons */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="whatsapp"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-2"
            >
              <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full shadow">
                Chat on WhatsApp
              </span>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-green-600 transition"
              >
                <FaWhatsapp size={22} />
              </button>
            </motion.div>

            <motion.div
              key="call"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1,
              }}
              className="flex items-center gap-2"
            >
              <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow">
                Call Us
              </span>
              <button
                onClick={handleCallClick}
                className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-blue-600 transition"
              >
                <FaPhone size={20} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactButtons;
