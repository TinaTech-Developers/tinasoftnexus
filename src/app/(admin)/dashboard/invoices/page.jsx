"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function QuotationsPage() {
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchQuotes = async () => {
    const res = await fetch("/api/invoices");
    const data = await res.json();
    setQuotes(data);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  // Delete quotation
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Delete this quotation?");
    if (!confirmDelete) return;

    await fetch(`/api/quotations/${id}`, {
      method: "DELETE",
    });

    fetchQuotes();
  };

  const filteredQuotes = quotes.filter(
    (q) =>
      q.quoteNumber?.toLowerCase().includes(search.toLowerCase()) ||
      q.customerName?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Invoices</h1>

        {/* <Link
          href="/dashboard/quotations/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Quotation
        </Link> */}
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search quotation..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded w-full max-w-md"
      />

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-start">Invoice</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Total</th>
            <th className="border p-2 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredQuotes.length === 0 ?
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-500">
                No quotations found
              </td>
            </tr>
          : filteredQuotes.map((q) => (
              <tr key={q._id}>
                <td className="border p-2">
                  <Link
                    href={`/dashboard/invoices/${q._id}`}
                    className="text-blue-600 "
                  >
                    {q.invoiceNumber}
                  </Link>
                </td>

                <td className="border p-2 text-center">{q.customerName}</td>

                <td className="border p-2 text-center">${q.total}</td>

                {/* ACTIONS */}
                <td className="border p-2">
                  <div className="flex justify-center gap-3">
                    <Link
                      href={`/dashboard/invoices/${q._id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-xs"
                    >
                      View
                    </Link>

                    <button
                      onClick={() =>
                        window.open(`/dashboard/invoices/${q._id}`, "_blank")
                      }
                      className="bg-green-600 text-white px-3 py-1 rounded text-xs"
                    >
                      PDF
                    </button>

                    <button
                      onClick={() => handleDelete(q._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
