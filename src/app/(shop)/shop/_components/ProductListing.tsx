"use client";

import { useEffect, useState } from "react";
import ProductCard from "./banner/ProductCard";

export default function ProductListing({ search, category, price }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category.length === 0 || category.includes(product.category);

    const matchPrice = product.price <= price;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
