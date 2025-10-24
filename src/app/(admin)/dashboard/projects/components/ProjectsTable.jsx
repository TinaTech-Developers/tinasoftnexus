"use client";
import { useState } from "react";

export default function ProjectsTable({
  projects,
  selectedIds,
  setSelectedIds,
  onEditProject,
  onDeleteProject,
}) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const toggleSelect = (id) => {
    if (selectedIds.includes(id))
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    else setSelectedIds([...selectedIds, id]);
  };

  const toggleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc")
      direction = "desc";
    setSortConfig({ key, direction });
  };

  const sortedProjects = [...projects].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border-collapse">
        <thead className="bg-[#0b2545] text-white">
          <tr>
            <th className="p-3">
              <input
                type="checkbox"
                checked={
                  selectedIds.length === projects.length && projects.length > 0
                }
                onChange={(e) =>
                  e.target.checked
                    ? setSelectedIds(projects.map((p) => p.id))
                    : setSelectedIds([])
                }
              />
            </th>
            {["name", "team", "status", "deadline"].map((key) => (
              <th
                key={key}
                className="p-3 text-left font-medium cursor-pointer"
                onClick={() => toggleSort(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
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
          {sortedProjects.map((project) => (
            <tr
              key={project.id}
              className="border-b hover:bg-gray-50 dark:hover:bg-white/5 transition"
            >
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(project.id)}
                  onChange={() => toggleSelect(project.id)}
                />
              </td>
              <td className="p-3">{project.name}</td>
              <td className="p-3">{project.team}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                      : project.status === "Active"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100"
                      : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
                  }`}
                >
                  {project.status}
                </span>
              </td>
              <td className="p-3">{project.deadline}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => onEditProject(project)}
                  className="px-3 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteProject(project)}
                  className="px-3 py-1 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {sortedProjects.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="text-center p-4 text-gray-500 dark:text-gray-300"
              >
                No projects found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
