"use client";

import { useEffect, useState } from "react";
import ProductCard from "./banner/ProductCard";

export default function ProductListing({ search, category, price }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ NEW: pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 3x3 grid

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // ✅ FILTER
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category.length === 0 || category.includes(product.category);

    const matchPrice = product.price <= price;

    return matchSearch && matchCategory && matchPrice;
  });

  // ✅ RESET PAGE WHEN FILTER CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, price]);

  // ✅ PAGINATION LOGIC
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  if (loading) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
        <div className="flex justify-center items-center py-20">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      {displayProducts.length === 0 ?
        <p className="text-gray-500 py-10 text-center">No products found.</p>
      : <>
          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {displayProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* ✅ PAGINATION UI */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-3">
              {/* PREV */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                «
              </button>

              {/* PAGE NUMBERS */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full border ${
                      currentPage === page ?
                        "bg-blue-950 text-white"
                      : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              {/* NEXT */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                »
              </button>
            </div>
          )}
        </>
      }
    </section>
  );
}
