"use client";
import { useState } from "react";

export default function AddOrderModal({ isOpen, onClose, onSave, services }) {
  const [form, setForm] = useState({
    service: services[0],
    customer: "",
    email: "",
    phone: "",
    status: "Pending",
    date: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSave = () => {
    onSave(form);
    setForm({
      service: services[0],
      customer: "",
      email: "",
      phone: "",
      status: "Pending",
      date: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl w-full max-w-md shadow-lg">
        <h3 className="text-lg font-semibold text-[#0b2545] dark:text-white mb-4">
          Add New Order
        </h3>
        <div className="space-y-3">
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          >
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <input
            name="customer"
            placeholder="Customer Name"
            value={form.customer}
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
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          >
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
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
