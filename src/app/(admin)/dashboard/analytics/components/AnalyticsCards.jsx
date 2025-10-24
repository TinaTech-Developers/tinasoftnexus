import {
  Users,
  ShoppingCart,
  ClipboardList,
  Briefcase,
  LifeBuoy,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function AnalyticsCards({ data }) {
  const cards = [
    {
      title: "Visitors",
      value: data.visitors,
      icon: <Users className="w-6 h-6" />,
      trend: 12,
      sparkline: data.visitorsTrend,
    },
    {
      title: "Leads",
      value: data.leads,
      icon: <ClipboardList className="w-6 h-6" />,
      trend: -3,
      sparkline: data.leadsTrend,
    },
    {
      title: "Orders",
      value: data.orders,
      icon: <ShoppingCart className="w-6 h-6" />,
      trend: 8,
      sparkline: data.ordersTrend,
    },
    {
      title: "Projects",
      value: data.projects,
      icon: <Briefcase className="w-6 h-6" />,
      trend: 5,
      sparkline: data.projectsTrend,
    },
    {
      title: "Tickets",
      value: data.tickets,
      icon: <LifeBuoy className="w-6 h-6" />,
      trend: 0,
      sparkline: data.ticketsTrend,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          whileHover={{ scale: 1.03 }}
          className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-2xl p-5 shadow-lg flex flex-col justify-between transition"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">{card.title}</p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">{card.icon}</div>
          </div>

          {/* Mini sparkline */}
          <div className="mt-2 h-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={card.sparkline}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="white"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-2 flex items-center gap-1">
            {card.trend >= 0 ? (
              <ArrowUp className="w-4 h-4 text-green-300" />
            ) : (
              <ArrowDown className="w-4 h-4 text-red-300" />
            )}
            <span className="text-xs opacity-80">
              {Math.abs(card.trend)}%{" "}
              {card.trend >= 0 ? "Increase" : "Decrease"} from last week
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
