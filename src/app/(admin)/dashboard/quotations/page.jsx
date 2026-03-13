"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function QuotationsPage() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("/api/quotations")
      .then((res) => res.json())
      .then(setQuotes);
  }, []);

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Quotations</h1>

        <Link
          href="/admin/quotations/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Quotation
        </Link>
      </div>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Quote</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>

        <tbody>
          {quotes.map((q) => (
            <tr key={q._id}>
              <td className="border p-2">
                <Link
                  href={`/admin/quotations/${q._id}`}
                  className="text-blue-600"
                >
                  {q.quoteNumber}
                </Link>
              </td>

              <td className="border p-2">{q.customerName}</td>

              <td className="border p-2">{q.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
