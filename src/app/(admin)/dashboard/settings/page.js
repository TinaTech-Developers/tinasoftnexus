"use client";
import { useState } from "react";
import ProfileSettings from "./components/ProfileSettings";
import SecuritySettings from "./components/SecuritySettings";
import PreferencesSettings from "./components/PreferencesSettings";
import UsersSettings from "./components/UsersSettings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = ["Profile", "Security", "Preferences", "Users"];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#0b2545]">Admin Settings</h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold rounded-t-lg transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-[#0b2545] rounded-2xl shadow-lg p-6">
        {activeTab === "Profile" && <ProfileSettings />}
        {activeTab === "Security" && <SecuritySettings />}
        {activeTab === "Preferences" && <PreferencesSettings />}
        {activeTab === "Users" && <UsersSettings />}
      </div>
    </div>
  );
}
