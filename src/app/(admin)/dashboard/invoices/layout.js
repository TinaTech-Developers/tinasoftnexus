"use client";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
