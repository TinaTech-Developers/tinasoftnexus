"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuotationForm() {
  const router = useRouter();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const [items, setItems] = useState([{ description: "", price: 0, qty: 1 }]);

  const addItem = () => {
    setItems([...items, { description: "", price: 0, qty: 1 }]);
  };

  const removeItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const updateItem = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const total = subtotal;

  const handleSubmit = async () => {
    const res = await fetch("/api/quotations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName,
        customerPhone,
        items,
        subtotal,
        total,
      }),
    });

    const data = await res.json();

    router.push(`/dashboard/quotations/${data._id}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <input
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          placeholder="Customer Phone"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Service</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td className="border p-2">
                <input
                  value={item.description}
                  onChange={(e) => updateItem(i, "description", e.target.value)}
                  className="w-full outline-none"
                />
              </td>

              <td className="border p-2">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    updateItem(i, "price", Number(e.target.value))
                  }
                  className="w-full outline-none"
                />
              </td>

              <td className="border p-2">
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => updateItem(i, "qty", Number(e.target.value))}
                  className="w-full outline-none"
                />
              </td>

              <td className="border p-2 text-right">{item.price * item.qty}</td>

              <td className="p-2">
                <button onClick={() => removeItem(i)} className="text-red-600">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addItem} className="bg-gray-200 px-4 py-2 rounded">
        + Add Service
      </button>

      <div className="flex justify-end">
        <div className="w-64">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{subtotal}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>{total}</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Save Quotation
      </button>
    </div>
  );
}
