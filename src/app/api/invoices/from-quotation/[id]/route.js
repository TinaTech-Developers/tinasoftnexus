import { NextResponse } from "next/server";
import connectDB from "../../../../../../lib/mongodb";
import { Quotation } from "../../../../../../models/Quotation";
import { generateInvoiceNumber } from "../../../../../../lib/generateInvoiceNumber";
import { Invoice } from "../../../../../../models/Invoice";

export async function POST(req, { params }) {
  try {
    await connectDB();

    const quotation = await Quotation.findById(params.id);

    if (!quotation) {
      return NextResponse.json(
        { error: "Quotation not found" },
        { status: 404 },
      );
    }

    const invoiceNumber = await generateInvoiceNumber();

    const invoice = await Invoice.create({
      invoiceNumber,
      quoteId: quotation._id,

      customerName: quotation.customerName,
      customerPhone: quotation.customerPhone,

      items: quotation.items,
      subtotal: quotation.subtotal,
      total: quotation.total,
    });

    return NextResponse.json(invoice);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create invoice" },
      { status: 500 },
    );
  }
}
