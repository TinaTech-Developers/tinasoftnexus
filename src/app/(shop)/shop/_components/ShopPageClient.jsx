"use client";

import { useState } from "react";
import ShopHero from "./ShopHero";
import CategoryGrid from "./CategoryGrid";
import FeaturedBanner from "./banner/FeaturedBanner";
import ShopSidebar from "./ShopSidebar";
import ProductListing from "./ProductListing";

export default function ShopPageClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState(3000);

  return (
    <div className="min-h-screen bg-gray-50">
      <ShopHero />
      <CategoryGrid />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <ShopSidebar
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
          />

          <div className="md:col-span-3 space-y-10">
            <FeaturedBanner />

            <ProductListing search={search} category={category} price={price} />
          </div>
        </div>
      </div>
    </div>
  );
}
