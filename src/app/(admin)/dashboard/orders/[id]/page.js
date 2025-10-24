"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ViewOrderPage() {
  const { id } = useParams();
  const router = useRouter();

  // Dummy data for now
  const order = {
    id: id,
    service: "Hardware Repair",
    customer: "John Doe",
    email: "john.doe@example.com",
    phone: "0771234567",
    status: "Pending",
    date: "2025-10-13",
    details:
      "Laptop not powering on. Needs urgent repair.\nAdditional note: customer prefers after 2 PM.",
    assignedTo: "Technician: Mike Thompson",
    priority: "High",
  };

  // Color coding for status
  const statusColors = {
    Pending:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
    Completed:
      "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
    Cancelled: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Orders
      </button>

      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-lg flex justify-between items-center"
      >
        <div>
          <h1 className="text-2xl font-bold">{order.service} Order</h1>
          <p className="mt-1 text-sm opacity-80">{order.customer}</p>
        </div>
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            statusColors[order.status]
          }`}
        >
          {order.status}
        </span>
      </motion.div>

      {/* Details Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <div className="bg-white dark:bg-[#0b2545] p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
            Full Name
          </h3>
          <p className="mt-1 text-gray-800 dark:text-gray-100">
            {order.customer}
          </p>
        </div>

        <div className="bg-white dark:bg-[#0b2545] p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
            Email
          </h3>
          <p className="mt-1 text-gray-800 dark:text-gray-100">{order.email}</p>
        </div>

        <div className="bg-white dark:bg-[#0b2545] p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
            Phone
          </h3>
          <p className="mt-1 text-gray-800 dark:text-gray-100">{order.phone}</p>
        </div>

        <div className="bg-white dark:bg-[#0b2545] p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
            Date
          </h3>
          <p className="mt-1 text-gray-800 dark:text-gray-100">{order.date}</p>
        </div>

        <div className="sm:col-span-2 bg-white dark:bg-[#0b2545] p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
            Additional Details
          </h3>
          <p className="mt-1 text-gray-800 dark:text-gray-100 whitespace-pre-line">
            {order.details}
          </p>
        </div>

        <div className="bg-white dark:bg-[#0b2545] p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
            Assigned To
          </h3>
          <p className="mt-1 text-gray-800 dark:text-gray-100">
            {order.assignedTo}
          </p>
        </div>

        <div className="bg-white dark:bg-[#0b2545] p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-gray-500 dark:text-gray-300 font-semibold">
            Priority
          </h3>
          <p className="mt-1 text-gray-800 dark:text-gray-100">
            {order.priority}
          </p>
        </div>
      </motion.div>

      {/* Optional Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-3"
      >
        <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition shadow">
          Edit Order
        </button>
        <button className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition shadow">
          Delete Order
        </button>
      </motion.div>
    </div>
  );
}
