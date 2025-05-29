"use client";

import { useState } from "react";

export default function CloudComputingCallToAction() {
  const [formOpen, setFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted! We will contact you soon.");
    setFormOpen(false);
  };

  return (
    <>
      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-blue-100 to-white py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Future-Proof Your Business with Cloud Technology
          </h2>
          <p className="text-md md:text-lg text-gray-700 mb-8">
            Unlock the power of cloud computing with TinaSoft Nexus. From
            migration and infrastructure setup to DevOps and cost optimization,
            we provide scalable, secure, and future-ready cloud solutions.
          </p>
          <button
            onClick={() => setFormOpen(true)}
            className="relative inline-block text-sm md:text-lg font-medium border border-blue-900 text-blue-900 px-6 py-3 overflow-hidden group z-10 transition-all duration-300 rounded-md hover:text-white"
          >
            <span className="absolute inset-0 w-full h-full bg-blue-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10">
              Schedule a Free Cloud Consultation
            </span>
          </button>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-sky-200 rounded-full opacity-20 blur-2xl -z-10 animate-pulse"></div>
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
              Schedule a Free Cloud Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="details">
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your cloud goals or current infrastructure (optional)"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
