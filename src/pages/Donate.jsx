import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    .dn-section {
      font-family: var(--font-body);
      background: var(--white);
      position: relative;
      overflow: hidden;
      padding: 0;
    }

    /* ── HERO BANNER ── */
    .dn-banner { position: relative; height: 300px; overflow: hidden; }
    .dn-banner-img { width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.4); }
    .dn-banner-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(5,46,22,0.9) 0%, rgba(22,163,74,0.5) 100%);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; padding: 2rem;
    }
    .dn-eyebrow {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-size: 0.78rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--green-400); background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      padding: 0.35rem 1rem; border-radius: 99px; margin-bottom: 1rem;
    }
    .dn-banner-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 3.4rem);
      font-weight: 900; color: var(--white); line-height: 1.1; margin-bottom: 0.65rem;
    }
    .dn-banner-title span { color: var(--green-400); }
    .dn-banner-sub { color: rgba(255,255,255,0.8); font-size: 0.97rem; max-width: 500px; line-height: 1.7; }

    /* ── BODY ── */
    .dn-body {
      max-width: 1280px; margin: 0 auto;
      padding: 5rem 1.5rem 6rem;
      display: grid; grid-template-columns: 1fr 1.1fr;
      gap: 4rem; align-items: start;
    }
    @media (max-width: 960px) { .dn-body { grid-template-columns: 1fr; gap: 3rem; } }

    /* ── LEFT — IMPACT INFO ── */
    .dn-left { display: flex; flex-direction: column; gap: 2rem; }

    .dn-img-stack { position: relative; }
    .dn-img-main {
      width: 100%; height: 280px; object-fit: cover; display: block;
      border-radius: 1.75rem 1.75rem 1.75rem 0;
      box-shadow: 0 30px 60px -10px rgba(22,101,52,0.22);
    }
    .dn-img-accent {
      position: absolute; bottom: -1.75rem; right: -1.75rem;
      width: 140px; height: 140px; object-fit: cover;
      border-radius: 1.25rem; border: 5px solid var(--white);
      box-shadow: 0 12px 30px rgba(0,0,0,0.14);
    }
    .dn-float-badge {
      position: absolute; top: 1.25rem; left: -1.25rem;
      background: var(--green-700); color: var(--white);
      padding: 0.8rem 1.25rem; border-radius: 1rem;
      box-shadow: 0 10px 30px rgba(22,101,52,0.4);
      font-family: var(--font-display);
    }
    .dn-float-badge strong { display: block; font-size: 1.55rem; font-weight: 900; line-height: 1; }
    .dn-float-badge span { font-size: 0.7rem; opacity: 0.85; letter-spacing: 0.08em; text-transform: uppercase; }

    /* Impact cards */
    .dn-impact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; margin-top: 2.5rem; }
    .dn-impact-card {
      background: var(--green-50); border: 1px solid var(--green-200);
      border-radius: 1.1rem; padding: 1.1rem 1.25rem;
      display: flex; gap: 0.75rem; align-items: flex-start;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .dn-impact-card:hover { box-shadow: 0 8px 24px rgba(22,101,52,0.1); transform: translateY(-3px); }
    .dn-impact-icon {
      width: 40px; height: 40px; background: var(--green-700); color: var(--white);
      border-radius: 0.65rem; display: flex; align-items: center; justify-content: center;
      font-size: 1rem; flex-shrink: 0;
    }
    .dn-impact-label { font-size: 0.75rem; color: var(--gray-600); line-height: 1.4; }
    .dn-impact-value { font-size: 0.92rem; font-weight: 700; color: var(--green-900); margin-top: 0.1rem; }

    /* Trust badges */
    .dn-trust-row { display: flex; gap: 0.65rem; flex-wrap: wrap; }
    .dn-trust-badge {
      display: inline-flex; align-items: center; gap: 0.4rem;
      background: var(--green-100); border: 1px solid var(--green-200);
      border-radius: 99px; padding: 0.4rem 0.9rem;
      font-size: 0.78rem; font-weight: 600; color: var(--green-800);
    }

    /* ── RIGHT — DONATE CARD ── */
    .dn-card {
      background: var(--white); border: 1px solid var(--green-200);
      border-radius: 2rem; box-shadow: 0 20px 60px rgba(22,101,52,0.1);
      overflow: hidden;
    }
    .dn-card-cover { width: 100%; height: 165px; object-fit: cover; display: block; }
    .dn-card-body { padding: 2.25rem; }

    .dn-card-title { font-family: var(--font-display); font-size: 1.6rem; font-weight: 900; color: var(--green-950); margin-bottom: 0.3rem; }
    .dn-card-sub { font-size: 0.87rem; color: var(--gray-600); margin-bottom: 1.75rem; line-height: 1.6; }

    /* Frequency tabs */
    .dn-freq-tabs { display: flex; background: var(--green-50); border: 1px solid var(--green-200); border-radius: 99px; padding: 0.3rem; gap: 0.3rem; margin-bottom: 1.5rem; }
    .dn-freq-tab {
      flex: 1; padding: 0.55rem 1rem; border-radius: 99px;
      font-size: 0.85rem; font-weight: 600; border: none; cursor: pointer;
      color: var(--gray-600); background: transparent;
      transition: all 0.2s;
    }
    .dn-freq-tab.active { background: var(--green-700); color: var(--white); box-shadow: 0 4px 12px rgba(22,101,52,0.3); }

    /* Preset amounts */
    .dn-amounts { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.65rem; margin-bottom: 1.25rem; }
    @media (max-width: 480px) { .dn-amounts { grid-template-columns: 1fr 1fr; } }
    .dn-amt-btn {
      padding: 0.75rem 0.5rem; border-radius: 0.85rem; font-weight: 700;
      font-size: 0.9rem; border: 1.5px solid var(--green-200);
      background: var(--green-50); color: var(--green-800); cursor: pointer;
      transition: all 0.2s; font-family: var(--font-body);
    }
    .dn-amt-btn:hover { border-color: var(--green-500); background: var(--green-100); }
    .dn-amt-btn.active {
      background: var(--green-700); color: var(--white);
      border-color: var(--green-700); box-shadow: 0 4px 14px rgba(22,101,52,0.3);
    }
    .dn-amt-btn .dn-amt-impact { display: block; font-size: 0.62rem; font-weight: 500; opacity: 0.8; margin-top: 0.15rem; }

    /* Custom amount */
    .dn-custom-wrap { position: relative; margin-bottom: 1.25rem; }
    .dn-custom-prefix {
      position: absolute; left: 1rem; top: 50%; transform: translateY(-50%);
      font-weight: 700; color: var(--green-700); font-size: 1.05rem;
    }
    .dn-custom-input {
      width: 100%; padding: 0.85rem 1rem 0.85rem 2.2rem;
      border: 1.5px solid var(--green-200); border-radius: 0.85rem;
      font-family: var(--font-body); font-size: 1rem; font-weight: 600;
      color: var(--gray-800); background: var(--green-50); outline: none;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .dn-custom-input:focus { border-color: var(--green-500); background: var(--white); box-shadow: 0 0 0 3px rgba(34,197,94,0.13); }

    /* Donor info */
    .dn-fields-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 0.8rem; }
    @media (max-width: 480px) { .dn-fields-row { grid-template-columns: 1fr; } }
    .dn-field { display: flex; flex-direction: column; gap: 0.3rem; }
    .dn-field label { font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--green-800); }
    .dn-field input {
      padding: 0.8rem 1rem; border: 1.5px solid var(--green-200);
      border-radius: 0.85rem; font-family: var(--font-body); font-size: 0.91rem;
      color: var(--gray-800); background: var(--green-50); outline: none;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .dn-field input:focus { border-color: var(--green-500); background: var(--white); box-shadow: 0 0 0 3px rgba(34,197,94,0.13); }

    /* Progress bar */
    .dn-progress-wrap { margin-bottom: 1.5rem; }
    .dn-progress-info { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
    .dn-progress-raised { font-family: var(--font-display); font-size: 1.1rem; font-weight: 900; color: var(--green-900); }
    .dn-progress-goal { font-size: 0.8rem; color: var(--gray-600); }
    .dn-progress-track { height: 8px; background: var(--green-100); border-radius: 99px; overflow: hidden; }
    .dn-progress-fill { height: 100%; background: linear-gradient(90deg, var(--green-600), var(--green-400)); border-radius: 99px; transition: width 0.6s ease; }
    .dn-progress-pct { font-size: 0.75rem; color: var(--green-700); font-weight: 700; margin-top: 0.3rem; text-align: right; }

    /* Donate button */
    .dn-submit {
      width: 100%; background: var(--green-700); color: var(--white);
      padding: 1.05rem; border-radius: 99px; font-weight: 800; font-size: 1.05rem;
      border: none; cursor: pointer; box-shadow: 0 8px 24px rgba(22,101,52,0.35);
      display: flex; align-items: center; justify-content: center; gap: 0.5rem;
      margin-top: 0.5rem; transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
      font-family: var(--font-body);
    }
    .dn-submit:hover { background: var(--green-800); transform: translateY(-2px); box-shadow: 0 14px 30px rgba(22,101,52,0.42); }

    /* Secure note */
    .dn-secure {
      margin-top: 1.1rem; display: flex; align-items: center; justify-content: center;
      gap: 0.5rem; font-size: 0.78rem; color: var(--gray-600);
    }

    /* ── BOTTOM STRIP ── */
    .dn-strip {
      position: relative; height: 190px; overflow: hidden;
    }
    .dn-strip img { width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.45) saturate(0.7); }
    .dn-strip-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, rgba(5,46,22,0.85) 0%, transparent 65%);
      display: flex; align-items: center; padding: 2.5rem 3rem; gap: 3rem;
    }
    .dn-strip-stat { color: var(--white); text-align: center; }
    .dn-strip-stat strong { display: block; font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: var(--green-400); }
    .dn-strip-stat span { font-size: 0.78rem; opacity: 0.8; text-transform: uppercase; letter-spacing: 0.08em; }
  `}</style>
);

const IMPACTS = [
  { icon: "📚", label: "₹100 provides", value: "Books for 2 children" },
  { icon: "🏥", label: "₹500 funds", value: "1 health checkup" },
  { icon: "🌾", label: "₹1000 feeds", value: "A family for a week" },
  { icon: "👩‍🎓", label: "₹5000 sponsors", value: "1 month of education" },
];

const PRESETS = [
  { amt: 100, impact: "Books for kids" },
  { amt: 500, impact: "Health checkup" },
  { amt: 1000, impact: "Family meals" },
  { amt: 5000, impact: "Education fund" },
];

const STRIP_STATS = [
  { num: "₹48L+", label: "Raised This Year" },
  { num: "3,200+", label: "Donors" },
  { num: "15K+", label: "Lives Impacted" },
];

export default function DonateSection() {
  const [amount, setAmount] = useState(500);
  const [freq, setFreq] = useState("one-time");

  return (
    <>
      <FontStyle />
      <section className="dn-section" id="donate">

        {/* BANNER */}
        <div className="dn-banner">
          <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1400&q=80" alt="Donation" className="dn-banner-img" />
          <div className="dn-banner-overlay">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="dn-eyebrow">💚 Make a Difference</span>
              <h1 className="dn-banner-title">Your Generosity<br /><span>Changes Lives</span></h1>
              <p className="dn-banner-sub">Every rupee you give creates real, lasting impact in education, health & empowerment.</p>
            </motion.div>
          </div>
        </div>

        {/* BODY */}
        <div className="dn-body">

          {/* LEFT */}
          <motion.div className="dn-left" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>

            <div className="dn-img-stack">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" alt="Community" className="dn-img-main" />
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80" alt="Impact" className="dn-img-accent" />
              <motion.div className="dn-float-badge" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}>
                <strong>₹48L+</strong>
                <span>Raised So Far</span>
              </motion.div>
            </div>

            {/* Impact grid */}
            <div className="dn-impact-grid">
              {IMPACTS.map((item, i) => (
                <motion.div key={i} className="dn-impact-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="dn-impact-icon">{item.icon}</div>
                  <div>
                    <div className="dn-impact-label">{item.label}</div>
                    <div className="dn-impact-value">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="dn-trust-row">
              {["🔒 SSL Secured", "✅ 80G Tax Benefit", "🏆 NGO Certified", "🌿 Transparent Use"].map((t, i) => (
                <span key={i} className="dn-trust-badge">{t}</span>
              ))}
            </div>

          </motion.div>

          {/* RIGHT — DONATE CARD */}
          <motion.div className="dn-card" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.1 }}>
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80" alt="Volunteers" className="dn-card-cover" />
            <div className="dn-card-body">
              <h2 className="dn-card-title">Support Our Cause</h2>
              <p className="dn-card-sub">Choose an amount and help us reach more communities across India.</p>

              {/* Progress bar */}
              <div className="dn-progress-wrap">
                <div className="dn-progress-info">
                  <span className="dn-progress-raised">₹48,32,500 raised</span>
                  <span className="dn-progress-goal">Goal: ₹60,00,000</span>
                </div>
                <div className="dn-progress-track">
                  <div className="dn-progress-fill" style={{ width: "80%" }} />
                </div>
                <div className="dn-progress-pct">80% of goal reached · 3,248 donors</div>
              </div>

              {/* Frequency tabs */}
              <div className="dn-freq-tabs">
                {["one-time", "monthly", "yearly"].map((f) => (
                  <button key={f} className={`dn-freq-tab${freq === f ? " active" : ""}`} onClick={() => setFreq(f)}>
                    {f === "one-time" ? "One-Time" : f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>

              {/* Preset amounts */}
              <div className="dn-amounts">
                {PRESETS.map((p) => (
                  <button key={p.amt} className={`dn-amt-btn${amount === p.amt ? " active" : ""}`} onClick={() => setAmount(p.amt)}>
                    ₹{p.amt.toLocaleString()}
                    <span className="dn-amt-impact">{p.impact}</span>
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="dn-custom-wrap">
                <span className="dn-custom-prefix">₹</span>
                <input
                  type="number"
                  className="dn-custom-input"
                  placeholder="Enter custom amount"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>

              {/* Donor info */}
              <div className="dn-fields-row">
                <div className="dn-field"><label>Full Name</label><input type="text" placeholder="Rahul Sharma" /></div>
                <div className="dn-field"><label>Email Address</label><input type="email" placeholder="rahul@email.com" /></div>
              </div>
              <div className="dn-fields-row">
                <div className="dn-field"><label>Phone</label><input type="tel" placeholder="+91 98765 43210" /></div>
                <div className="dn-field"><label>PAN (for 80G)</label><input type="text" placeholder="ABCDE1234F" /></div>
              </div>

              {/* Submit */}
              <motion.button className="dn-submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                💚 Donate ₹{Number(amount).toLocaleString()} {freq !== "one-time" ? `/ ${freq}` : ""}
              </motion.button>

              <div className="dn-secure">
                <span>🔒</span>
                <span>100% Secure Payment · 80G Tax Benefit Available</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM STATS STRIP */}
        <div className="dn-strip">
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1400&q=80" alt="Community" />
          <div className="dn-strip-overlay">
            {STRIP_STATS.map((s, i) => (
              <motion.div key={i} className="dn-strip-stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
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