import { notFound } from "next/navigation";
import ProductHero from "../_components/ProductHero";
import ProductImageSwiper from "../_components/ProductImageSwiper";
import ShopLayout from "../../shop/layout";

async function getProductBySlug(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      { cache: "no-store" },
    );

    const products = await res.json();
    return products.find((p) => p.slug === slug) || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) return notFound();

  return (
    <ShopLayout title={product.name} description={product.description}>
      <ProductHero />

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-10">
          {/* IMAGE SWIPER */}
          <div className="flex-1">
            <ProductImageSwiper images={product.images} name={product.name} />
          </div>

          {/* PRODUCT INFO */}
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <p className="text-gray-500">
              {product.brand} • {product.category}
            </p>

            <span className="text-3xl font-semibold text-blue-600">
              {product.currency} {product.price}
            </span>

            <p className="text-gray-400 text-sm">{product.warranty}</p>

            <p className="mt-4 text-gray-700 font-thin">
              {product.description || "No description available."}
            </p>

            <button
              className={`mt-6 px-6 py-3 rounded-lg text-white font-medium transition ${
                product.stock > 0 ?
                  "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}
