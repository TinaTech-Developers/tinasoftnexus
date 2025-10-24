"use client";
import { useState, useMemo } from "react";
import LeadKpiCard from "./components/LeadKpiCard";
import LeadsFilter from "./components/LeadsFilter";
import BulkActions from "./components/BulkActions";
import LeadsTable from "./components/LeadsTable";
import Charts from "./components/Charts";
import AddLeadModal from "./components/AddLeadModal";
import EditLeadModal from "./components/EditLeadModal";
import DeleteLeadModal from "./components/DeleteLeadModal";

const initialLeads = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    source: "Website",
    status: "New",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    source: "LinkedIn",
    status: "Contacted",
  },
  {
    id: 3,
    name: "Mark Lee",
    email: "mark@example.com",
    source: "Referral",
    status: "Closed",
  },
  {
    id: 4,
    name: "Sophie Kim",
    email: "sophie@example.com",
    source: "Website",
    status: "Follow-up",
  },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState(initialLeads);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState({ open: false, lead: null });
  const [modalDelete, setModalDelete] = useState({ open: false, lead: null });

  // Filtered leads
  const filteredLeads = useMemo(() => {
    return leads.filter(
      (l) =>
        (l.name.toLowerCase().includes(search.toLowerCase()) ||
          l.email.toLowerCase().includes(search.toLowerCase())) &&
        (filterStatus ? l.status === filterStatus : true)
    );
  }, [leads, search, filterStatus]);

  // KPIs
  const kpis = [
    {
      title: "Total Leads",
      value: leads.length,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "New Leads",
      value: leads.filter((l) => l.status === "New").length,
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Contacted",
      value: leads.filter((l) => l.status === "Contacted").length,
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Closed",
      value: leads.filter((l) => l.status === "Closed").length,
      gradient: "from-rose-500 to-rose-700",
    },
  ];

  // Add lead
  const handleAddLead = (newLead) => {
    setLeads([{ id: Date.now(), ...newLead }, ...leads]);
    setModalAdd(false);
  };

  // Edit lead
  const handleEditLead = (updatedLead) => {
    setLeads(leads.map((l) => (l.id === updatedLead.id ? updatedLead : l)));
    setModalEdit({ open: false, lead: null });
  };

  // Delete lead
  const handleDeleteLead = (leadId) => {
    setLeads(leads.filter((l) => l.id !== leadId));
    setModalDelete({ open: false, lead: null });
    setSelectedIds(selectedIds.filter((id) => id !== leadId));
  };

  // Bulk delete
  const handleBulkDelete = () => {
    setLeads(leads.filter((l) => !selectedIds.includes(l.id)));
    setSelectedIds([]);
  };

  // Bulk update status
  const handleBulkStatusUpdate = (status) => {
    setLeads(
      leads.map((l) => (selectedIds.includes(l.id) ? { ...l, status } : l))
    );
    setSelectedIds([]);
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <LeadKpiCard key={i} {...kpi} />
        ))}
      </div>

      {/* Filter/Search */}
      <LeadsFilter
        searchValue={search}
        setSearchValue={setSearch}
        onAddLead={() => setModalAdd(true)}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      {/* Bulk Actions */}
      <BulkActions
        selectedCount={selectedIds.length}
        onDeleteSelected={handleBulkDelete}
        onUpdateStatus={handleBulkStatusUpdate}
      />

      {/* Leads Table */}
      <LeadsTable
        leads={filteredLeads}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        onEditLead={(lead) => setModalEdit({ open: true, lead })}
        onDeleteLead={(lead) => setModalDelete({ open: true, lead })}
      />

      {/* Charts */}
      <Charts leads={leads} />

      {/* Modals */}
      <AddLeadModal
        isOpen={modalAdd}
        onClose={() => setModalAdd(false)}
        onSave={handleAddLead}
      />
      <EditLeadModal
        isOpen={modalEdit.open}
        lead={modalEdit.lead}
        onClose={() => setModalEdit({ open: false, lead: null })}
        onSave={handleEditLead}
      />
      <DeleteLeadModal
        isOpen={modalDelete.open}
        leadName={modalDelete.lead?.name}
        onClose={() => setModalDelete({ open: false, lead: null })}
        onConfirm={() => handleDeleteLead(modalDelete.lead.id)}
      />
    </div>
  );
}
