import connectDB from "../../../../../lib/mongodb";
import Order from "../../../../../models/Order";
import NextResponsense from "next/server";  

// --------------------------------------------GET ORDER BYID------------------------------------------------------------------

export async function GET(request, { params }) {
  try {
    await connectDB();
    const order = await Order.findById(params.id).populate("customer");
    if (!order) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (err) {
    console.error("Get order error:", err);
    return new Response(JSON.stringify({ error: "Failed to get order" }), {
      status: 500,
    });
  }
}

// --------------------------------------------UPDATE ORDER BYID------------------------------------------------------------------

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { status } = await request.json();
    const order = await Order.findByIdAndUpdate(
      params.id,
      { status },
      { new: true },
    );
    if (!order) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (err) {
    console.error("Update order error:", err);
    return new Response(JSON.stringify({ error: "Failed to update order" }), {
      status: 500,
    });
  }
}

// --------------------------------------------DELETE ORDER BYID------------------------------------------------------------------

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const order = await Order.findByIdAndDelete(params.id);
    if (!order) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ message: "Order deleted" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Delete order error:", err);
    return new Response(JSON.stringify({ error: "Failed to delete order" }), {
      status: 500,
    });
  }
}
