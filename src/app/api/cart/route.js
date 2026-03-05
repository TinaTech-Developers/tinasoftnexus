import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import Cart from "../../../../models/Cart";
0;

export async function GET(req) {
  await connectDB();

  const sessionId = req.nextUrl.searchParams.get("sessionId");

  const cart = await Cart.findOne({ sessionId });

  return NextResponse.json(cart || { items: [] });
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const { sessionId, product } = body;

  let cart = await Cart.findOne({ sessionId });

  if (!cart) {
    cart = await Cart.create({
      sessionId,
      items: [],
    });
  }

  const existing = cart.items.find(
    (item) => item.productId.toString() === product.productId,
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.items.push(product);
  }

  await cart.save();

  return NextResponse.json(cart);
}

export async function DELETE(req) {
  await connectDB();

  const sessionId = req.nextUrl.searchParams.get("sessionId");

  await Cart.findOneAndDelete({ sessionId });

  return NextResponse.json({ success: true });
}
