import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

export default function VisitorsChart({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-[#0b2545] p-5 rounded-2xl shadow-lg"
    >
      <h3 className="text-gray-800 dark:text-gray-100 font-semibold mb-4">
        Visitors Trend
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
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
    </motion.div>
  );
}
