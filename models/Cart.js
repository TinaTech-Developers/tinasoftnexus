import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    name: String,
    slug: String,
    price: Number,
    currency: String,
    image: String,
    quantity: { type: Number, default: 1 },
  },
  { _id: true },
);

const CartSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true },
    items: [CartItemSchema],
  },
  { timestamps: true },
);

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
