import { motion } from "framer-motion";

const PROGRAMS = [
  {
    title: "Education Support",
    desc: "We provide books, digital devices, and learning resources to children from underserved communities, ensuring every child has a pathway to a brighter future.",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&q=80",
    icon: "📚",
    tag: "Popular",
  },
  {
    title: "Healthcare Access",
    desc: "Free health checkups, medicine distribution, and awareness camps are conducted in remote villages, bringing quality healthcare to those who need it most.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80",
    icon: "🏥",
    tag: "New",
  },
  {
    title: "Women Empowerment",
    desc: "Skill training workshops in tailoring, computers, and entrepreneurship help women achieve financial independence and lead their communities.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
    icon: "💪",
    tag: "Trending",
  },
  {
    title: "Food & Nutrition",
    desc: "Regular food drives, community kitchens, and nutritional guidance programs ensure no family in our communities goes to bed hungry.",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=700&q=80",
    icon: "🌾",
    tag: "Essential",
  },
];

export default function Programs() {
  return (
    <section className="bg-green-100 py-28 px-4 relative overflow-hidden">
      
      {/* Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full -top-24 -left-24"></div>
      <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-3xl rounded-full -bottom-24 right-0"></div>

      {/* Heading */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-green-700 bg-green-100 px-4 py-1 rounded-full mb-5">
          🌱 What We Do
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-black text-green-950 leading-tight">
          Programs That <span className="text-green-600">Change Lives</span>
        </h2>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Every initiative is thoughtfully designed to address the most pressing needs of underserved communities across India.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-7">
        {PROGRAMS.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            {/* Image */}
            <div className="relative sm:w-56 w-full h-52 sm:h-auto overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-green-700 text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                {p.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-xl mb-4 text-green-700">
                  {p.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-green-950 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 mt-4 hover:gap-2 transition-all"
              >
                Learn More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Banner */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 rounded-3xl overflow-hidden relative h-[400px] shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1400&q=80"
          alt="Join us"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-transparent flex items-center p-10">
          <div className="text-white max-w-lg">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-green-300 bg-white/10 border border-white/20 px-4 py-1 rounded-full">
              🤝 Get Involved
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-black my-3 leading-tight">
              Be Part of the Change You Want to See
            </h2>
            <p className="opacity-80 leading-relaxed mb-6">
              Whether you volunteer, donate, or simply spread the word — every action ripples out to transform lives.
            </p>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 bg-green-400 text-green-950 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-300 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer Today →
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}