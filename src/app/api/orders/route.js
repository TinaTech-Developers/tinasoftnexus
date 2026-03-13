import Cart from "../../../../models/Cart";
import Order from "../../../../models/Order";
import connectDB from "../../../../lib/mongodb";
import { Paynow } from "paynow";

export async function POST(req) {
  try {
    await connectDB();

    const { sessionId, customer, paymentMethod } = await req.json();

    if (!customer?.email) {
      return new Response(
        JSON.stringify({ error: "Customer email required" }),
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

    // Save order
    const order = await Order.create({
      orderId,
      customer,
      items: cart.items,
      total: subtotal,
      status: paymentMethod === "online" ? "Pending Payment" : "Pending",
      paymentMethod,
    });

    if (paymentMethod === "online") {
      const paynow = new Paynow(
        process.env.PAYNOW_INTEGRATION_ID,
        process.env.PAYNOW_INTEGRATION_KEY,
        "http://localhost:3000/payment/success",
        "http://localhost:3000/payment/cancel",
      );

      const payment = paynow.createPayment(orderId, customer.email);
      cart.items.forEach((item) => {
        payment.add(item.name, item.price * item.quantity);
      });

      const response = await paynow.send(payment);
      console.log("PayNow response:", response);

      return new Response(
        JSON.stringify({
          orderId,
          payNowUrl: response.success ? response.redirectUrl : null,
        }),
        { status: 201 },
      );
    }

    // COD
    return new Response(JSON.stringify({ orderId }), { status: 201 });
  } catch (err) {
    console.error("Order creation error:", err);
    return new Response(JSON.stringify({ error: "Order creation failed" }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    console.error("Fetch orders error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch orders" }), {
      status: 500,
    });
  }
}
