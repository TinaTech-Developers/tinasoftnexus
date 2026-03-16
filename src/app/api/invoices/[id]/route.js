import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/mongodb";
import { Invoice } from "../../../../../models/Invoice";

//  get invoice by id

export async function GET(req, { params }) {
  try {
    await connectDB();

    const invoice = await Invoice.findById(params.id);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    return NextResponse.json(invoice);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch invoice" },
      { status: 500 },
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const data = await req.json();

    const invoice = await Invoice.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    return NextResponse.json(invoice);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update invoice" },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const invoice = await Invoice.findByIdAndDelete(params.id);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Invoice deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete invoice" },
      { status: 500 },
    );
  }
}
