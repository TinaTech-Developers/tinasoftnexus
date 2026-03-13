import { Eye, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function OrdersTable({
  orders,
  onDelete,
  onView,
  onStatusUpdate,
}) {
  return (
    <div className="bg-white rounded-xl shadow border">
      {/* SCROLL CONTAINER */}
      <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
        <table className="min-w-full text-sm">
          {/* STICKY HEADER */}
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 text-left">Order</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Items</th>
              <th className="px-6 py-4 text-left">Total</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{order.orderId}</td>

                <td className="px-6 py-4">
                  <div>{order.customer?.name}</div>
                  <div className="text-xs text-gray-500">
                    {order.customer?.email}
                  </div>
                </td>

                <td className="px-6 py-4">{order.items?.length} items</td>

                <td className="px-6 py-4 font-medium">${order.total}</td>

                <td className="px-6 py-4 space-y-1">
                  <StatusBadge status={order.status} />

                  <select
                    value={order.status}
                    onChange={(e) => onStatusUpdate(order._id, e.target.value)}
                    className="border text-xs rounded px-2 py-1"
                  >
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 flex justify-end gap-3">
                  <button
                    onClick={() => onView(order)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(order._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
