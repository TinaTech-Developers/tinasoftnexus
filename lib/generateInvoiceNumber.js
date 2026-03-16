import { Invoice } from "../models/Invoice";

export async function generateInvoiceNumber() {
  const count = await Invoice.countDocuments();

  const number = count + 1;

  return `INV-${String(number).padStart(5, "0")}`;
}
