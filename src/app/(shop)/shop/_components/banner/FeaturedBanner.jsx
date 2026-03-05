import BannerSlider from "./BannerSlider";

const dummyProducts = [
  {
    id: 1,
    title: "HP ProDesk 600 G1 Desktop",
    description:
      "Powerful Intel Core i7 desktop with 16GB RAM and 512GB SSD for business performance.",
    image: "/i-02-prodesk-600-series-min.png",
    price: 1299,
  },
  {
    id: 2,
    title: "Dell XPS 15 Laptop",
    description:
      "Premium 15-inch laptop with 4K display, 16GB RAM and ultra-fast SSD storage.",
    image: "/Dell_XPS_15.png",
    price: 1899,
  },
  {
    id: 3,
    title: "Canon PIXMA G3411",
    description:
      "High-efficiency wireless printer perfect for home and office environments.",
    image: "/pixma-g3410-as-paper-try-up-fra_800x606.png",
    price: 399,
  },
  {
    id: 4,
    title: "Logitech MX Master 3 Mouse",
    description:
      "Ergonomic wireless mouse with advanced features for productivity and comfort.",
    image: "/logitech-mx-master-3.png",
    price: 99,
  },
];

export default function FeaturedBanner() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-gradient-to-r from-[#E6F7FA] to-[#D9ECF2] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          <BannerSlider products={dummyProducts} />
        </div>
      </div>
    </section>
  );
}
