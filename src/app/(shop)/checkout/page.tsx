"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import ShopLayout from "../shop/layout";
import Image from "next/image";

export default function CheckoutPage() {
  const { data: session } = useSession();

  const [cart, setCart] = useState({ items: [] });
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  // Load cart
  useEffect(() => {
    const sessionId = localStorage.getItem("cart_session");
    if (!sessionId) return;

    fetch(`/api/cart?sessionId=${sessionId}`)
      .then((res) => res.json())
      .then((data) => setCart(data || { items: [] }));
  }, []);

  // Autofill ONLY email from logged-in user
  useEffect(() => {
    if (session?.user?.email) {
      setCustomer((prev) => ({
        ...prev,
        email: session.user.email,
      }));
    }
  }, [session]);

  const subtotal = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    if (!customer.name || !customer.email || !customer.address) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const sessionId = localStorage.getItem("cart_session");

      const res = await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify({
          sessionId,
          customer,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.payNowUrl) {
        window.location.href = data.payNowUrl;
      } else {
        alert(`Order created! ID: ${data.orderId}`);
      }

      localStorage.removeItem("cart_session");
      setCart({ items: [] });
    } catch (err) {
      console.error(err);
      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ShopLayout>
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Shipping Form */}
          <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              name="email"
              value={customer.email}
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-100"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3"
            />

            <textarea
              name="address"
              placeholder="Shipping Address"
              value={customer.address}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3"
              rows={4}
            />
          </div>

          {/* Order Summary */}
          <div className="bg-white border rounded-xl p-6 shadow-sm h-fit space-y-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image || "/placeholder.png"}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="rounded-lg"
                  />
                  <span>{item.name}</span>
                </div>

                <span>
                  {item.currency} {item.price * item.quantity}
                </span>
              </div>
            ))}

            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="w-full mt-6 bg-[#00B3C6] text-white py-3 rounded-lg font-semibold hover:bg-[#0099aa] transition"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}
        