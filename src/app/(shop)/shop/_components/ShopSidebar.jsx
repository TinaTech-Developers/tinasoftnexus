"use client";

export default function ShopSidebar({
  search,
  setSearch,
  category,
  setCategory,
  price,
  setPrice,
}) {
  const categories = [
    "Laptops",
    "Accessories",
    "Batteries",
    "Laptop LCDs",
    "Laptop Keyboards",
    "Laptop Chargers",
    "Cameras",
    "Audio",
    "Tablets",
    "Smartphones",
    "Printers",
    "Desktops",
    "Workstations",
    "Monitors",
    "Networking",
    "Storage",
    "Software",
    "Peripherals",
    "Gaming",
    "Components",
    "Refurbished",
  ];

  const toggleCategory = (cat) => {
    if (category.includes(cat)) {
      setCategory(category.filter((c) => c !== cat));
    } else {
      setCategory([...category, cat]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Search */}
      <div>
        <h3 className="font-semibold mb-3">Product Search</h3>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold mb-3">Price Filter</h3>

        <input
          type="range"
          min="0"
          max="3000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full"
        />

        <p className="text-sm mt-2">$0 - ${price}</p>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Category</h3>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={category.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
