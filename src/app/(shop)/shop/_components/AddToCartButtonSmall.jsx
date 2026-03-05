"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingCart } from "lucide-react";

export default function AddToCartButtonSmall({ product }) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const addToCart = async () => {
    setLoading(true);

    let sessionId = localStorage.getItem("cart_session");

    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem("cart_session", sessionId);
    }

    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        sessionId,
        product: {
          productId: product._id,
          name: product.name,
          slug: product.slug,
          price: product.price,
          currency: product.currency,
          image: product.images?.[0],
          quantity: 1,
        },
      }),
    });

    setLoading(false);
    setAdded(true);

    /* update cart in navbar */
    window.dispatchEvent(new Event("cartUpdated"));

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={addToCart}
      disabled={loading}
      className="mt-6 px-4 py-2 text-sm rounded-xl bg-blue-600 text-white flex items-center justify-center gap-2 hover:bg-blue-700 transition relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {added ?
          <motion.span
            key="added"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex items-center gap-2"
          >
            <Check size={18} />
            Added
          </motion.span>
        : loading ?
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Adding...
          </motion.span>
        : <motion.span
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </motion.span>
        }
      </AnimatePresence>
    </motion.button>
  );
}
