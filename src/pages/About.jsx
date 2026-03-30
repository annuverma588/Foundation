import { motion } from "framer-motion";

const FEATURES = [
  "Education for Every Child",
  "Accessible Healthcare",
  "Women Empowerment",
  "Sustainable Livelihood",
];

const TIMELINE = [
  { year: "2015", event: "NGO Founded", detail: "Started with a dream to transform underserved communities across rural India." },
  { year: "2018", event: "5,000 Lives Impacted", detail: "Expanded health & education programs to 12 new villages." },
  { year: "2021", event: "National Recognition", detail: "Received the National Social Impact Award for community development." },
  { year: "2024", event: "15,000+ Lives Impacted", detail: "Operating in 20+ cities with 100+ dedicated volunteers." },
];

const TEAM = [
  { img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80", name: "Priya Sharma", role: "Founder & Director" },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", name: "Rahul Mehta", role: "Program Head" },
  { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80", name: "Anita Verma", role: "Field Coordinator" },
];

const STATS = [
  { num: "10+", label: "Years of Impact" },
  { num: "50+", label: "Active Projects" },
  { num: "100+", label: "Volunteers" },
  { num: "20+", label: "Cities" },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28 px-4 text-gray-800">

      {/* Background blobs */}
      <div className="absolute w-[600px] h-[600px] bg-green-600/10 rounded-[50%_0_50%_0] -top-40 -left-40"></div>
      <div className="absolute w-[400px] h-[400px] bg-green-600/5 rounded-[50%_0_50%_0] -bottom-24 -right-24"></div>

      {/* HERO GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Images */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80"
            className="w-full h-[520px] object-cover rounded-[2rem_2rem_2rem_0] shadow-[0_40px_80px_-20px_rgba(22,163,74,0.3)]"
          />

          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&q=80"
            className="absolute -bottom-10 -right-10 w-[200px] h-[200px] object-cover rounded-2xl border-4 border-white shadow-xl"
          />

          <motion.div
            className="absolute top-8 -left-8 bg-green-700 text-white px-6 py-4 rounded-xl shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <h3 className="text-3xl font-black font-serif">15K+</h3>
            <p className="text-xs uppercase opacity-80">Lives Impacted</p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-green-700 bg-green-100 px-4 py-1 rounded-full mb-5">
            🌿 About Us
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight text-green-950 mb-4">
            Creating Impact <br />
            That <span className="text-green-600">Truly Matters</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            We are a grassroots movement transforming communities through education, healthcare,
            and sustainable growth. Every program we run is designed to create lasting change.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {FEATURES.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-sm font-medium text-green-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {item}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#programs"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Work →
          </motion.a>
        </motion.div>
      </div>

      {/* VISION + MISSION */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Our Vision",
            text: "A world where every individual has equal opportunity to thrive.",
            img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900&q=80",
            bg: "bg-green-900 text-white",
            icon: "🔭",
          },
          {
            title: "Our Mission",
            text: "Empowering communities through sustainable programs.",
            img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
            bg: "bg-green-100 text-green-950",
            icon: "🎯",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={`relative overflow-hidden rounded-2xl p-10 ${card.bg}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img src={card.img} className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="relative z-10">
              <span className="text-4xl">{card.icon}</span>
              <h3 className="text-2xl font-bold font-serif mt-3">{card.title}</h3>
              <p className="mt-2 opacity-90">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="max-w-3xl mx-auto mt-24">
        <h3 className="text-3xl font-black font-serif text-center text-green-950 mb-12">
          Our Journey
        </h3>

        <div className="relative border-l-2 border-green-200 pl-8 space-y-10">
          {TIMELINE.map((t, i) => (
            <motion.div key={i} className="relative">
              <div className="absolute -left-[10px] top-2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
              <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm">
                <div className="text-green-600 font-black text-xl">{t.year}</div>
                <div className="font-semibold text-green-950">{t.event}</div>
                <p className="text-sm text-gray-600 mt-1">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h3 className="text-3xl font-black font-serif text-green-950">
          People Behind the Impact
        </h3>
        <p className="text-gray-600 mb-10">Driven by passion, guided by purpose</p>

        <div className="grid md:grid-cols-3 gap-6">
          {TEAM.map((m, i) => (
            <motion.div key={i} className="relative rounded-2xl overflow-hidden">
              <img src={m.img} className="w-full h-[300px] object-cover hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="font-serif font-bold">{m.name}</div>
                <div className="text-xs uppercase opacity-80">{m.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-green-800 to-green-600 text-white rounded-2xl p-6 text-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-black font-serif">{s.num}</div>
            <div className="text-xs uppercase opacity-80 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}