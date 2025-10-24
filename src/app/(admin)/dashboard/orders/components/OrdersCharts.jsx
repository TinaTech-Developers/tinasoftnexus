"use client";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

export default function OrdersCharts({ orders }) {
  const statusData = [
    {
      name: "Pending",
      value: orders.filter((o) => o.status === "Pending").length,
    },
    {
      name: "Completed",
      value: orders.filter((o) => o.status === "Completed").length,
    },
    {
      name: "Cancelled",
      value: orders.filter((o) => o.status === "Cancelled").length,
    },
  ];

  const COLORS = ["#fbbf24", "#34d399", "#f87171"];

  return (
    <div className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl shadow-sm h-64">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Orders Status Distribution
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={statusData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            label
          >
            {statusData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
