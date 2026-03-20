"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/cart";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      if (isRegister) {
        // Call your API to create user
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to register");
      }

      // Sign in after registration or login
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        setErrorMsg(result.error);
      } else {
        // Redirect to cart or checkout
        router.push(callbackUrl);
      }
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isRegister ? "Register" : "Sign In"}
        </h1>

        {errorMsg && (
          <p className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {errorMsg}
          </p>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B3C6]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B3C6]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00B3C6] text-white py-2 rounded-lg font-semibold hover:bg-[#0099aa] transition"
          >
            {loading ?
              "Processing..."
            : isRegister ?
              "Register"
            : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-[#00B3C6] font-semibold hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Sign In" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}
