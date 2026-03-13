"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete product");
      setProducts(products.filter((p) => p._id !== id));
      setFilteredProducts(filteredProducts.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  // Search handler
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.category.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link
          href="/dashboard/products/new"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          + Add New Product
        </Link>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or category..."
          value={search}
          onChange={handleSearch}
          className="w-full md:w-1/3 border p-2 rounded"
        />
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && filteredProducts.length > 0 && (
        <div className="overflow-x-auto border border-white/20 rounded-lg">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-black/20">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Thumbnail
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Category
                </th>
                <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">
                  Price
                </th>
                <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">
                  Stock
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">
                  Featured
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredProducts.map((product) => (
                <tr key={product._id} className="hover:bg-white/5 transition">
                  <td className="px-4 py-2">
                    <img
                      src={
                        product.thumbnail ||
                        product.images[0] ||
                        "/placeholder.png"
                      }
                      alt={product.name}
                      className="h-12 w-12 object-contain rounded"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-600 font-thin text-sm">
                    {product.name}
                  </td>
                  <td className="px-4 py-2 text-gray-600 font-thin text-sm">
                    {product.category}
                  </td>
                  <td className="px-4 py-2 text-right text-gray-600 font-thin text-sm">
                    ${product.price}
                  </td>
                  <td className="px-4 py-2 text-right text-gray-600 font-thin text-sm">
                    {product.stock}
                  </td>
                  <td className="px-4 py-2 text-center font-thin text-sm">
                    {product.isFeatured ? "★" : "-"}
                  </td>
                  <td className="px-4 py-2 flex justify-center gap-2">
                    <Link
                      href={`/dashboard/products/${product._id}/edit`}
                      className="bg-blue-600 text-white px-3 py-1 rounded font-thin text-sm hover:bg-blue-700"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded font-thin text-sm hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <p className="text-gray-400 mt-4">No products found.</p>
      )}
    </div>
  );
}
