import { useState } from "react";
import { motion } from "framer-motion";

export default function DonateSection() {
  const [amount, setAmount] = useState(500);

  const presetAmounts = [100, 500, 1000, 5000];

  return (
    <section id="donate" className="py-16 bg-green-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Support Our Cause 💙
          </h2>
          <p className="text-gray-600 mt-3">
            Your donation helps us create real impact in education, health & empowerment.
          </p>
        </motion.div>

        {/* Donate Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-10 bg-white p-8 rounded-2xl shadow-lg"
        >

          {/* Preset Amounts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`py-3 rounded-lg border ${
                  amount === amt
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                ₹{amt}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <input
            type="number"
            placeholder="Enter custom amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border rounded-lg mb-6 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Donor Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Donate Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 text-lg">
            Donate ₹{amount}
          </button>

        </motion.div>
      </div>
    </section>
  );
}