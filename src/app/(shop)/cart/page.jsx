"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ShopLayout from "../shop/layout";
import Link from "next/link";
import ProceedToCheckoutButton from "./_components/ProceedToCheckoutButton";

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const [removingItem, setRemovingItem] = useState(null);

  useEffect(() => {
    const sessionId = localStorage.getItem("cart_session");
    if (!sessionId) return;

    fetch(`/api/cart?sessionId=${sessionId}`)
      .then((res) => res.json())
      .then((data) => setCart(data || { items: [] }));
  }, []);

  if (!cart) {
    return (
      <div className="max-w-6xl mx-auto p-10 text-center">
        <p className="text-gray-500">Loading cart...</p>
      </div>
    );
  }

  const items = cart.items || [];
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const removeItem = async (productId) => {
    setRemovingItem(productId);
    const sessionId = localStorage.getItem("cart_session");
    if (!sessionId) return;

    try {
      const res = await fetch(
        `/api/cart?sessionId=${sessionId}&productId=${productId}`,
        {
          method: "DELETE",
        },
      );
      const updatedCart = await res.json();
      setCart(updatedCart || { items: [] });
    } catch (err) {
      console.error("Failed to remove item", err);
    } finally {
      setRemovingItem(null);
    }
  };
  const updateQuantity = async (productId, type) => {
    const sessionId = localStorage.getItem("cart_session");
    if (!sessionId) return;

    try {
      const res = await fetch("/api/cart", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          productId,
          type, // "increase" | "decrease"
        }),
      });

      const updatedCart = await res.json();
      setCart(updatedCart);
    } catch (err) {
      console.error("Failed to update quantity", err);
    }
  };

  return (
    <ShopLayout
      title="Your Cart"
      description="Review your cart items and proceed to checkout"
    >
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {items.length === 0 ?
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold mb-3">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added anything yet.
            </p>

            <Link
              href="/shop"
              className="px-6 py-3 bg-[#00B3C6] text-white rounded-lg hover:bg-[#0099aa] transition"
            >
              Continue Shopping
            </Link>
          </div>
        : <div className="grid md:grid-cols-3 gap-10">
            {/* CART ITEMS */}
            <div className="md:col-span-2 space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.productId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-6 bg-white border rounded-xl p-5 shadow-sm"
                  >
                    <div className="w-24 h-24 relative">
                      <Image
                        src={item.image || "/placeholder.png"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="font-semibold text-lg">{item.name}</h2>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.currency} {item.price}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, "decrease")
                            }
                            className="w-7 h-7 flex items-center justify-center border rounded hover:bg-gray-100"
                          >
                            -
                          </button>

                          <span className="text-sm font-medium w-5 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.productId, "increase")
                            }
                            className="w-7 h-7 flex items-center justify-center border rounded hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.productId)}
                        disabled={removingItem === item.productId}
                        className="flex items-center gap-2 text-red-500 text-sm mt-3 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                        {removingItem === item.productId ?
                          "Removing..."
                        : "Remove"}
                      </button>
                    </div>

                    <div className="font-semibold text-right">
                      {item.currency} {item.price * item.quantity}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-white border rounded-xl p-6 shadow-sm h-fit">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <ProceedToCheckoutButton cart={cart} />
              <p className="text-xs text-gray-400 text-center mt-4">
                Secure checkout powered by TinaSoft Nexus
              </p>
            </div>
          </div>
        }
      </div>
    </ShopLayout>
  );
}
