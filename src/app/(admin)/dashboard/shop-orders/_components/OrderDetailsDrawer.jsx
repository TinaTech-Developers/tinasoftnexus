"use client";

import StatusBadge from "./StatusBadge";

export default function OrderDetailsDrawer({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
      <div className="bg-white w-[450px] h-full p-6 overflow-y-auto">
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-semibold">Order {order.orderId}</h2>

          <button onClick={onClose}>✕</button>
        </div>

        {/* CUSTOMER */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Customer</h3>

          <p>{order.customer?.name}</p>
          <p className="text-sm text-gray-500">{order.customer?.email}</p>
          <p className="text-sm text-gray-500">{order.customer?.phone}</p>
        </div>

        {/* STATUS */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Status</h3>
          <StatusBadge status={order.status} />
        </div>

        {/* ITEMS */}
        <div>
          <h3 className="font-medium mb-3">Items</h3>

          {order.items.map((item, i) => (
            <div key={i} className="flex justify-between border-b py-3">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>

              <p>${item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="mt-6 flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${order.total}</span>
        </div>
      </div>
    </div>
  );
}
