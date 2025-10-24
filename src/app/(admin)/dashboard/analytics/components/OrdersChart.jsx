import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function OrdersChart({ data }) {
  return (
    <div className="bg-white dark:bg-[#0b2545] p-5 rounded-2xl shadow-lg">
      <h3 className="text-gray-800 dark:text-gray-100 font-semibold mb-4">
        Orders This Week
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#0b2545" />
          <YAxis stroke="#0b2545" />
          <Tooltip />
          <Bar dataKey="orders" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
