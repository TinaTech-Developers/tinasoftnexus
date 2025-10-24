"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CreateTicketModal({ onClose, onCreate }) {
  const [form, setForm] = useState({
    customer: "",
    subject: "",
    staff: "",
    status: "Open",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ ...form, id: Date.now() });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
        className="bg-white dark:bg-[#0b2545] rounded-lg max-w-md w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-4">Create Ticket</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Customer Name"
            required
            value={form.customer}
            onChange={(e) => setForm({ ...form, customer: e.target.value })}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
          />
          <input
            type="text"
            placeholder="Subject"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
          />
          <input
            type="text"
            placeholder="Assign Staff"
            value={form.staff}
            onChange={(e) => setForm({ ...form, staff: e.target.value })}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
          />
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
          >
            <option>Open</option>
            <option>Pending</option>
            <option>Closed</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Create Ticket
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
