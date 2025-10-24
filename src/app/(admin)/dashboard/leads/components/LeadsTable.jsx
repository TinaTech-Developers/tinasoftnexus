"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LeadsTable({
  leads,
  selectedIds,
  setSelectedIds,
  onEditLead,
  onDeleteLead,
}) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedLeads = [...leads].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto"
    >
      <table className="min-w-full text-sm border-collapse">
        <thead className="bg-[#0b2545] text-white">
          <tr>
            <th className="p-3 text-left font-medium">
              <input
                type="checkbox"
                checked={
                  selectedIds.length === leads.length && leads.length > 0
                }
                onChange={(e) => {
                  if (e.target.checked) setSelectedIds(leads.map((l) => l.id));
                  else setSelectedIds([]);
                }}
              />
            </th>
            {["name", "email", "source", "status"].map((key) => (
              <th
                key={key}
                className="p-3 text-left font-medium cursor-pointer"
                onClick={() => toggleSort(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
                {sortConfig.key === key
                  ? sortConfig.direction === "asc"
                    ? " ▲"
                    : " ▼"
                  : ""}
              </th>
            ))}
            <th className="p-3 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeads.map((lead) => (
            <tr
              key={lead.id}
              className="border-b hover:bg-gray-50 dark:hover:bg-white/5 transition"
            >
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(lead.id)}
                  onChange={() => toggleSelect(lead.id)}
                />
              </td>
              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.email}</td>
              <td className="p-3">{lead.source}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    lead.status === "Closed"
                      ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                      : lead.status === "New"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100"
                      : lead.status === "Contacted"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100"
                  }`}
                >
                  {lead.status}
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => onEditLead(lead)}
                  className="px-3 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteLead(lead)}
                  className="px-3 py-1 rounded-xl bg-red-500 hover:bg-red-600 text-white transition text-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {sortedLeads.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="text-center p-4 text-gray-500 dark:text-gray-300"
              >
                No leads found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  );
}
