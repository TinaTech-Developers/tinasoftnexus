"use client";

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function OrdersCharts({ orders }) {
  const data = {};

  orders.forEach((o) => {
    const date = new Date(o.createdAt).toLocaleDateString();
    data[date] = (data[date] || 0) + o.total;
  });

  const chartData = Object.keys(data).map((date) => ({
    date,
    revenue: data[date],
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow border">
      <h3 className="font-medium mb-4">Revenue</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="date" />
          <Tooltip />
          <Bar dataKey="revenue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
