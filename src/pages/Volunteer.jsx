import { motion } from "framer-motion";

const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

    :root {
      --green-950: #052e16;
      --green-900: #14532d;
      --green-800: #166534;
      --green-700: #15803d;
      --green-600: #16a34a;
      --green-500: #22c55e;
      --green-400: #4ade80;
      --green-200: #bbf7d0;
      --green-100: #dcfce7;
      --green-50:  #f0fdf4;
      --white: #ffffff;
      --gray-400: #9ca3af;
      --gray-600: #4b5563;
      --gray-800: #1f2937;
      --font-display: 'Playfair Display', serif;
      --font-body: 'DM Sans', sans-serif;
    }

    .vs-section {
      font-family: var(--font-body);
      background: var(--green-50);
      position: relative;
      overflow: hidden;
      padding: 0;
    }

    /* ── HERO BANNER ── */
    .vs-banner { position: relative; height: 310px; overflow: hidden; }
    .vs-banner-img { width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.4); }
    .vs-banner-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(5,46,22,0.9) 0%, rgba(22,163,74,0.48) 100%);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; padding: 2rem;
    }
    .vs-eyebrow {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-size: 0.78rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--green-400); background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      padding: 0.35rem 1rem; border-radius: 99px; margin-bottom: 1rem;
    }
    .vs-banner-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 3.4rem);
      font-weight: 900; color: var(--white); line-height: 1.1; margin-bottom: 0.65rem;
    }
    .vs-banner-title span { color: var(--green-400); }
    .vs-banner-sub { color: rgba(255,255,255,0.8); font-size: 0.97rem; max-width: 500px; line-height: 1.7; }

    /* ── BODY ── */
    .vs-body {
      max-width: 1280px; margin: 0 auto;
      padding: 5rem 1.5rem 6rem;
      display: grid; grid-template-columns: 1fr 1.1fr;
      gap: 4rem; align-items: start;
    }
    @media (max-width: 960px) { .vs-body { grid-template-columns: 1fr; gap: 3rem; } }

    /* ── LEFT ── */
    .vs-left { display: flex; flex-direction: column; gap: 2rem; }

    .vs-img-stack { position: relative; }
    .vs-img-main {
      width: 100%; height: 285px; object-fit: cover; display: block;
      border-radius: 1.75rem 1.75rem 1.75rem 0;
      box-shadow: 0 30px 60px -10px rgba(22,101,52,0.22);
    }
    .vs-img-accent {
      position: absolute; bottom: -1.75rem; right: -1.75rem;
      width: 142px; height: 142px; object-fit: cover;
      border-radius: 1.25rem; border: 5px solid var(--white);
      box-shadow: 0 12px 30px rgba(0,0,0,0.14);
    }
    .vs-float-badge {
      position: absolute; top: 1.25rem; left: -1.25rem;
      background: var(--green-700); color: var(--white);
      padding: 0.8rem 1.25rem; border-radius: 1rem;
      box-shadow: 0 10px 30px rgba(22,101,52,0.4);
      font-family: var(--font-display);
    }
    .vs-float-badge strong { display: block; font-size: 1.55rem; font-weight: 900; line-height: 1; }
    .vs-float-badge span { font-size: 0.7rem; opacity: 0.85; letter-spacing: 0.08em; text-transform: uppercase; }

    /* Perks list */
    .vs-perks { display: flex; flex-direction: column; gap: 0.8rem; margin-top: 2.5rem; }
    .vs-perk {
      display: flex; align-items: flex-start; gap: 1rem;
      padding: 1rem 1.2rem;
      background: var(--white); border: 1px solid var(--green-200);
      border-radius: 1rem;
      transition: box-shadow 0.25s, transform 0.25s;
    }
    .vs-perk:hover { box-shadow: 0 8px 24px rgba(22,101,52,0.1); transform: translateX(4px); }
    .vs-perk-icon {
      width: 42px; height: 42px; background: var(--green-700); color: var(--white);
      border-radius: 0.7rem; display: flex; align-items: center; justify-content: center;
      font-size: 1.05rem; flex-shrink: 0; margin-top: 0.1rem;
    }
    .vs-perk-title { font-size: 0.9rem; font-weight: 700; color: var(--green-900); margin-bottom: 0.2rem; }
    .vs-perk-desc { font-size: 0.82rem; color: var(--gray-600); line-height: 1.5; }

    /* Volunteer avatars */
    .vs-volunteers-row { display: flex; align-items: center; gap: 0.85rem; margin-top: 0.5rem; }
    .vs-avatars { display: flex; }
    .vs-avatar {
      width: 38px; height: 38px; border-radius: 50%; object-fit: cover;
      border: 3px solid var(--white); margin-left: -10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    }
    .vs-avatars .vs-avatar:first-child { margin-left: 0; }
    .vs-vol-text strong { display: block; font-size: 0.88rem; color: var(--green-900); font-weight: 700; }
    .vs-vol-text span { font-size: 0.75rem; color: var(--gray-600); }

    /* ── RIGHT — FORM CARD ── */
    .vs-form-card {
      background: var(--white); border: 1px solid var(--green-200);
      border-radius: 2rem; box-shadow: 0 20px 60px rgba(22,101,52,0.1);
      overflow: hidden;
    }
    .vs-form-cover { width: 100%; height: 165px; object-fit: cover; display: block; }
    .vs-form-inner { padding: 2.25rem; }
    .vs-form-title { font-family: var(--font-display); font-size: 1.65rem; font-weight: 900; color: var(--green-950); margin-bottom: 0.3rem; }
    .vs-form-sub { font-size: 0.87rem; color: var(--gray-600); margin-bottom: 1.75rem; line-height: 1.6; }

    /* Role chips */
    .vs-roles { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
    .vs-role-chip {
      padding: 0.4rem 0.9rem; border-radius: 99px; font-size: 0.78rem; font-weight: 600;
      border: 1.5px solid var(--green-200); background: var(--green-50);
      color: var(--green-700); cursor: pointer; transition: all 0.2s; user-select: none;
    }
    .vs-role-chip:hover,
    .vs-role-chip.active { background: var(--green-700); color: var(--white); border-color: var(--green-700); }

    .vs-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
    @media (max-width: 480px) { .vs-two-col { grid-template-columns: 1fr; } }

    .vs-field { display: flex; flex-direction: column; gap: 0.3rem; margin-bottom: 0.8rem; }
    .vs-field label { font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--green-800); }
    .vs-field input,
    .vs-field textarea,
    .vs-field select {
      padding: 0.8rem 1rem; border: 1.5px solid var(--green-200);
      border-radius: 0.85rem; font-family: var(--font-body); font-size: 0.91rem;
      color: var(--gray-800); background: var(--green-50); outline: none;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .vs-field input:focus,
    .vs-field textarea:focus,
    .vs-field select:focus {
      border-color: var(--green-500); background: var(--white);
      box-shadow: 0 0 0 3px rgba(34,197,94,0.13);
    }
    .vs-field textarea { resize: vertical; min-height: 100px; }

    /* Availability row */
    .vs-avail-row { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem; }
    .vs-avail-chip {
      padding: 0.42rem 0.85rem; border-radius: 99px; font-size: 0.78rem; font-weight: 600;
      border: 1.5px solid var(--green-200); background: var(--green-50);
      color: var(--green-700); cursor: pointer; transition: all 0.2s;
    }
    .vs-avail-chip:hover { background: var(--green-100); border-color: var(--green-400); }

    .vs-submit {
      width: 100%; background: var(--green-700); color: var(--white);
      padding: 1.05rem; border-radius: 99px; font-weight: 800; font-size: 1rem;
      border: none; cursor: pointer; box-shadow: 0 8px 24px rgba(22,101,52,0.35);
      display: flex; align-items: center; justify-content: center; gap: 0.5rem;
      margin-top: 0.4rem; transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
      font-family: var(--font-body);
    }
    .vs-submit:hover { background: var(--green-800); transform: translateY(-2px); box-shadow: 0 14px 30px rgba(22,101,52,0.42); }

    .vs-note { margin-top: 1rem; display: flex; align-items: center; justify-content: center; gap: 0.45rem; font-size: 0.76rem; color: var(--gray-600); text-align: center; }

    /* ── BOTTOM STRIP ── */
    .vs-strip { position: relative; height: 195px; overflow: hidden; }
    .vs-strip img { width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.42) saturate(0.65); }
    .vs-strip-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, rgba(5,46,22,0.88) 0%, transparent 65%);
      display: flex; align-items: center; padding: 2.5rem 3rem; gap: 3rem;
    }
    .vs-strip-stat { color: var(--white); text-align: center; }
    .vs-strip-stat strong { display: block; font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: var(--green-400); }
    .vs-strip-stat span { font-size: 0.76rem; opacity: 0.8; text-transform: uppercase; letter-spacing: 0.08em; }
  `}</style>
);

const PERKS = [
  { icon: "📚", title: "Support Education Programs", desc: "Teach, mentor and guide underprivileged children towards a brighter future." },
  { icon: "🏥", title: "Help in Health Camps", desc: "Assist in free medical check-ups and health awareness drives across villages." },
  { icon: "🤝", title: "Community Drives", desc: "Participate in food drives, cleanliness campaigns and local outreach events." },
  { icon: "💪", title: "Make Real Impact", desc: "See the direct difference your time and skills create in people's lives." },
];

const AVATARS = [
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80",
];

const ROLES = ["Education", "Healthcare", "Women Empowerment", "Food Distribution", "Environment", "Tech Support"];
const AVAIL = ["Weekdays", "Weekends", "Full-Time", "Remote"];
const STATS = [
  { num: "100+", label: "Active Volunteers" },
  { num: "20+", label: "Cities Covered" },
  { num: "15K+", label: "Lives Changed" },
];

export default function VolunteerSection() {
  return (
    <>
      <FontStyle />
      <section className="vs-section" id="volunteer">

        {/* BANNER */}
        <div className="vs-banner">
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&q=80" alt="Volunteers" className="vs-banner-img" />
          <div className="vs-banner-overlay">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="vs-eyebrow">🤝 Join Our Team</span>
              <h1 className="vs-banner-title">Become a <span>Volunteer</span><br />Change a Life</h1>
              <p className="vs-banner-sub">Your time and skills can bring hope to communities across India. Join 100+ volunteers making a difference.</p>
            </motion.div>
          </div>
        </div>

        {/* BODY */}
        <div className="vs-body">

          {/* LEFT */}
          <motion.div className="vs-left" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>

            <div className="vs-img-stack">
              <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80" alt="Volunteers working" className="vs-img-main" />
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80" alt="Community" className="vs-img-accent" />
              <motion.div className="vs-float-badge" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}>
                <strong>100+</strong>
                <span>Volunteers</span>
              </motion.div>
            </div>

            {/* Perks */}
            <div className="vs-perks">
              {PERKS.map((p, i) => (
                <motion.div key={i} className="vs-perk" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="vs-perk-icon">{p.icon}</div>
                  <div>
                    <div className="vs-perk-title">{p.title}</div>
                    <div className="vs-perk-desc">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Volunteer avatars */}
            <div className="vs-volunteers-row">
              <div className="vs-avatars">
                {AVATARS.map((src, i) => (
                  <img key={i} src={src} alt="Volunteer" className="vs-avatar" />
                ))}
              </div>
              <div className="vs-vol-text">
                <strong>Join 100+ Volunteers</strong>
                <span>From across 20+ cities in India</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div className="vs-form-card" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.1 }}>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80" alt="Volunteer team" className="vs-form-cover" />
            <div className="vs-form-inner">
              <h2 className="vs-form-title">Apply to Volunteer</h2>
              <p className="vs-form-sub">Fill in your details and we'll reach out within 48 hours to get you started.</p>

              {/* Role chips */}
              <div style={{ marginBottom: "0.5rem" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--green-800)", marginBottom: "0.5rem" }}>Area of Interest</div>
                <div className="vs-roles">
                  {ROLES.map((r, i) => (
                    <span key={i} className="vs-role-chip">{r}</span>
                  ))}
                </div>
              </div>

              <div className="vs-two-col">
                <div className="vs-field"><label>Full Name</label><input type="text" placeholder="Priya Sharma" /></div>
                <div className="vs-field"><label>Age</label><input type="number" placeholder="24" /></div>
              </div>
              <div className="vs-field"><label>Email Address</label><input type="email" placeholder="priya@email.com" /></div>
              <div className="vs-field"><label>Phone Number</label><input type="tel" placeholder="+91 98765 43210" /></div>
              <div className="vs-field"><label>City / Location</label><input type="text" placeholder="New Delhi" /></div>

              {/* Availability */}
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--green-800)", marginBottom: "0.5rem" }}>Availability</div>
                <div className="vs-avail-row">
                  {AVAIL.map((a, i) => (
                    <span key={i} className="vs-avail-chip">{a}</span>
                  ))}
                </div>
              </div>

              <div className="vs-field"><label>Why Do You Want to Volunteer?</label><textarea placeholder="Share your motivation and what you hope to contribute..." /></div>

              <motion.button className="vs-submit" type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                🤝 Submit Application
              </motion.button>

              <div className="vs-note">
                <span>✅</span>
                <span>No experience needed · We provide full training & support</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="vs-strip">
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1400&q=80" alt="Community" />
          <div className="vs-strip-overlay">
            {STATS.map((s, i) => (
              <motion.div key={i} className="vs-strip-stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}