import { Quotation } from "../models/Quotation";

export async function generateQuoteNumber() {
  const count = await Quotation.countDocuments();

  const number = count + 1;

  return `QT-${String(number).padStart(5, "0")}`;
}
