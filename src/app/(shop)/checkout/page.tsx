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
    address: "", // this will now be AREA
    addressDetails: "", // house/street
  });

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [loading, setLoading] = useState(false);

  // ✅ DELIVERY ZONES
  const DELIVERY_ZONES = {
    "Harare CBD": 5,
    Borrowdale: 12,
    Chitungwiza: 15,
    Highfield: 6,
    Chisipite: 10,
    "Mt Pleasant": 12,
    Belvedere: 8,
  };

  const [shippingFee, setShippingFee] = useState(0);

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

  // Handle input
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If user selects area → update shipping
    if (name === "address") {
      const fee = DELIVERY_ZONES[value] || 15;
      setShippingFee(fee);
    }

    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const total = subtotal + Number(shippingFee || 0);

  const handlePlaceOrder = async () => {
    if (!customer.name || !customer.phone || !customer.address) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const sessionId = localStorage.getItem("cart_session");

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          customer,
          paymentMethod,
          shippingFee,
          total,
        }),
      });

      const data = await res.json();

      if (paymentMethod === "online") {
        if (data.payNowUrl) {
          toast.success("Redirecting to payment...");
          window.location.href = data.payNowUrl;
        } else {
          toast.error("Payment failed.");
        }
      } else {
        toast.success(`Order created! ID: ${data.orderId}`);
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

  // ✅ WhatsApp Order
  const handleWhatsAppOrder = () => {
    const phone = "263712471209";

    const itemsText = cart.items
      .map(
        (item) =>
          `- ${item.name} x${item.quantity} (${
            item.currency
          } ${item.price * item.quantity})`,
      )
      .join("%0A");

    const message = `
*New Order* 🛒

*Name*: ${customer.name}
*Phone*: ${customer.phone}

*Area*: ${customer.address}
*Address*: ${customer.addressDetails}

*Items*:
${itemsText}

*Subtotal*: $${subtotal.toFixed(2)}
*Delivery*: $${shippingFee}
*Total*: $${total.toFixed(2)}
    `.trim();

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <ShopLayout>
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Shipping Info</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              value={customer.email}
              readOnly
              className="w-full border p-3 rounded-lg bg-gray-100"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg"
            />

            {/* ✅ AREA SELECT */}
            <select
              name="address"
              value={customer.address}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg"
            >
              <option value="">Select Area</option>
              {Object.keys(DELIVERY_ZONES).map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>

            {/* ✅ Exact Address */}
            <input
              type="text"
              name="addressDetails"
              placeholder="House number / street"
              value={customer.addressDetails}
              onChange={handleInputChange}
              className="w-full border p-3 rounded-lg"
            />

            {/* PAYMENT */}
            <div>
              <h3 className="font-semibold">Payment</h3>
              <label className="flex gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
                Online
              </label>
              <label className="flex gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            {cart.items.map((item) => (
              <div key={item.productId} className="flex justify-between">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}

            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>${shippingFee}</span>
            </div>

            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              Place Order
            </button>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Order via WhatsApp <FaWhatsapp />
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </ShopLayout>
  );
}
