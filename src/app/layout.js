import Footer from "./(main)/components/Footer";
import Navbar from "./(main)/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TinaSoft Nexus",
  description:
    "Top ICT company in Harare, Software solutions, networking, server setup, CCTV Setup, Computer and printer mintanance and repair,  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
