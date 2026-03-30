import { motion } from "framer-motion";

export default function Card({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-xl shadow"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}