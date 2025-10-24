"use client";
import { Users, ClipboardList, ShoppingCart } from "lucide-react";

export default function TicketStatsCards({ tickets }) {
  const openCount = tickets.filter((t) => t.status === "Open").length;
  const pendingCount = tickets.filter((t) => t.status === "Pending").length;
  const closedCount = tickets.filter((t) => t.status === "Closed").length;

  const cards = [
    {
      title: "Open Tickets",
      value: openCount,
      icon: <ClipboardList className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Pending Tickets",
      value: pendingCount,
      icon: <Users className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Closed Tickets",
      value: closedCount,
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-gradient-to-r ${card.color} text-white rounded-2xl p-5 shadow-lg flex justify-between items-center transition transform hover:scale-105`}
        >
          <div>
            <p className="text-sm opacity-80">{card.title}</p>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
          <div className="bg-white/20 p-3 rounded-full">{card.icon}</div>
        </div>
      ))}
    </div>
  );
}
