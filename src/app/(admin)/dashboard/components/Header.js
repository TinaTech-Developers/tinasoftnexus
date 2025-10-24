"use client";
import { Bell, Sun, Moon } from "lucide-react";
import Image from "next/image";
import useTheme from "../../../../../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-[#0b2545] shadow-sm p-4 flex items-center justify-between sticky top-0 z-20 transition-colors">
      <div>
        <h2 className="text-lg font-semibold text-[#0b2545] dark:text-white">
          Dashboard Overview
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-gray-700" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>

        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <Image
            src="/profile.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full border"
          />
          <span className="text-sm text-gray-700 dark:text-gray-200">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}
