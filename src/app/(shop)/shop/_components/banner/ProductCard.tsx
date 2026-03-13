"use client";

import Link from "next/link";
import AddToCartButtonSmall from "../AddToCartButtonSmall";

interface Product {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  currency: string;
  stock: number;
  warranty: string;
  images: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="block">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-4 group">
        <div className="h-40 flex items-center justify-center">
          <img
            src={product.images[0] || "/placeholder.png"}
            alt={product.name}
            className="h-full object-contain group-hover:scale-105 transition"
          />
        </div>

        <h3 className="mt-4 font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 font-thin">
          {product.brand} • {product.category}
        </p>

        <div className="mt-1 flex items-center justify-between text-sm">
          <span className="font-bold text-blue-600">
            {product.currency} {product.price}
          </span>

          <div>
            <AddToCartButtonSmall product={product} />
            <Link
              href={`/products/${product.slug}`}
              className="text-blue-600 text-center py-2 hover:text-white rounded-xl text-sm font-medium mt-2 block bg-gray-400"
            >
              View Details
            </Link>
          </div>
        </div>

        <p className="mt-2 text-xs text-gray-400">{product.warranty}</p>
      </div>
    </div>
  );
}
