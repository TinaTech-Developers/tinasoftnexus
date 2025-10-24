"use client";
import Link from "next/link";

export default function TicketsTable({ tickets, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border-collapse mt-4">
        <thead className="bg-[#0b2545] text-white">
          <tr>
            {[
              "ID",
              "Customer",
              "Subject",
              "Staff",
              "Status",
              "Date",
              "Actions",
            ].map((h) => (
              <th key={h} className="p-3 text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              className={`border-b hover:shadow-md transition rounded-lg ${
                ticket.status === "Open" ? "bg-blue-50 dark:bg-blue-900/20" : ""
              }`}
            >
              <td className="p-3">{ticket.id}</td>
              <td className="p-3">{ticket.customer}</td>
              <td className="p-3">{ticket.subject}</td>
              <td className="p-3">{ticket.staff}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    ticket.status === "Closed"
                      ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                      : ticket.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100"
                      : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="p-3">{ticket.date}</td>
              <td className="p-3 flex gap-2">
                <Link
                  href={`/dashboard/tickets/${ticket.id}`}
                  className="px-3 py-1 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs"
                >
                  View
                </Link>
                <button
                  onClick={() => onDelete(ticket)}
                  className="px-3 py-1 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
