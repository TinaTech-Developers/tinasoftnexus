"use client";
import {
  Home,
  Users,
  Folder,
  Package,
  MessageSquare,
  BarChart2,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Leads", href: "/dashboard/leads" },
  { icon: Folder, label: "Projects", href: "/dashboard/projects" },
  { icon: Package, label: "Orders", href: "/dashboard/orders" },
  { icon: MessageSquare, label: "Tickets", href: "/dashboard/tickets" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`${
        open ? "w-64" : "w-20"
      } bg-[#0b2545] text-white flex flex-col transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <h1 className="text-xl font-semibold tracking-wide">TinaSoft</h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-white/70 hover:text-white"
        >
          ☰
        </button>
      </div>

      <nav className="flex-1 mt-4">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 px-5 py-3 text-sm hover:bg-white/10 transition"
          >
            <Icon className="w-5 h-5" />
            {open && <span>{label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 text-xs text-white/50 border-t border-white/10">
        © 2025 TinaSoft Nexus
      </div>
    </aside>
  );
}
