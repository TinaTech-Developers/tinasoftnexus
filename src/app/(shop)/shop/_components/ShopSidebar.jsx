"use client";

export default function ShopSidebar() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <div>
        <h3 className="font-semibold mb-3">Product Search</h3>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold mb-3">Price Filter</h3>
        <input type="range" className="w-full" />
        <p className="text-sm mt-2">$0 - $3000</p>
      </div>

      {/* Category */}
      <div>
        <h3 className="font-semibold mb-3">Category</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Laptops
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Accessories
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Batteries
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Printers
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Desktops
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Workstations
          </label>
        </div>
      </div>
    </div>
  );
}
