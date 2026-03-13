"use client";

import { useEffect, useState } from "react";

import OrdersKPI from "./_components/OrdersKPI";
import OrdersTable from "./_components/OrdersTable";
import OrdersFilters from "./_components/OrdersFilters";
import OrderDetailsDrawer from "./_components/OrderDetailsDrawer";
import OrdersCharts from "./_components/OrdersCharts";

export default function ShopOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    const res = await fetch("/api/orders");
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter((o) => {
    const searchMatch =
      o.customer?.name?.toLowerCase().includes(search.toLowerCase()) ||
      o.customer?.email?.toLowerCase().includes(search.toLowerCase()) ||
      o.orderId?.toLowerCase().includes(search.toLowerCase());

    const statusMatch = statusFilter ? o.status === statusFilter : true;

    return searchMatch && statusMatch;
  });

  const handleDelete = async (id) => {
    if (!confirm("Delete this order?")) return;

    await fetch(`/api/orders/${id}`, { method: "DELETE" });

    fetchOrders();
  };

  const handleStatusUpdate = async (id, status) => {
    await fetch(`/api/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    fetchOrders();
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Shop Orders</h1>
        <p className="text-sm text-gray-500">Manage ecommerce orders</p>
      </div>

      <OrdersKPI orders={orders} />

      <OrdersFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <OrdersTable
        orders={filteredOrders}
        onDelete={handleDelete}
        onView={setSelectedOrder}
        onStatusUpdate={handleStatusUpdate}
      />

      <OrdersCharts orders={orders} />

      <OrderDetailsDrawer
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </div>
  );
}
