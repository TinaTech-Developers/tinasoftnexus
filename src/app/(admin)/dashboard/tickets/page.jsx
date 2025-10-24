"use client";
import { useState } from "react";
import TicketStatsCards from "./components/TicketStatsCards";
import TicketsTable from "./components/TicketsTable";
import CreateTicketModal from "./components/CreateTicketModal";
import DeleteTicketModal from "./components/DeleteTicketModal";

// Dummy data for demonstration
const dummyTickets = [
  {
    id: 1,
    customer: "John Doe",
    subject: "Cannot login",
    staff: "Admin",
    status: "Open",
    date: "2025-10-13",
  },
  {
    id: 2,
    customer: "Jane Smith",
    subject: "Software bug",
    staff: "Staff",
    status: "Pending",
    date: "2025-10-12",
  },
  {
    id: 3,
    customer: "Mark Lee",
    subject: "Request feature",
    staff: "Manager",
    status: "Closed",
    date: "2025-10-10",
  },
];

export default function TicketsPage() {
  const [tickets, setTickets] = useState(dummyTickets);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [deleteTicket, setDeleteTicket] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.customer.toLowerCase().includes(search.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || ticket.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold text-[#0b2545]">Support Tickets</h1>
        <button
          onClick={() => setCreateModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
        >
          + New Ticket
        </button>
      </div>

      {/* Stats Cards */}
      <TicketStatsCards tickets={tickets} />

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-[#1f2a44] dark:text-white"
        >
          <option>All</option>
          <option>Open</option>
          <option>Pending</option>
          <option>Closed</option>
        </select>
      </div>

      {/* Tickets Table */}
      <TicketsTable
        tickets={filteredTickets}
        onDelete={setDeleteTicket}
        highlightNew={(status) => status === "Open"} // Highlight open tickets
      />

      {/* Modals */}
      {createModalOpen && (
        <CreateTicketModal
          onClose={() => setCreateModalOpen(false)}
          onCreate={(ticket) => setTickets([ticket, ...tickets])}
        />
      )}
      {deleteTicket && (
        <DeleteTicketModal
          ticket={deleteTicket}
          onClose={() => setDeleteTicket(null)}
          onDelete={() =>
            setTickets(tickets.filter((t) => t.id !== deleteTicket.id))
          }
        />
      )}
    </div>
  );
}
