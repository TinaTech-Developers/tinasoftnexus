"use client";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const visitorsData = [
  { day: "Mon", visits: 400 },
  { day: "Tue", visits: 600 },
  { day: "Wed", visits: 800 },
  { day: "Thu", visits: 750 },
  { day: "Fri", visits: 900 },
  { day: "Sat", visits: 650 },
  { day: "Sun", visits: 700 },
];

const leadsSourceData = [
  { source: "Website", leads: 40 },
  { source: "LinkedIn", leads: 20 },
  { source: "Referral", leads: 15 },
  { source: "Email", leads: 10 },
];

const leads = [
  {
    name: "John Doe",
    email: "john@example.com",
    source: "Website",
    status: "New",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    source: "LinkedIn",
    status: "Contacted",
  },
  {
    name: "Mark Lee",
    email: "mark@example.com",
    source: "Referral",
    status: "Closed",
  },
  {
    name: "Sophie Kim",
    email: "sophie@example.com",
    source: "Website",
    status: "Follow-up",
  },
  {
    name: "Chris Evans",
    email: "chris@example.com",
    source: "Email",
    status: "Closed",
  },
];

export default function DashboardPage() {
  const cards = [
    { title: "Visitors", value: "1,240", color: "from-blue-500 to-blue-700" },
    { title: "Leads", value: "58", color: "from-indigo-500 to-indigo-700" },
    { title: "Orders", value: "19", color: "from-cyan-500 to-cyan-700" },
    { title: "Projects", value: "7", color: "from-sky-500 to-sky-700" },
    {
      title: "Support Tickets",
      value: "14",
      color: "from-rose-500 to-rose-700",
    },
    {
      title: "Revenue",
      value: "$12,480",
      color: "from-emerald-500 to-emerald-700",
    },
  ];

  return (
    <motion.div
      className="space-y-8 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">
        {cards.map((kpi, i) => (
          <motion.div
            key={i}
            className={`p-6 rounded-2xl shadow-sm bg-gradient-to-r ${kpi.color} text-white`}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h3 className="text-sm opacity-80">{kpi.title}</h3>
            <p className="text-3xl font-semibold mt-2">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Visitors Trend */}
        <motion.div
          className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl shadow-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Visitors Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visitorsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="day" stroke="#888" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#7aa2ff"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Leads by Source */}
        <motion.div
          className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl shadow-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-4">Leads by Source</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadsSourceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="leads" fill="#7aa2ff" radius={6} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* RECENT LEADS TABLE */}
      <motion.div
        className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl shadow-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold mb-4">Recent Leads</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-[#0b2545] text-white">
              <tr>
                <th className="p-3 font-medium">Name</th>
                <th className="p-3 font-medium">Email</th>
                <th className="p-3 font-medium">Source</th>
                <th className="p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 dark:hover:bg-white/5 transition"
                >
                  <td className="p-3">{lead.name}</td>
                  <td className="p-3">{lead.email}</td>
                  <td className="p-3">{lead.source}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lead.status === "Closed"
                          ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                          : lead.status === "New"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100"
                          : lead.status === "Contacted"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
