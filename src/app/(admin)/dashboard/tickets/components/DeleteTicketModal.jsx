"use client";
import { motion } from "framer-motion";

export default function DeleteTicketModal({ ticket, onClose, onDelete }) {
  if (!ticket) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
        className="bg-white dark:bg-[#0b2545] rounded-lg max-w-md w-full p-6 relative shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-4 text-red-600">
          Delete Ticket
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-200">
          Are you sure you want to delete the ticket{" "}
          <strong>{ticket.subject}</strong> by{" "}
          <strong>{ticket.customer}</strong>? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
