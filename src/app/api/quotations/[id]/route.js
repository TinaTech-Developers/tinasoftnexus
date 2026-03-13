import { NextResponse } from "next/server";
import  connectDB  from "../../../../../lib/mongodb";
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
