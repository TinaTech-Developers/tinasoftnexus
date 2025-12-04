"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function CloudComputingCallToAction() {
  const [formOpen, setFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      details: e.target.details.value,
    };

    emailjs
      .send(
        "service_360amfd", // ✔️ your EmailJS Service ID
        "template_jp91x36", // ✔️ your Template ID
        formData,
        "xlsV0b9q84sM-rKdh" // ✔️ your EmailJS Public Key
      )
      .then(
        () => {
          alert("Request submitted! We will contact you soon.");
          setFormOpen(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send request. Please try again.");
        }
      );
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
      </section>

      {/* Modal Form */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-xl font-semibold mb-4">
              Schedule a Free Cloud Consultation
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
                  Project Details
                </label>
                <textarea
                  name="details"
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  placeholder="Tell us about your cloud goals (optional)"
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
