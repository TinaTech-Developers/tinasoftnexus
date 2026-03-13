import {
  Laptop,
  Monitor,
  Printer,
  Tablet,
  Smartphone,
  Headphones,
} from "lucide-react";

const categories = [
  { name: "Laptops", icon: Laptop },
  { name: "Desktops", icon: Monitor },
  { name: "Printers", icon: Printer },
  { name: "Tablets", icon: Tablet },
  { name: "Smartphones", icon: Smartphone },
  { name: "Accessories", icon: Headphones },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-12 border-b">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="p-4 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition">
                <Icon className="w-8 h-8 text-[#00B3C6]" />
              </div>
              <span className="font-thin text-gray-700 group-hover:text-[#0B1E3F] ">
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
