"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

export default function AnalyticsCharts({
  visitorsData,
  ordersData,
  leadsData,
}) {
  const [activeTab, setActiveTab] = useState("Visitors");
  const [dateRange, setDateRange] = useState("This Week");

  const tabs = ["Visitors", "Orders", "Leads"];
  const dateOptions = ["Today", "This Week", "This Month"];
  const COLORS = ["#2563eb", "#0b2545", "#6366f1", "#4f46e5", "#60a5fa"];

  return (
    <div className="bg-white dark:bg-[#0b2545] rounded-2xl shadow-lg p-5 space-y-4">
      {/* Date Range Selector */}
      <div className="flex justify-end gap-3">
        {dateOptions.map((option) => (
          <button
            key={option}
            onClick={() => setDateRange(option)}
            className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${
              dateRange === option
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold rounded-t-xl transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab + dateRange}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "Visitors" && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visitorsData}>
              <XAxis dataKey="day" stroke="#0b2545" />
              <YAxis stroke="#0b2545" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        )}

        {activeTab === "Orders" && (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersData}>
              <XAxis dataKey="day" stroke="#0b2545" />
              <YAxis stroke="#0b2545" />
              <Tooltip />
              <Bar dataKey="orders" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}

        {activeTab === "Leads" && (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadsData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#2563eb"
                label
              >
                {leadsData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </motion.div>
    </div>
  );
}
