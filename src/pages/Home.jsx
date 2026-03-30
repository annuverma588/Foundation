import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ─── DATA ─────────────────────────────────────────────── */

const heroImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80",
  "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1600&q=80",
];

const programs = [
  {
    title: "Quality Education",
    subtitle: "Shiksha Na Ruke",
    desc: "Bridging the education gap for 50,000+ children through digital classrooms, scholarships, and community learning centers.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    stat: "50K+",
    statLabel: "Students",
    color: "from-emerald-500 to-green-600",
    icon: "📚",
  },
  {
    title: "Healthcare Access",
    subtitle: "Health Cannot Wait",
    desc: "Mobile clinics, free screenings, and maternal care reaching the most underserved communities across rural India.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    stat: "200K+",
    statLabel: "Treated",
    color: "from-teal-500 to-emerald-600",
    icon: "🏥",
  },
  {
    title: "Women Empowerment",
    subtitle: "She Can Fly",
    desc: "Skill-building, microfinancing, and leadership programs transforming women into change-makers in their communities.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    stat: "30K+",
    statLabel: "Women",
    color: "from-green-500 to-teal-600",
    icon: "💪",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80", label: "Community Outreach" },
  { src: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=600&q=80", label: "Health Camps" },
  { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80", label: "Rural Programs" },
  { src: "https://images.unsplash.com/photo-1457459686225-14e838aaebe1?w=600&q=80", label: "Education Drive" },
  { src: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=600&q=80", label: "Women Training" },
  { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80", label: "Child Welfare" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of 3, Rajasthan",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    text: "HopeForward changed my children's future. My daughter is now studying engineering because of their scholarship program.",
  },
  {
    name: "Ramesh Kumar",
    role: "Farmer, Uttar Pradesh",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "The livelihood training gave me skills to grow my income threefold. I now train other farmers in my village.",
  },
  {
    name: "Dr. Anita Joshi",
    role: "Volunteer Doctor",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&q=80",
    text: "I've seen firsthand the impact of their mobile health clinics — lives truly being saved in remote areas.",
  },
];

const partners = [
  "UNICEF", "WHO", "Bill & Melinda Gates Foundation", "NITI Aayog", "Google.org", "Tata Trusts"
];

const stats = [
  { value: "10K+", label: "Lives Touched", icon: "❤️" },
  { value: "50+", label: "Active Projects", icon: "🚀" },
  { value: "200+", label: "Volunteers", icon: "🤝" },
  { value: "25+", label: "Cities Covered", icon: "🌍" },
];

/* ─── COUNTER ANIMATION ─────────────────────────────────── */
function useCounter(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(end);
    const step = num / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [start, end, duration]);
  return count;
}

/* ─── STAT CARD ─────────────────────────────────────────── */
function StatCard({ stat, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const num = parseInt(stat.value);
  const suffix = stat.value.replace(/\d/g, "");
  const count = useCounter(num, 2000, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl mb-2">{stat.icon}</div>
      <div className="text-5xl font-black text-white mb-1">
        {visible ? count : 0}{suffix}
      </div>
      <div className="text-green-200 text-sm font-medium tracking-wide">{stat.label}</div>
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────── */
export default function HomePage() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Hero auto-slide
  useEffect(() => {
    const t = setInterval(() => setHeroIdx((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  // Testimonial auto-slide
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background image slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            style={{ y: heroY }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[heroIdx]}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent" />

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Empowering Communities Since 2013
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Creating a World
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">
                Without Barriers
              </span>
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
              We work at the intersection of education, health, and livelihood to build
              resilient communities where every person can thrive.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl shadow-green-500/40 transition-colors flex items-center gap-2"
              >
                <span>💚</span> Donate Now
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
              >
                Our Story →
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className={`transition-all duration-300 rounded-full ${
                i === heroIdx ? "w-8 h-2 bg-green-400" : "w-2 h-2 bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 right-8 text-white/60 flex flex-col items-center gap-1 text-xs tracking-widest"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
          <span>SCROLL</span>
        </motion.div>
      </section>

      {/* ══════════════════ IMPACT TICKER ═══════════════════ */}
      <div className="bg-green-600 py-4 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex gap-12 items-center">
              {["50,000+ Children Educated", "200,000+ People Treated", "30,000+ Women Empowered", "25+ Cities Reached", "200+ Volunteer Network", "10+ Years of Impact"].map((t, i) => (
                <span key={i} className="text-white font-bold text-sm tracking-wide flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════ ABOUT ══════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images mosaic */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden h-52 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500&q=80" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-36 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=500&q=80" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-3xl overflow-hidden h-36 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=500&q=80" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-52 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1457459686225-14e838aaebe1?w=500&q=80" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-4 shadow-2xl border border-green-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-green-500/30">
                    🏆
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">10+ Years</div>
                    <div className="text-xs text-gray-500 font-medium">of Trusted Impact</div>
                  </div>
                </div>
              </motion.div>

              {/* Left badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-green-500 text-white rounded-2xl px-4 py-3 shadow-xl shadow-green-500/30"
              >
                <div className="text-2xl font-black">4.9★</div>
                <div className="text-green-100 text-xs">NGO Rating</div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600 text-sm font-bold tracking-widest uppercase">Who We Are</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                Building Hope,<br />
                <span className="text-green-600">One Life at a Time</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                HopeForward Foundation is a nationally-recognized nonprofit working at the
                grassroots level to break cycles of poverty and inequality in underserved
                communities across India.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Founded in 2013, we operate across education, healthcare, livelihood and
                women empowerment — always led by data, guided by community voices, and
                driven by the belief that change is possible.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Quality Education", "Healthcare Access", "Women Empowerment", "Child Welfare"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-green-50 rounded-2xl p-4 border border-green-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="/about" className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/30">
                  Learn More
                </a>
                <a href="/impact" className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-all">
                  Our Impact →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════ PROGRAMS ════════════════════ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-green-600 text-sm font-bold tracking-widest uppercase"
            >
              What We Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-gray-900 mt-3"
            >
              Our Impact Programs
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/80 hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-400"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Stat pill */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${prog.color} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
                    {prog.icon} {prog.stat} {prog.statLabel}
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/70 text-xs font-medium tracking-widest uppercase">{prog.subtitle}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{prog.desc}</p>
                  <a
                    href="/programs"
                    className="inline-flex items-center gap-2 text-green-600 font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS BAND ══════════════════ */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-emerald-800 relative overflow-hidden">
        {/* BG decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white transform translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => <StatCard key={i} stat={stat} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════ GALLERY ══════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-green-600 text-sm font-bold tracking-widest uppercase">Photo Gallery</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2">
                Stories Through<br />Images
              </h2>
            </div>
            <a href="/stories" className="text-green-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Stories →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`relative group overflow-hidden rounded-2xl shadow-lg ${
                  i === 0 ? "md:col-span-2 md:row-span-2 h-64 md:h-auto" : "h-48"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-bold text-sm">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CAMPAIGNS FEATURE ═══════════ */}
      <section className="py-24 px-6 bg-green-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Shiksha Na Ruke",
                icon: "📚",
                desc: "No child left behind. Our flagship education campaign covers 200+ villages with mobile schools and digital access.",
                link: "/shiksha",
              },
              {
                title: "Health Cannot Wait",
                icon: "🏥",
                desc: "40 mobile health units delivering free diagnosis, treatment, and medicine to over 2 lakh people annually.",
                link: "/health-campaign",
              },
              {
                title: "She Can Fly",
                icon: "🦋",
                desc: "Empowering rural women with vocational training, self-help groups, and leadership opportunities.",
                link: "/shecanfly",
              },
            ].map((c, i) => (
              <motion.a
                key={i}
                href={c.link}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all group"
              >
                <div className="text-5xl mb-4">{c.icon}</div>
                <h3 className="text-2xl font-black text-white mb-3">{c.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{c.desc}</p>
                <span className="text-green-200 font-bold text-sm group-hover:text-white transition-colors flex items-center gap-2">
                  Learn More <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ════════════════ */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-600 text-sm font-bold tracking-widest uppercase">Voices of Change</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-16">Real Stories,<br />Real Impact</h2>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-10 shadow-2xl shadow-gray-200/80 border border-gray-100"
              >
                <div className="text-6xl text-green-300 font-serif leading-none mb-6">"</div>
                <p className="text-xl text-gray-700 leading-relaxed italic mb-8">
                  {testimonials[activeTestimonial].text}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover border-4 border-green-100 shadow-lg"
                  />
                  <div className="text-left">
                    <div className="font-black text-gray-900">{testimonials[activeTestimonial].name}</div>
                    <div className="text-green-600 text-sm font-medium">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`transition-all rounded-full ${
                    i === activeTestimonial ? "w-8 h-2 bg-green-500" : "w-2 h-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ PARTNERS ════════════════════ */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 text-sm font-bold tracking-widest uppercase mb-10">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 font-black text-lg hover:text-green-600 transition-colors cursor-default"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA BANNER ══════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-green-700/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Be the Change<br />
            <span className="text-green-300">You Want to See</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Every contribution, every hour volunteered, every partnership forged — 
            it all adds up to a world with more hope.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/donate"
              className="bg-green-400 hover:bg-green-300 text-green-950 px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-400/40"
            >
              💚 Donate Now
            </a>
            <a
              href="/volunteer"
              className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Volunteer With Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════════ */}
      
    </div>
  );
}