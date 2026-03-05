import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    orderId: { type: String, required: true, unique: true },
    customer: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    items: [
      {
        productId: String,
        name: String,
        price: Number,
        currency: String,
        quantity: Number,
        image: String,
      },
    ],
    total: Number,
    status: { type: String, default: "Pending" },
  },
  { timestamps: true },
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
