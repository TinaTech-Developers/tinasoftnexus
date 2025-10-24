"use client";
import { useState, useEffect } from "react";

export default function EditProjectModal({ isOpen, project, onClose, onSave }) {
  const [form, setForm] = useState({ ...project });

  useEffect(() => setForm({ ...project }), [project]);

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSave = () => onSave(form);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl w-full max-w-md shadow-lg">
        <h3 className="text-lg font-semibold text-[#0b2545] dark:text-white mb-4">
          Edit Project
        </h3>
        <div className="space-y-3">
          <input
            name="name"
            placeholder="Project Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          />
          <input
            name="team"
            placeholder="Team"
            value={form.team}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          >
            <option>Active</option>
            <option>Completed</option>
            <option>Delayed</option>
          </select>
          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a2e] text-gray-900 dark:text-gray-100"
          />
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
            className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
