"use client";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle login logic
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8 space-y-6">
        {/* Logo / Title */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-blue-950 mb-2">
            Tinasoft Dashboard
          </h1>
          <p className="text-gray-400">Sign in to access your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-950 text-white font-semibold transition-colors"
          >
            Sign In
          </button>
        </form>

        {/* Footer links */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            Forgot your password?{" "}
            <a
              href="#"
              className="text-blue-700 hover:text-blue-950 font-semibold"
            >
              Reset
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
