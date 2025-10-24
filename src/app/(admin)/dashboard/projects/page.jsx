"use client";
import { useState, useMemo } from "react";
import ProjectKpiCard from "./components/ProjectKpiCard";
import ProjectsFilter from "./components/ProjectsFilter";
import ProjectsTable from "./components/ProjectsTable";
import ProjectsCharts from "./components/ProjectsCharts";
import AddProjectModal from "./components/AddProjectModal";
import DeleteProjectModal from "./components/DeleteProjectModal";
import EditProjectModal from "./components/EditProjectModal";
import BulkProjectActions from "./components/BulkProjectActions";

const initialProjects = [
  {
    id: 1,
    name: "Website Redesign",
    team: "Design",
    status: "Active",
    deadline: "2025-10-30",
  },
  {
    id: 2,
    name: "Mobile App",
    team: "Development",
    status: "Delayed",
    deadline: "2025-10-20",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    team: "Marketing",
    status: "Completed",
    deadline: "2025-10-10",
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState({ open: false, project: null });
  const [modalDelete, setModalDelete] = useState({
    open: false,
    project: null,
  });

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (p) =>
        (p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.team.toLowerCase().includes(search.toLowerCase())) &&
        (filterStatus ? p.status === filterStatus : true)
    );
  }, [projects, search, filterStatus]);

  const kpis = [
    {
      title: "Total Projects",
      value: projects.length,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Active",
      value: projects.filter((p) => p.status === "Active").length,
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Completed",
      value: projects.filter((p) => p.status === "Completed").length,
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Delayed",
      value: projects.filter((p) => p.status === "Delayed").length,
      gradient: "from-rose-500 to-rose-700",
    },
  ];

  // Handlers
  const handleAddProject = (newProject) => {
    setProjects([{ id: Date.now(), ...newProject }, ...projects]);
    setModalAdd(false);
  };
  const handleEditProject = (updatedProject) => {
    setProjects(
      projects.map((p) => (p.id === updatedProject.id ? updatedProject : p))
    );
    setModalEdit({ open: false, project: null });
  };
  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((p) => p.id !== projectId));
    setModalDelete({ open: false, project: null });
    setSelectedIds(selectedIds.filter((id) => id !== projectId));
  };
  const handleBulkDelete = () => {
    setProjects(projects.filter((p) => !selectedIds.includes(p.id)));
    setSelectedIds([]);
  };
  const handleBulkStatusUpdate = (status) => {
    setProjects(
      projects.map((p) => (selectedIds.includes(p.id) ? { ...p, status } : p))
    );
    setSelectedIds([]);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <ProjectKpiCard key={i} {...kpi} />
        ))}
      </div>

      <ProjectsFilter
        searchValue={search}
        setSearchValue={setSearch}
        onAddProject={() => setModalAdd(true)}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      <BulkProjectActions
        selectedCount={selectedIds.length}
        onDeleteSelected={handleBulkDelete}
        onUpdateStatus={handleBulkStatusUpdate}
      />

      <ProjectsTable
        projects={filteredProjects}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        onEditProject={(p) => setModalEdit({ open: true, project: p })}
        onDeleteProject={(p) => setModalDelete({ open: true, project: p })}
      />

      <ProjectsCharts projects={projects} />

      <AddProjectModal
        isOpen={modalAdd}
        onClose={() => setModalAdd(false)}
        onSave={handleAddProject}
      />
      <EditProjectModal
        isOpen={modalEdit.open}
        project={modalEdit.project}
        onClose={() => setModalEdit({ open: false, project: null })}
        onSave={handleEditProject}
      />
      <DeleteProjectModal
        isOpen={modalDelete.open}
        projectName={modalDelete.project?.name}
        onClose={() => setModalDelete({ open: false, project: null })}
        onConfirm={() => handleDeleteProject(modalDelete.project.id)}
      />
    </div>
  );
}
