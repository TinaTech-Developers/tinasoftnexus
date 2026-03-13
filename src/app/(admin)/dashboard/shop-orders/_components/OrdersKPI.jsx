import { Package, DollarSign, Clock, CheckCircle } from "lucide-react";

export default function OrdersKPI({ orders }) {
  const revenue = orders.reduce((a, b) => a + b.total, 0);

  const cards = [
    {
      title: "Orders",
      value: orders.length,
      icon: Package,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Revenue",
      value: `$${revenue}`,
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Pending",
      value: orders.filter((o) => o.status === "Pending").length,
      icon: Clock,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Completed",
      value: orders.filter((o) => o.status === "Delivered").length,
      icon: CheckCircle,
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((c, i) => {
        const Icon = c.icon;

        return (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow border flex justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm">{c.title}</p>
              <p className="text-xl font-semibold">{c.value}</p>
            </div>

            <div className={`p-3 rounded-lg ${c.color}`}>
              <Icon size={18} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
