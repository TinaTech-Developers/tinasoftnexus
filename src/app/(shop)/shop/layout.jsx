"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";

export default function ShopLayout({ children }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const sessionId = localStorage.getItem("cart_session");
        if (!sessionId) return;

        const res = await fetch(`/api/cart?sessionId=${sessionId}`);
        const data = await res.json();
        const count =
          data.items?.reduce((total, item) => total + item.quantity, 0) || 0;
        setCartCount(count);
      } catch (err) {
        console.error("Cart load error:", err);
      }
    };

    loadCart();

    // Listen for cart updates
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  return (
    <SessionProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* ================= HEADER ================= */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#00B3C6] rounded-lg flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="font-bold text-blue-900 text-lg">
                TinaSoft Nexus
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link
                href="/solutions"
                className="hover:text-[#00B3C6] transition"
              >
                ICT Solutions
              </Link>
              <Link href="/about" className="hover:text-[#00B3C6] transition">
                About Us
              </Link>
              <Link href="/blog" className="hover:text-[#00B3C6] transition">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-[#00B3C6] transition">
                Contact Us
              </Link>

              <Link
                href="/shop"
                className="bg-[#00B3C6] text-white px-4 py-2 rounded-lg hover:bg-[#0099aa] transition"
              >
                Shop Now
              </Link>
            </nav>

            {/* Cart Icon (Always Visible) */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-[#0B1E3F]" />

              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                    className="absolute -top-2 -right-2 bg-[#00B3C6] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>
        </header>
        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="bg-[#0B1E3F] text-gray-300 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">TinaSoft Nexus</h3>
              <p className="text-sm leading-relaxed">
                Delivering innovative ICT solutions, smart devices, and digital
                transformation services across Africa.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shop" className="hover:text-white">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm">info@tinasoftnexus.co.zw</p>
              <p className="text-sm mt-2">+263 XX XXX XXXX</p>
            </div>
          </div>

          <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
            © {new Date().getFullYear()} TinaSoft Nexus. All rights reserved.
          </div>
        </footer>
      </div>
    </SessionProvider>
  );
}
