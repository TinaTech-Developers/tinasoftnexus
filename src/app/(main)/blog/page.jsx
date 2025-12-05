"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ServicesLayout from "../services/_components/ServicesLayout";
import BlogHero from "./_components/BlogHero";

const posts = [
  {
    id: 1,
    title: "Why Your Business Needs a Modern Website in 2025",
    summary:
      "A professional website increases trust, visibility, and customer engagement. Here’s why it matters.",
    image:
      "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg",
    slug: "why-your-business-needs-a-modern-website",
    category: "Web Development",
    date: "2025-01-05",
  },
  {
    id: 2,
    title: "Choosing Between Custom Software vs Off-the-Shelf",
    summary:
      "Understand which software option is best for your business and why custom systems give you an edge.",
    image: "/blog.jpg",
    slug: "custom-vs-off-the-shelf-software",
    category: "Software Development",
    date: "2024-12-22",
  },
  {
    id: 3,
    title: "How SEO Can Transform Your Business Visibility",
    summary:
      "Learn how search engine optimization boosts traffic, sales, and brand positioning.",
    image: "https://algorizon.com/wp-content/uploads/2024/09/seo.jpg",
    slug: "how-seo-transforms-business",
    category: "SEO & Marketing",
    date: "2024-11-10",
  },
];

export default function BlogPage() {
  return (
    <ServicesLayout>
      {/* --- TOP HERO (same as pages using ServicesSubHero) --- */}
      <BlogHero
        image={"/blog.jpg"}
        desc={"Insights, Tutorials & Tech News"}
        directory={"Resources | Blog"}
      />

      {/* --- Glow Section (same style as ICT Consulting) --- */}
      <section className="bg-blue-10 py-10 md:pb-20 h-full px-4 md:px-10">
        <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
          {/* Glow border */}
          <div className="absolute inset-0 rounded-xl border-2 border--400 animate-glow z-0"></div>

          {/* Content */}
          <div className="relative z-10 text-blue-950 p-4 rounded-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              TinaSoft Nexus Blog
            </h1>

            <h2 className="font-semibold text-lg md:text-xl mb-2 text-gray-600">
              Technology Insights for Smarter Business Decisions
            </h2>

            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              Explore articles on software development, web design, SEO, digital
              transformation, and emerging technologies. Stay informed with
              expert insights crafted for entrepreneurs, developers, and
              businesses looking to grow through innovation.
            </p>
          </div>
        </div>
      </section>

      {/* --- BLOG CARDS GRID (NEW DESIGN) --- */}
      <section className="max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="border-b border-gray-700 pb-8 group"
          >
            {/* Image on top */}
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <p className="text-sm text-gray-600 mb-2">
              {post.category.toUpperCase()}
            </p>

            <h3 className="text-2xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm mt-3 line-clamp-3">
              {post.summary}
            </p>

            <Link
              href={`/blog/${post.id}`}
              className="mt-4 inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-950"
            >
              Read More <ChevronRight size={18} />
            </Link>
          </motion.div>
        ))}
      </section>
    </ServicesLayout>
  );
}
