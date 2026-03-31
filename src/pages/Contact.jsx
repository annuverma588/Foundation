import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully ✅");

    // Reset form
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-800 to-emerald-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">
            Contact Our NGO
          </h2>

          <p className="text-green-100 leading-relaxed">
            Together we can make a difference. Reach out for volunteering,
            donations, or partnerships.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4 text-green-100 text-sm">
            <div className="flex items-center gap-3">
              <span>📍</span>
              <p>Delhi, India</p>
            </div>

            <div className="flex items-center gap-3">
              <span>📞</span>
              <p>+91 9876543210</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✉</span>
              <p>support@ngo.org</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-white text-green-700 rounded-xl font-medium hover:bg-gray-100 transition">
              Donate Now
            </button>

            <button className="px-6 py-3 border border-white rounded-xl hover:bg-white/10 transition">
              Volunteer
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 space-y-5"
        >
          <h3 className="text-2xl font-semibold text-white">
            Send a Message
          </h3>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-white text-green-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}