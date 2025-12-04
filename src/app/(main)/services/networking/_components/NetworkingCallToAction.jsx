"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function NetworkingCallToAction() {
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      details: e.target.details.value,
    };

    try {
      await emailjs.send(
        "service_360amfd", // ✔️ your EmailJS Service ID
        "template_jp91x36", // ✔️ your Template ID
        formData,
        "xlsV0b9q84sM-rKdh" // ✔️ your EmailJS Public Key
      );

      alert("Request submitted successfully! We will contact you soon.");
      setFormOpen(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send request. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-100 to-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Empower Your Network. Secure Your Future.
          </h2>
          <p className="text-md md:text-lg text-gray-700 mb-8">
            Whether you need a faster network, better security, or 24/7
            monitoring, TinaSoft Nexus delivers tailored networking solutions
            that keep your business connected and protected.
          </p>
          <button
            onClick={() => setFormOpen(true)}
            className="relative inline-block text-sm md:text-lg font-medium border border-blue-900 text-blue-900 px-6 py-3 overflow-hidden group z-10 transition-all duration-300 rounded-md hover:text-white"
          >
            <span className="absolute inset-0 w-full h-full bg-blue-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10">
              Request a Free Network Assessment
            </span>
          </button>
        </div>

        <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-100 rounded-full opacity-30 blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-20 blur-2xl -z-10 animate-pulse"></div>
      </section>

      {/* Modal Form */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              aria-label="Close form"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Request a Free Network Assessment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  name="details"
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Tell us more about your needs (optional)"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
