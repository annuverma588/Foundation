import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h2>

          <p className="text-gray-600">
            Have questions or want to support our mission? Reach out to us anytime.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📍 Address: Delhi, India</p>
            <p>📞 Phone: +91 9876543210</p>
            <p>✉ Email: support@ngo.org</p>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Donate Now
            </button>
            <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Volunteer
            </button>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gray-50 p-6 rounded-2xl shadow-md space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue -500"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}