"use client";
import { useState, useMemo } from "react";

import OrdersFilter from "./components/OrdersFilter";
import OrdersTable from "./components/OrdersTable";
import AddOrderModal from "./components/AddOrderModal";
import EditOrderModal from "./components/EditOrderModal";
import DeleteOrderModal from "./components/DeleteOrderModal";
import BulkOrderActions from "./components/BulkOrderActions";
import OrdersCharts from "./components/OrdersCharts";
import OrderKpiCard from "./components/OrderKpiCard";

const services = [
  "Web Development",
  "Software Development",
  "Networking",
  "CCTV Installation",
  "IT Consulting",
  "Hardware Repair",
  "Cloud Computing",
];

const initialOrders = [
  {
    id: 1,
    service: "Web Development",
    customer: "John Doe",
    email: "john@example.com",
    phone: "0771234567",
    status: "Pending",
    date: "2025-10-13",
  },
  {
    id: 2,
    service: "Hardware Repair",
    customer: "Jane Smith",
    email: "jane@example.com",
    phone: "0779876543",
    status: "Completed",
    date: "2025-10-10",
  },
  {
    id: 3,
    service: "Web Dev",
    customer: "Alice",
    email: "a@x.com",
    status: "Pending",
    date: "2025-10-13",
    isNew: true,
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState({ open: false, order: null });
  const [modalDelete, setModalDelete] = useState({ open: false, order: null });

  const filteredOrders = useMemo(() => {
    return orders.filter(
      (o) =>
        (o.customer.toLowerCase().includes(search.toLowerCase()) ||
          o.service.toLowerCase().includes(search.toLowerCase())) &&
        (filterStatus ? o.status === filterStatus : true)
    );
  }, [orders, search, filterStatus]);

  const kpis = [
    {
      title: "Total Orders",
      value: orders.length,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Pending",
      value: orders.filter((o) => o.status === "Pending").length,
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Completed",
      value: orders.filter((o) => o.status === "Completed").length,
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Cancelled",
      value: orders.filter((o) => o.status === "Cancelled").length,
      gradient: "from-rose-500 to-rose-700",
    },
  ];

  // Handlers
  const handleAddOrder = (newOrder) => {
    setOrders([{ id: Date.now(), ...newOrder }, ...orders]);
    setModalAdd(false);
  };
  const handleEditOrder = (updatedOrder) => {
    setOrders(orders.map((o) => (o.id === updatedOrder.id ? updatedOrder : o)));
    setModalEdit({ open: false, order: null });
  };
  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((o) => o.id !== orderId));
    setModalDelete({ open: false, order: null });
    setSelectedIds(selectedIds.filter((id) => id !== orderId));
  };
  const handleBulkDelete = () => {
    setOrders(orders.filter((o) => !selectedIds.includes(o.id)));
    setSelectedIds([]);
  };
  const handleBulkStatusUpdate = (status) => {
    setOrders(
      orders.map((o) => (selectedIds.includes(o.id) ? { ...o, status } : o))
    );
    setSelectedIds([]);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <OrderKpiCard key={i} {...kpi} />
        ))}
      </div>

      <OrdersFilter
        searchValue={search}
        setSearchValue={setSearch}
        onAddOrder={() => setModalAdd(true)}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      <BulkOrderActions
        selectedCount={selectedIds.length}
        onDeleteSelected={handleBulkDelete}
        onUpdateStatus={handleBulkStatusUpdate}
      />

      <OrdersTable
        orders={filteredOrders}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        onEdit={(o) => setModalEdit({ open: true, order: o })}
        onDelete={(o) => setModalDelete({ open: true, order: o })}
      />

      <OrdersCharts orders={orders} />

      <AddOrderModal
        isOpen={modalAdd}
        onClose={() => setModalAdd(false)}
        onSave={handleAddOrder}
        services={services}
      />
      <EditOrderModal
        isOpen={modalEdit.open}
        order={modalEdit.order}
        onClose={() => setModalEdit({ open: false, order: null })}
        onSave={handleEditOrder}
        services={services}
      />
      <DeleteOrderModal
        isOpen={modalDelete.open}
        orderName={modalDelete.order?.customer}
        onClose={() => setModalDelete({ open: false, order: null })}
        onConfirm={() => handleDeleteOrder(modalDelete.order.id)}
      />
    </div>
  );
}
