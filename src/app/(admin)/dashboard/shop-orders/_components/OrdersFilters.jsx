export default function OrdersFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="flex flex-wrap gap-4 bg-white p-4 rounded-xl shadow border">
      <input
        placeholder="Search order or customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-lg text-sm w-full md:w-64"
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border px-4 py-2 rounded-lg text-sm"
      >
        <option value="">All Status</option>
        <option>Pending</option>
        <option>Pending Payment</option>
        <option>Processing</option>
        <option>Shipped</option>
        <option>Delivered</option>
        <option>Cancelled</option>
      </select>
    </div>
  );
}
