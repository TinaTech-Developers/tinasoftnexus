import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  description: String,
  price: Number,
  qty: Number,
});

const InvoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    unique: true,
  },

  quoteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quotation",
  },

  customerName: String,
  customerPhone: String,

  items: [ItemSchema],

  subtotal: Number,
  total: Number,

  status: {
    type: String,
    default: "Unpaid",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", InvoiceSchema);
