"use client";
import { useState } from "react";

export default function AddLeadModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    source: "",
    status: "New",
  });

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    onSave(form);
    setForm({ name: "", email: "", source: "", status: "New" });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl w-full max-w-md shadow-lg">
        <h3 className="text-lg font-semibold text-[#0b2545] dark:text-white mb-4">
          Add New Lead
        </h3>
        <div className="space-y-3">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          />
          <input
            name="source"
            placeholder="Source"
            value={form.source}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          >
            <option>New</option>
            <option>Contacted</option>
            <option>Follow-up</option>
            <option>Closed</option>
          </select>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
