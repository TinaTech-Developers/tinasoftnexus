import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

async function seedProducts() {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("Connected to MongoDB");

    await Product.deleteMany({}); // optional (clears old data)

    await Product.insertMany([
      {
        name: "Dell XPS 15",
        slug: "dell-xps-15",
        sku: "DELL-XPS-15-001",
        brand: "Dell",
        category: "Laptops",
        price: 1899,
        stock: 5,
        warranty: "1 Year Warranty",
        images: [
          "https://microless.com/cdn/products/988f70071da96c77284ec3876267d858-hi.jpg",
          "https://m.media-amazon.com/images/I/81B3WogCl+L._AC_UF350,350_QL80_.jpg",
        ],
        specifications: {
          Processor: "Intel Core i7",
          RAM: "16GB DDR4",
          Storage: "1TB SSD",
          Display: "15.6 inch 4K",
        },
      },

      {
        name: "HP ProDesk 600 G5",
        slug: "hp-prodesk-600-g5",
        sku: "MBP-14-002",
        brand: "HP",
        category: "Desktops",
        price: 1299,
        stock: 8,
        warranty: "6 Months Warranty",
        images: [
          "https://www.shoppingexpress.com.au/assets/full/7WK35PA_1FH47AA.png?20210318065022",
        ],
        specifications: {
          Processor: "Intel Core i5",
          RAM: "8GB DDR4",
          Storage: "512GB SSD",
        },
      },

      {
        name: "Canon PIXMA G3411",
        slug: "canon-pixma-g3411",
        sku: "CANON-PRT-003",
        brand: "Canon",
        category: "Printers",
        price: 399,
        stock: 12,
        warranty: "1 Year Warranty",
        images: [
          "https://cdn.akakce.com/_static/326014715/canon-pixma-g3411.png",
        ],
        specifications: {
          Type: "Inkjet",
          Connectivity: "WiFi",
          PrintSpeed: "8.8 ipm",
        },
      },
    ]);

    console.log("Products Seeded Successfully ✅");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedProducts();
