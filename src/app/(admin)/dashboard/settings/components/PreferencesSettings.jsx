"use client";

import { useState } from "react";

export default function PreferencesSettings() {
  const [preferences, setPreferences] = useState({
    darkMode: true,
    emailNotifications: true,
  });

  const togglePreference = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
        <input
          type="checkbox"
          checked={preferences.darkMode}
          onChange={() => togglePreference("darkMode")}
          className="h-5 w-5 accent-blue-600"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-300">
          Email Notifications
        </span>
        <input
          type="checkbox"
          checked={preferences.emailNotifications}
          onChange={() => togglePreference("emailNotifications")}
          className="h-5 w-5 accent-blue-600"
        />
      </div>
    </div>
  );
}
