"use client";
import { motion } from "framer-motion";

export default function LeadKpiCard({ title, value, gradient }) {
  return (
    <motion.div
      className={`p-5 rounded-2xl shadow-sm bg-gradient-to-r ${gradient} text-white`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <h3 className="text-sm opacity-80">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </motion.div>
  );
}
