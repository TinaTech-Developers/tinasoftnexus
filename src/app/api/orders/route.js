// src/app/api/orders/route.js
import Cart from "../../../../models/Cart";
import Order from "../../../../models/Order";
import { v4 as uuidv4 } from "uuid";
import { Paynow } from "paynow"; // Named import
import connectDB from "../../../../lib/mongodb"; // your mongoose connection

export async function POST(req) {
  try {
    await connectDB();

    const { sessionId, customer } = await req.json();

    if (!customer?.email) {
      return new Response(
        JSON.stringify({ error: "Customer email is required" }),
        { status: 400 },
      );
    }

    const cart = await Cart.findOne({ sessionId });
    if (!cart || cart.items.length === 0) {
      return new Response(JSON.stringify({ error: "Cart is empty" }), {
        status: 400,
      });
    }

    const orderId = `ORD-${Date.now()}`;
    const subtotal = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    // Save order in MongoDB
    const order = await Order.create({
      orderId,
      customer,
      items: cart.items,
      total: subtotal,
      status: "Pending",
    });

    // PAYNOW CONFIG
    const paynow = new Paynow(
      process.env.PAYNOW_INTEGRATION_ID,
      process.env.PAYNOW_INTEGRATION_KEY,
      "http://localhost:3000/payment/success", // success URL
      "http://localhost:3000/payment/cancel", // cancel URL
    );

    const payment = paynow.createPayment(orderId, customer.email);

    // Add each cart item to PayNow payment
    cart.items.forEach((item) => {
      payment.add(item.name, item.price * item.quantity);
    });

    const response = await paynow.send(payment);

    if (response.success) {
      return new Response(
        JSON.stringify({ orderId, payNowUrl: response.redirectUrl }),
        { status: 201 },
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Failed to initiate PayNow payment" }),
        { status: 500 },
      );
    }
  } catch (err) {
    console.error("Order creation error:", err);
    return new Response(JSON.stringify({ error: "Order creation failed" }), {
      status: 500,
    });
  }
}
