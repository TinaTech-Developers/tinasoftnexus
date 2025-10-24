"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Trash2, Edit2 } from "lucide-react";
import Link from "next/link";

// Dummy data for demonstration
const dummyTickets = [
  {
    id: "1",
    customer: "John Doe",
    email: "john@example.com",
    phone: "123456789",
    subject: "Cannot login",
    description: "I can't log into my account.",
    staff: "Admin",
    status: "Open",
    date: "2025-10-13",
  },
  {
    id: "2",
    customer: "Jane Smith",
    email: "jane@example.com",
    phone: "987654321",
    subject: "Software bug",
    description: "The app crashes on start.",
    staff: "Staff",
    status: "Pending",
    date: "2025-10-12",
  },
];

export default function TicketViewPage() {
  const { id } = useParams();
  const router = useRouter();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Replace this with real API call
    const found = dummyTickets.find((t) => t.id === id);
    setTicket(found);
  }, [id]);

  if (!ticket) return <p className="p-6">Loading ticket details...</p>;

  return (
    <div className="p-6 space-y-6">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-blue-600 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="bg-white dark:bg-[#0b2545] rounded-2xl p-6 shadow-lg space-y-4">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-[#0b2545] dark:text-white">
            {ticket.subject}
          </h1>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
              <Edit2 className="w-4 h-4" /> Edit
            </button>
            <button className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-200">
          <div>
            <strong>Customer:</strong> {ticket.customer}
          </div>
          <div>
            <strong>Email:</strong> {ticket.email}
          </div>
          <div>
            <strong>Phone:</strong> {ticket.phone}
          </div>
          <div>
            <strong>Assigned Staff:</strong> {ticket.staff}
          </div>
          <div>
            <strong>Status:</strong>{" "}
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                ticket.status === "Closed"
                  ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                  : ticket.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100"
                  : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
              }`}
            >
              {ticket.status}
            </span>
          </div>
          <div>
            <strong>Date:</strong> {ticket.date}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-lg mb-2">Description</h2>
          <p className="text-gray-700 dark:text-gray-200">
            {ticket.description}
          </p>
        </div>

        {/* Comments section */}
        <div className="mt-4">
          <h2 className="font-semibold text-lg mb-2">Comments</h2>
          <div className="space-y-2">
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <strong>Admin:</strong> We are looking into your issue.
              <div className="text-xs text-gray-500">2025-10-13 09:15</div>
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <strong>John Doe:</strong> Thank you!
              <div className="text-xs text-gray-500">2025-10-13 09:20</div>
            </div>
          </div>

          <form className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder="Add comment..."
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
