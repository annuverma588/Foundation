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

    .blog-section {
      font-family: var(--font-body);
      background: var(--white);
      padding: 7rem 1.5rem;
      position: relative;
      overflow: hidden;
    }

    /* background blobs */
    .blog-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(90px);
      opacity: 0.08;
      pointer-events: none;
    }

    /* ── HEADING ── */
    .blog-header { text-align: center; max-width: 620px; margin: 0 auto 4.5rem; }
    .blog-eyebrow {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-size: 0.78rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
      color: var(--green-700); background: var(--green-100);
      padding: 0.35rem 1rem; border-radius: 99px; margin-bottom: 1rem;
    }
    .blog-title {
      font-family: var(--font-display);
      font-size: clamp(2.2rem, 4vw, 3.4rem);
      font-weight: 900; color: var(--green-950); line-height: 1.12; margin-bottom: 1rem;
    }
    .blog-title span { color: var(--green-600); }
    .blog-subtitle { color: var(--gray-600); line-height: 1.75; font-size: 1rem; }

    /* ── FEATURED CARD (first post) ── */
    .blog-featured {
      max-width: 1280px; margin: 0 auto 2.5rem;
      border-radius: 2rem; overflow: hidden;
      display: grid; grid-template-columns: 1.2fr 1fr;
      box-shadow: 0 20px 60px rgba(22,101,52,0.13);
      background: var(--white);
      border: 1px solid var(--green-200);
    }
    @media (max-width: 850px) { .blog-featured { grid-template-columns: 1fr; } }

    .blog-featured-img-wrap { position: relative; overflow: hidden; min-height: 380px; }
    .blog-featured-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; }
    .blog-featured:hover .blog-featured-img { transform: scale(1.05); }
    .blog-featured-tag {
      position: absolute; top: 1.25rem; left: 1.25rem;
      background: var(--green-700); color: var(--white);
      font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
      padding: 0.3rem 0.9rem; border-radius: 99px;
    }

    .blog-featured-body {
      padding: 3rem 2.75rem;
      display: flex; flex-direction: column; justify-content: center; gap: 1.25rem;
    }
    .blog-meta {
      display: flex; align-items: center; gap: 0.75rem;
      font-size: 0.8rem; color: var(--gray-400);
    }
    .blog-meta-dot { width: 4px; height: 4px; background: var(--gray-400); border-radius: 50%; }
    .blog-featured-title {
      font-family: var(--font-display);
      font-size: clamp(1.6rem, 2.5vw, 2.2rem);
      font-weight: 900; color: var(--green-950); line-height: 1.2;
    }
    .blog-featured-desc { color: var(--gray-600); line-height: 1.8; font-size: 0.97rem; }
    .blog-read-btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: var(--green-700); color: var(--white);
      padding: 0.8rem 1.75rem; border-radius: 99px;
      font-weight: 600; font-size: 0.88rem; border: none; cursor: pointer;
      transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 6px 20px rgba(22,101,52,0.3);
      text-decoration: none; width: fit-content;
    }
    .blog-read-btn:hover { background: var(--green-800); transform: translateY(-2px); box-shadow: 0 12px 28px rgba(22,101,52,0.4); }

    /* ── CARDS GRID ── */
    .blog-grid {
      max-width: 1280px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.75rem;
    }
    @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 580px) { .blog-grid { grid-template-columns: 1fr; } }

    .blog-card {
      background: var(--white);
      border: 1px solid var(--green-200);
      border-radius: 1.75rem; overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      transition: box-shadow 0.3s, transform 0.3s;
      cursor: pointer;
    }
    .blog-card:hover { box-shadow: 0 20px 50px rgba(22,101,52,0.16); transform: translateY(-6px); }

    .blog-card-img-wrap { position: relative; overflow: hidden; }
    .blog-card-img { width: 100%; height: 210px; object-fit: cover; display: block; transition: transform 0.5s; }
    .blog-card:hover .blog-card-img { transform: scale(1.08); }

    .blog-card-category {
      position: absolute; top: 1rem; left: 1rem;
      background: var(--green-100); color: var(--green-800);
      font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
      padding: 0.25rem 0.75rem; border-radius: 99px;
      border: 1px solid var(--green-200);
    }

    .blog-card-body { padding: 1.6rem; }
    .blog-card-meta {
      display: flex; align-items: center; gap: 0.6rem;
      font-size: 0.78rem; color: var(--gray-400); margin-bottom: 0.65rem;
    }
    .blog-card-title {
      font-family: var(--font-display); font-size: 1.15rem; font-weight: 700;
      color: var(--green-950); line-height: 1.3; margin-bottom: 0.6rem;
    }
    .blog-card-desc { font-size: 0.87rem; color: var(--gray-600); line-height: 1.7; margin-bottom: 1.1rem; }

    .blog-card-footer {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 1rem; border-top: 1px solid var(--green-100);
    }
    .blog-card-author { display: flex; align-items: center; gap: 0.5rem; }
    .blog-author-avatar {
      width: 30px; height: 30px; border-radius: 50%; object-fit: cover;
      border: 2px solid var(--green-200);
    }
    .blog-author-name { font-size: 0.78rem; font-weight: 600; color: var(--green-900); }
    .blog-card-link {
      display: inline-flex; align-items: center; gap: 0.3rem;
      font-size: 0.82rem; font-weight: 700; color: var(--green-700);
      text-decoration: none; transition: gap 0.2s;
    }
    .blog-card-link:hover { gap: 0.55rem; }

    /* ── BOTTOM CTA ── */
    .blog-cta-wrap { text-align: center; margin-top: 4rem; }
    .blog-cta-btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: var(--green-50); color: var(--green-800);
      padding: 0.85rem 2rem; border-radius: 99px;
      font-weight: 600; font-size: 0.92rem;
      border: 2px solid var(--green-200); cursor: pointer;
      transition: background 0.2s, transform 0.2s, border-color 0.2s;
      text-decoration: none;
    }
    .blog-cta-btn:hover { background: var(--green-100); border-color: var(--green-400); transform: translateY(-2px); }
  `}</style>
);

const blogPosts = [
  {
    id: 1,
    title: "Empowering Rural Education",
    desc: "हम ग्रामीण क्षेत्रों में बच्चों को बेहतर शिक्षा देने के लिए लगातार काम कर रहे हैं।",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&q=80",
    date: "March 2026",
    category: "Education",
    author: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "Health Awareness Drive",
    desc: "हमने कई गांवों में मुफ्त हेल्थ चेकअप कैंप आयोजित किए हैं।",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80",
    date: "Feb 2026",
    category: "Healthcare",
    author: "Rahul Mehta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    readTime: "3 min read",
  },
  {
    id: 3,
    title: "Women Empowerment Program",
    desc: "महिलाओं को आत्मनिर्भर बनाने के लिए स्किल ट्रेनिंग दी जा रही है।",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
    date: "Jan 2026",
    category: "Empowerment",
    author: "Anita Verma",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Food Drive Success Story",
    desc: "हमारे फूड ड्राइव ने 500 से अधिक परिवारों तक पहुंचकर उन्हें राशन किट प्रदान किए।",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=700&q=80",
    date: "Dec 2025",
    category: "Nutrition",
    author: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "Volunteer Stories 2025",
    desc: "हमारे वालंटियर्स ने इस साल कुछ अविश्वसनीय काम किए। उनकी कहानियां पढ़ें।",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700&q=80",
    date: "Nov 2025",
    category: "Community",
    author: "Rahul Mehta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Clean India Initiative",
    desc: "स्वच्छ भारत अभियान के तहत हमने 10 गांवों में सफाई अभियान चलाया।",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=700&q=80",
    date: "Oct 2025",
    category: "Environment",
    author: "Anita Verma",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    readTime: "4 min read",
  },
];

const [featured, ...rest] = blogPosts;

export default function BlogSection() {
  return (
    <>
      <FontStyle />
      <section className="blog-section" id="blog">

        {/* Background blobs */}
        <div className="blog-blob" style={{ width: 500, height: 500, background: "#16a34a", top: -150, right: -150 }} />
        <div className="blog-blob" style={{ width: 400, height: 400, background: "#22c55e", bottom: -100, left: -100 }} />

        {/* HEADING */}
        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="blog-eyebrow">📰 Our Blog</span>
          <h2 className="blog-title">Stories of <span>Impact</span> &<br />Inspiration</h2>
          <p className="blog-subtitle">Latest updates, stories and real-world impact from our NGO across India.</p>
        </motion.div>

        {/* FEATURED POST */}
        <motion.div
          className="blog-featured"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="blog-featured-img-wrap">
            <img src={featured.img} alt={featured.title} className="blog-featured-img" />
            <span className="blog-featured-tag">✨ Featured</span>
          </div>
          <div className="blog-featured-body">
            <div className="blog-meta">
              <span>{featured.category}</span>
              <span className="blog-meta-dot" />
              <span>{featured.date}</span>
              <span className="blog-meta-dot" />
              <span>{featured.readTime}</span>
            </div>
            <h3 className="blog-featured-title">{featured.title}</h3>
            <p className="blog-featured-desc">{featured.desc}</p>
            <div className="blog-card-author">
              <img src={featured.avatar} alt={featured.author} className="blog-author-avatar" />
              <span className="blog-author-name">{featured.author}</span>
            </div>
            <a href="#" className="blog-read-btn">Read Full Story →</a>
          </div>
        </motion.div>

        {/* CARDS GRID */}
        <div className="blog-grid">
          {rest.map((post, i) => (
            <motion.div
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="blog-card-img-wrap">
                <img src={post.img} alt={post.title} className="blog-card-img" />
                <span className="blog-card-category">{post.category}</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span className="blog-meta-dot" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-desc">{post.desc}</p>
                <div className="blog-card-footer">
                  <div className="blog-card-author">
                    <img src={post.avatar} alt={post.author} className="blog-author-avatar" />
                    <span className="blog-author-name">{post.author}</span>
                  </div>
                  <a href="#" className="blog-card-link">Read More →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="blog-cta-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#" className="blog-cta-btn">View All Articles →</a>
        </motion.div>

      </section>
    </>
  );
}