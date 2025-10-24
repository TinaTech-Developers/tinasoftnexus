import Link from "next/link";

export default function OrdersTable({
  orders,
  selectedIds,
  setSelectedIds,
  onEdit,
  onDelete,
}) {
  const toggleSelect = (id) => {
    setSelectedIds(
      selectedIds.includes(id)
        ? selectedIds.filter((i) => i !== id)
        : [...selectedIds, id]
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border-collapse">
        <thead className="bg-[#0b2545] text-white">
          <tr>
            <th className="p-3">
              <input
                type="checkbox"
                checked={
                  selectedIds.length === orders.length && orders.length > 0
                }
                onChange={(e) =>
                  e.target.checked
                    ? setSelectedIds(orders.map((o) => o.id))
                    : setSelectedIds([])
                }
              />
            </th>
            {["service", "customer", "email", "status", "date"].map((key) => (
              <th key={key} className="p-3 text-left">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const rowClasses = [
              "border-b",
              "transition",
              "hover:bg-gray-50",
              "dark:hover:bg-white/5",
            ];
            if (order.isNew) {
              rowClasses.push(
                "bg-blue-50 dark:bg-blue-900 font-semibold" // highlight new orders
              );
            }

            return (
              <tr key={order.id} className={rowClasses.join(" ")}>
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(order.id)}
                    onChange={() => toggleSelect(order.id)}
                  />
                </td>
                <td className="p-3">{order.service}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.email}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100"
                        : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3">{order.date}</td>
                <td className="p-3 flex gap-2">
                  <Link
                    href={`/dashboard/orders/${order.id}`}
                    className="px-3 py-1 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => onEdit(order)}
                    className="px-3 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(order)}
                    className="px-3 py-1 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          {orders.length === 0 && (
            <tr>
              <td
                colSpan={8}
                className="text-center p-4 text-gray-500 dark:text-gray-300"
              >
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
