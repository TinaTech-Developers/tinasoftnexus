"use client";

import { useState } from "react";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@tinasoftnexus.co.zw",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    // Here you would call API to save profile
  };

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </form>
  );
}
