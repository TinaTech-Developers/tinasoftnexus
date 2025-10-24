"use client";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function Charts({ leads }) {
  const statusData = [
    { name: "New", value: leads.filter((l) => l.status === "New").length },
    {
      name: "Contacted",
      value: leads.filter((l) => l.status === "Contacted").length,
    },
    {
      name: "Follow-up",
      value: leads.filter((l) => l.status === "Follow-up").length,
    },
    {
      name: "Closed",
      value: leads.filter((l) => l.status === "Closed").length,
    },
  ];

  const sourceData = Object.entries(
    leads.reduce((acc, l) => {
      acc[l.source] = (acc[l.source] || 0) + 1;
      return acc;
    }, {})
  ).map(([source, value]) => ({ source, value }));

  const trendData = leads
    .map((l, i) => ({ day: `Day ${i + 1}`, leads: 1 }))
    .reduce((acc, l) => {
      const last = acc[acc.length - 1];
      if (last) acc.push({ day: l.day, leads: last.leads + 1 });
      else acc.push(l);
      return acc;
    }, []);

  const COLORS = ["#7aa2ff", "#facc15", "#34d399", "#f87171"];

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
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-[#0b2545] p-6 rounded-2xl shadow-sm h-64">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Leads per Source
        </h3>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={sourceData}
              dataKey="value"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={60}
              label
            >
              {sourceData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
