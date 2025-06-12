"use client";

import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { IoSendSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const inputVariants = {
  focused: { scale: 1.03, boxShadow: "0 0 8px rgba(14, 165, 233, 0.6)" },
  unfocused: { scale: 1, boxShadow: "none" },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 15px rgba(14, 165, 233, 0.8)" },
  tap: { scale: 0.95 },
};

function EmailAndAddress() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    setSubmitting(true);

    emailjs
      .sendForm(
        "service_buyh98n",
        "template_jp91x36",
        form.current,
        "xlsV0b9q84sM-rKdh"
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.error(error);
        }
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 px-6 bg-white min-h-[600px]">
      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#f9fafb] p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-extrabold text-blue-900 mb-6 text-center">
          Leave a Message
        </h2>

        {/* Name */}
        <motion.div
          className="mb-5"
          animate={isFocused.name ? "focused" : "unfocused"}
          variants={inputVariants}
          transition={{ duration: 0.3 }}
        >
          <label
            htmlFor="name"
            className="block mb-1 font-semibold text-gray-800"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setIsFocused((prev) => ({ ...prev, name: true }))}
            onBlur={() => setIsFocused((prev) => ({ ...prev, name: false }))}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          className="mb-5"
          animate={isFocused.email ? "focused" : "unfocused"}
          variants={inputVariants}
          transition={{ duration: 0.3 }}
        >
          <label
            htmlFor="email"
            className="block mb-1 font-semibold text-gray-800"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused((prev) => ({ ...prev, email: true }))}
            onBlur={() => setIsFocused((prev) => ({ ...prev, email: false }))}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          className="mb-6"
          animate={isFocused.message ? "focused" : "unfocused"}
          variants={inputVariants}
          transition={{ duration: 0.3 }}
        >
          <label
            htmlFor="message"
            className="block mb-1 font-semibold text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsFocused((prev) => ({ ...prev, message: true }))}
            onBlur={() => setIsFocused((prev) => ({ ...prev, message: false }))}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 resize-none focus:outline-none"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={submitting}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="relative w-full flex items-center justify-center gap-3 bg-blue-900 text-white font-semibold py-3 rounded-md shadow-md focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          ) : (
            <>
              Send <IoSendSharp size={20} />
            </>
          )}
        </motion.button>

        <ToastContainer position="bottom-center" autoClose={4000} />
      </motion.form>

      {/* Location & Map */}
      <motion.div
        className="rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <h2 className="hidden md:block text-2xl font-extrabold text-white bg-blue-900 p-4 text-center">
          Where to Find Us
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d18530.83543145598!2d31.21995007509659!3d-17.879762481393296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4942%20springvale%20park%20harare!5e0!3m2!1sen!2szw!4v1747921791442!5m2!1sen!2szw"
          width="100%"
          height="100%"
          className="min-h-[400px] w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default EmailAndAddress;
