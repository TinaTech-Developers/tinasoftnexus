import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/mongodb";
import Cart from "../../../../../models/Cart";

export async function DELETE(req, { params }) {
  await connectDB();

  const { id } = params;

  const sessionId = req.nextUrl.searchParams.get("sessionId");

  const cart = await Cart.findOne({ sessionId });

  cart.items = cart.items.filter((item) => item._id.toString() !== id);

  await cart.save();

  return NextResponse.json(cart);
}
