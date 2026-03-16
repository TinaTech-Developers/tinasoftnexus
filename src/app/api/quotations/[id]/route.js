import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/mongodb";
import { Quotation } from "../../../../../models/Quotation";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const quotation = await Quotation.findById(params.id);

    if (!quotation) {
      return NextResponse.json(
        { error: "Quotation not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(quotation);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch quotation" },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const quotation = await Quotation.findByIdAndDelete(params.id);

    if (!quotation) {
      return NextResponse.json(
        { error: "Quotation not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Quotation deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete quotation" },
      { status: 500 },
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const data = await req.json();

    const quotation = await Quotation.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    if (!quotation) {
      return NextResponse.json(
        { error: "Quotation not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(quotation);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update quotation" },
      { status: 500 },
    );
  }
}
