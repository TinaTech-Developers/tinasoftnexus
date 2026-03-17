"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import ShopLayout from "../shop/layout";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp } from "react-icons/fa6";

export default function CheckoutPage() {
  const { data: session } = useSession();

  const [cart, setCart] = useState({ items: [] });
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    location: null,
  });
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [loading, setLoading] = useState(false);

  // Load cart
  useEffect(() => {
    const sessionId = localStorage.getItem("cart_session");
    if (!sessionId) {
      toast.warning("Your cart is empty or session not found");
      return;
    }

    fetch(`/api/cart?sessionId=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.items?.length) {
          toast.info("Your cart is empty");
          setCart({ items: [] });
          return;
        }
        setCart(data);
      });
  }, []);

  // Autofill email
  useEffect(() => {
    if (session?.user?.email) {
      setCustomer((prev) => ({ ...prev, email: session.user.email }));
    }
  }, [session]);

  // Google Maps Autocomplete
  useEffect(() => {
    // @ts-ignore
    if (!window.google) return;
    const input = document.getElementById("address-input");
    if (!input) return;
    // @ts-ignore
    const autocomplete = new window.google.maps.places.Autocomplete(input, {
      componentRestrictions: { country: "ZW" },
      fields: ["formatted_address", "geometry"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      setCustomer((prev) => ({
        ...prev,
        address: place.formatted_address,
        location: place.geometry?.location?.toJSON(),
      }));
    });
  }, []);

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
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const sessionId = localStorage.getItem("cart_session");

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, customer, paymentMethod }),
      });

      const data = await res.json();
      console.log("Order response:", data);

      if (paymentMethod === "online") {
        if (data.payNowUrl) {
          toast.success("Redirecting to payment...");
          window.location.href = data.payNowUrl;
        } else {
          toast.error("Failed to initiate online payment. Please try again.");
        }
      } else {
        toast.success(
          `Order created! ID: ${data.orderId}. Please prepare cash for delivery.`,
        );
      }

      localStorage.removeItem("cart_session");
      setCart({ items: [] });
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  if (!cart) {
    return (
      <ShopLayout>
        <p className="text-center py-20 text-gray-500">Loading your cart...</p>
      </ShopLayout>
    );
  }

  const handleWhatsAppOrder = () => {
    const phone = "263712471209"; // remove +

    const itemsText = cart.items
      .map(
        (item) =>
          `- ${item.name} x${item.quantity} (${item.currency} ${item.price * item.quantity})`,
      )
      .join("%0A");

    const message = `
New Order 🛒

Name: ${customer.name}
Phone: ${customer.phone}

Items:
${itemsText}

Total: $${subtotal.toFixed(2)}

Address:
${customer.address}
  `.trim();

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
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
            <input
              id="address-input"
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={customer.address}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3"
            />

            {/* Payment Method */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Payment Method</h3>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
                Pay Online
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Pay on Delivery
              </label>
            </div>
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
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full mt-6 bg-[#00B3C6] text-white py-3 rounded-lg font-semibold hover:bg-[#0099aa] transition"
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
              <span className="text-gray-500 mx-auto mt-3">
                -----------OR---------
              </span>
              <button
                onClick={handleWhatsAppOrder}
                className="flex items-center justify-center gap-2 w-full mt-3 bg-green-600 text-white py-3 rounded-lg"
              >
                Order via <FaWhatsapp color="white" size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </ShopLayout>
  );
}
