import { NextResponse } from "next/server";
import { Quotation } from "../../../../models/Quotation";
import { generateQuoteNumber } from "../../../../lib/generateQuoteNumber";
import connectDB from "../../../../lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    const quotations = await Quotation.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(quotations);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch quotations" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const quoteNumber = await generateQuoteNumber();

    const quotation = await Quotation.create({
      ...body,
      quoteNumber,
    });

    return NextResponse.json(quotation);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create quotation" },
      { status: 500 },
    );
  }
}
