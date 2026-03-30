import { motion } from "framer-motion";

export default function VolunteerSection() {
  return (
    <section id="volunteer" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Become a Volunteer 🤝
          </h2>

          <p className="text-gray-600">
            Join our mission to create a better future. Your time and skills can
            change lives and bring hope to communities in need.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Support education programs</li>
            <li>✔ Help in health camps</li>
            <li>✔ Participate in community drives</li>
            <li>✔ Make real impact on society</li>
          </ul>

          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Join Now
          </button>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gray-50 p-6 rounded-2xl shadow-md space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          />

          <select className="w-full p-3 border rounded-lg outline-none">
            <option>Select Area of Interest</option>
            <option>Education</option>
            <option>Health</option>
            <option>Women Empowerment</option>
            <option>Food Distribution</option>
          </select>

          <textarea
            placeholder="Why do you want to volunteer?"
            rows="3"
            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Submit Application
          </button>
        </motion.form>

      </div>
    </section>
  );
}