import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import Product from "../../../../models/Product";
/* ---------------- CREATE PRODUCT ---------------- */

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    console.log("Received body:", body); // <--- DEBUG

    const product = await Product.create(body);

    console.log("Created product:", product); // <--- DEBUG

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error); // <--- DEBUG
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
/* ---------------- GET ALL PRODUCTS ---------------- */

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find().sort({ createdAt: -1 });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
