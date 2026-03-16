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
  const productId = req.nextUrl.searchParams.get("productId");

  if (!sessionId || !productId) {
    return NextResponse.json(
      { error: "Missing sessionId or productId" },
      { status: 400 },
    );
  }

  const cart = await Cart.findOne({ sessionId });
  if (!cart) return NextResponse.json({ items: [] });

  // Remove only the item with matching productId
  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== productId,
  );

  await cart.save();
  return NextResponse.json(cart);
}
export async function PATCH(req) {
  await connectDB();

  const body = await req.json();
  const { sessionId, productId, type } = body;

  const cart = await Cart.findOne({ sessionId });
  if (!cart) {
    return NextResponse.json({ error: "Cart not found" }, { status: 404 });
  }

  const item = cart.items.find(
    (item) => item.productId.toString() === productId,
  );
  if (!item) {
    return NextResponse.json(
      { error: "Item not found in cart" },
      { status: 404 },
    );
  }

  if (type === "increase") {
    item.quantity += 1;
  } else if (type === "decrease") {
    item.quantity = Math.max(item.quantity - 1, 1);
  }

  await cart.save();

  return NextResponse.json(cart);
}
