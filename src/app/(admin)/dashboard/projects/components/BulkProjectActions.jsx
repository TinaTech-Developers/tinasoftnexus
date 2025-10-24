"use client";

export default function BulkProjectActions({
  selectedCount,
  onDeleteSelected,
  onUpdateStatus,
}) {
  if (selectedCount === 0) return null;

  return (
    <div className="flex gap-2 p-2 bg-gray-100 dark:bg-white/10 rounded-xl mb-4">
      <span className="text-gray-700 dark:text-gray-200">
        {selectedCount} selected
      </span>
      <button
        onClick={onDeleteSelected}
        className="px-3 py-1 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
      >
        Delete
      </button>
      <select
        onChange={(e) => onUpdateStatus(e.target.value)}
        className="px-3 py-1 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0b2545] text-gray-900 dark:text-gray-100"
      >
        <option value="">Change Status</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
        <option value="Delayed">Delayed</option>
      </select>
    </div>
  );
}
