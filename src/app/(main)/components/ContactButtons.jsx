"use client";
import React, { useState, useEffect } from "react";
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

  // ✅ Load Chatwoot script dynamically
  useEffect(() => {
    (function (d, t) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: "RXjKGqQmk7pC6cZAuRWhU41J", // your token
          baseUrl: BASE_URL,
        });

        // ✅ Force hide default Chatwoot launcher
        const style = document.createElement("style");
        style.innerHTML = `
          #chatwoot_launcher,
          #launcher-frame,
          .woot-widget-bubble {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
        `;
        document.head.appendChild(style);
      };
    })(document, "script");
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+263712471209", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+263773059753";
  };

  const handleChatwootClick = () => {
    if (window.$chatwoot) {
      window.$chatwoot.toggle("open");
    }
  };

  return (
    <div className="fixed bottom-12 right-4 z-50 flex flex-col items-end gap-3">
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:bg-gray-800 transition relative"
        animate={{
          y: [0, -10, 0], // bounce animation
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

      {/* Sub buttons when open */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Chatwoot */}
            <motion.div
              key="chatwoot"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-2"
            >
              <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full shadow">
                Live Chat
              </span>
              <button
                onClick={handleChatwootClick}
                className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-purple-600 transition"
              >
                <FaComments size={22} />
              </button>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              key="whatsapp"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.05,
              }}
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

            {/* Call */}
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
