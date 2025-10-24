"use client";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function ProjectsCharts({ projects }) {
  const statusData = [
    {
      name: "Active",
      value: projects.filter((p) => p.status === "Active").length,
    },
    {
      name: "Completed",
      value: projects.filter((p) => p.status === "Completed").length,
    },
    {
      name: "Delayed",
      value: projects.filter((p) => p.status === "Delayed").length,
    },
  ];

  const teamData = Object.entries(
    projects.reduce((acc, p) => {
      acc[p.team] = (acc[p.team] || 0) + 1;
      return acc;
    }, {})
  ).map(([team, value]) => ({ team, value }));

  const COLORS = ["#7aa2ff", "#34d399", "#f87171"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl shadow-sm h-64">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Status Distribution
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
      <div className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl shadow-sm h-64">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Projects per Team
        </h3>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={teamData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="team" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#7aa2ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
