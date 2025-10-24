"use client";

import { useState } from "react";

export default function SecuritySettings() {
  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSecurity({ ...security, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (security.newPassword !== security.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Security settings updated successfully!");
    // Call API to save
  };

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Current Password
        </label>
        <input
          type="password"
          name="currentPassword"
          value={security.currentPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          New Password
        </label>
        <input
          type="password"
          name="newPassword"
          value={security.newPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Confirm New Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={security.confirmPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Update Password
      </button>
    </form>
  );
}
