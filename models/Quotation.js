import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  description: String,
  price: Number,
  qty: Number,
});

const QuotationSchema = new mongoose.Schema({
  quoteNumber: String,

  customerName: String,
  customerPhone: String,

  date: String,

  items: [ItemSchema],

  subtotal: Number,
  total: Number,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Quotation =
  mongoose.models.Quotation || mongoose.model("Quotation", QuotationSchema);
