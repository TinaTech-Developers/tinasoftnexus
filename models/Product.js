import mongoose from "mongoose";

const { Schema } = mongoose;

/* ---------------- VARIANT SCHEMA ---------------- */

const VariantSchema = new Schema({
  name: String,
  sku: String,
  price: Number,
  stock: {
    type: Number,
    default: 0,
  },
});

/* ---------------- MAIN PRODUCT SCHEMA ---------------- */

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    sku: {
      type: String,
      unique: true,
    },

    brand: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    price: {
      type: Number,
      required: true,
    },

    salePrice: {
      type: Number,
      default: null,
    },

    currency: {
      type: String,
      default: "USD",
    },

    description: {
      type: String,
      default: "",
    },

    stock: {
      type: Number,
      default: 0,
    },

    warranty: {
      type: String,
      default: "No warranty",
    },

    thumbnail: {
      type: String,
      default: "",
    },

    images: {
      type: [String],
      default: [],
    },

    specifications: {
      type: Map,
      of: String,
      default: {},
    },

    variants: {
      type: [VariantSchema],
      default: [],
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
