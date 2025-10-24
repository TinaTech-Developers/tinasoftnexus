"use client";
import { Search } from "lucide-react";

export default function ProjectsFilter({
  searchValue,
  setSearchValue,
  onAddProject,
  filterStatus,
  setFilterStatus,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center bg-white dark:bg-[#0b2545] rounded-xl shadow-sm p-2 flex-1">
        <Search className="w-5 h-5 text-gray-500 dark:text-gray-300 mr-2" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        />
      </div>

      <div className="flex gap-2">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0b2545] text-gray-900 dark:text-gray-100"
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Delayed">Delayed</option>
        </select>
        <button
          onClick={onAddProject}
          className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Add Project
        </button>
      </div>
    </div>
  );
}
