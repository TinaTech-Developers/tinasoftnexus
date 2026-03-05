import ShopHero from "./_components/ShopHero";
import CategoryGrid from "./_components/CategoryGrid";
import FeaturedBanner from "./_components/banner/FeaturedBanner";
import ShopSidebar from "./_components/ShopSidebar";
import ProductListing from "./_components/ProductListing";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ShopHero />
      <CategoryGrid />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LEFT SIDEBAR */}
          <ShopSidebar />

          {/* RIGHT CONTENT */}
          <div className="md:col-span-3 space-y-10">
            <FeaturedBanner />
            <ProductListing />
          </div>
        </div>
      </div>
    </div>
  );
}
