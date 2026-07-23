import React, { useEffect, useRef, useState } from "react";

// ─── Global Styles ────────────────────────────────────────────────────────────
const globalCSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #f7f5f0;
    --ink: #1a1814;
    --ink-muted: #6b6660;
    --accent: #c9703a;
    --accent-light: #f0e4d8;
    --border: #ddd9d0;
    --white: #ffffff;
    --serif: 'Cormorant Garamond', Georgia, serif;
    --mono: 'DM Mono', 'Courier New', monospace;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--serif);
    font-size: 18px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  a { color: inherit; text-decoration: none; }

  /* ─── Header ─── */
  .header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: rgba(247, 245, 240, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--border);
    padding: 0 48px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
  }

  .header.hidden {
    transform: translateY(-100%);
    opacity: 0;
  }

  .header-logo {
    font-family: var(--serif);
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--ink);
  }

  .header-logo span {
    color: var(--accent);
  }

  .header-nav {
    display: flex;
    align-items: center;
    gap: 36px;
  }

  .nav-internal {
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-muted);
    transition: color 0.2s;
    cursor: pointer;
  }

  .nav-internal:hover { color: var(--accent); }

  .nav-divider {
    width: 1px;
    height: 20px;
    background: var(--border);
  }

  .nav-social {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .nav-social a {
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    color: var(--ink-muted);
    transition: color 0.2s;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .nav-social a:hover { color: var(--accent); }

  /* ─── Landing ─── */
  .landing {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 96px 48px 64px;
    position: relative;
    overflow: hidden;
  }

  .landing::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--accent-light) 0%, transparent 70%);
    pointer-events: none;
  }

  .landing-inner {
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 72px;
  }

  .avatar-wrap {
    flex-shrink: 0;
    position: relative;
  }

  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--border);
    display: block;
    background: var(--accent-light);
  }

  .avatar-placeholder {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-light), #e8d5c4);
    border: 3px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--serif);
    font-size: 3.5rem;
    font-weight: 300;
    color: var(--accent);
    letter-spacing: -0.02em;
  }

  .avatar-ring {
    position: absolute;
    top: -8px; left: -8px; right: -8px; bottom: -8px;
    border-radius: 50%;
    border: 1px dashed var(--border);
    animation: spin 30s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  .landing-text { flex: 1; }

  .landing-eyebrow {
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
  }

  .landing-name {
    font-family: var(--serif);
    font-size: clamp(2.8rem, 5vw, 4.2rem);
    font-weight: 300;
    line-height: 1.1;
    color: var(--ink);
    margin-bottom: 20px;
    letter-spacing: -0.01em;
  }

  .landing-name em {
    font-style: italic;
    color: var(--accent);
  }

  .landing-bio {
    font-size: 1.1rem;
    color: var(--ink-muted);
    line-height: 1.75;
    max-width: 480px;
    font-weight: 300;
  }

  .landing-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 32px;
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    border-bottom: 1px solid var(--accent);
    padding-bottom: 3px;
    cursor: pointer;
    transition: gap 0.2s;
  }

  .landing-cta:hover { gap: 14px; }

  /* ─── Section Shared ─── */
  .section {
    padding: 96px 48px;
    max-width: 960px;
    margin: 0 auto;
  }

  .section-label {
    font-family: var(--mono);
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px;
  }

  .section-title {
    font-family: var(--serif);
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 300;
    line-height: 1.15;
    color: var(--ink);
    margin-bottom: 48px;
    letter-spacing: -0.01em;
  }

  .section-divider {
    width: 100%;
    height: 1px;
    background: var(--border);
    margin-bottom: 64px;
  }

  /* ─── Projects ─── */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(26, 24, 20, 0.08);
  }

  .card-image {
    width: 100%;
    height: 180px;
    background: linear-gradient(135deg, var(--accent-light) 0%, #e2d4c8 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--serif);
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--accent);
    letter-spacing: 0.02em;
    border-bottom: 1px solid var(--border);
    position: relative;
    overflow: hidden;
  }

  .card-image::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(201, 112, 58, 0.08));
  }

  .card-body { padding: 24px; }

  .card-tag {
    font-family: var(--mono);
    font-size: 0.62rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px;
  }

  .card-title {
    font-family: var(--serif);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .card-desc {
    font-size: 0.92rem;
    color: var(--ink-muted);
    line-height: 1.6;
    font-weight: 300;
  }

  .card-footer {
    display: flex;
    gap: 12px;
    padding: 16px 24px;
    border-top: 1px solid var(--border);
  }

  .card-link {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-muted);
    transition: color 0.2s;
  }

  .card-link:hover { color: var(--accent); }

  /* ─── Contact ─── */
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 64px;
    align-items: start;
  }

  .contact-info p {
    font-size: 1rem;
    color: var(--ink-muted);
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  .contact-info-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: var(--mono);
    font-size: 0.78rem;
    color: var(--ink-muted);
    letter-spacing: 0.04em;
    margin-bottom: 12px;
  }

  .contact-info-item span.dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }

  .form { display: flex; flex-direction: column; gap: 20px; }

  .field { display: flex; flex-direction: column; gap: 6px; }

  .field label {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink-muted);
  }

  .field input,
  .field textarea {
    font-family: var(--serif);
    font-size: 1rem;
    color: var(--ink);
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 3px;
    padding: 12px 16px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    resize: none;
    line-height: 1.6;
  }

  .field input:focus,
  .field textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(201, 112, 58, 0.12);
  }

  .field input.error,
  .field textarea.error {
    border-color: #c0392b;
    box-shadow: 0 0 0 3px rgba(192, 57, 43, 0.1);
  }

  .field-error {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.06em;
    color: #c0392b;
    margin-top: 2px;
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    align-self: flex-start;
    background: var(--ink);
    color: var(--bg);
    border: none;
    padding: 14px 32px;
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 2px;
    transition: background 0.2s, transform 0.15s;
  }

  .submit-btn:hover { background: var(--accent); }
  .submit-btn:active { transform: scale(0.98); }

  .form-success {
    background: var(--accent-light);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    padding: 20px 24px;
    border-radius: 3px;
    font-family: var(--serif);
    font-size: 1rem;
    color: var(--ink);
    font-style: italic;
  }

  /* ─── Footer ─── */
  .footer {
    border-top: 1px solid var(--border);
    padding: 32px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer p {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.08em;
    color: var(--ink-muted);
  }

  @media (max-width: 700px) {
    .landing-inner { flex-direction: column; gap: 32px; }
    .projects-grid { grid-template-columns: 1fr; }
    .contact-layout { grid-template-columns: 1fr; }
    .header { padding: 0 20px; }
    .section, .landing { padding-left: 20px; padding-right: 20px; }
  }
`;

// ─── Data ────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    emoji: "✦",
    tag: "Web App",
    title: "Weather Dashboard",
    desc: "A real-time weather application built with React and OpenWeather API, featuring animated forecasts and geolocation.",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    emoji: "◈",
    tag: "Full Stack",
    title: "Task Manager Pro",
    desc: "A full-stack productivity app with drag-and-drop boards, user authentication, and MongoDB persistence.",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    emoji: "⬡",
    tag: "UI / Design",
    title: "Recipe Finder",
    desc: "An elegant recipe discovery app with advanced filtering, favourites synced via localStorage, and responsive layout.",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    emoji: "◎",
    tag: "React Native",
    title: "Habit Tracker",
    desc: "A mobile-first habit tracking app with streak counters, push notifications, and beautiful progress visualisations.",
    github: "https://github.com",
    live: "https://example.com",
  },
];

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header${hidden ? " hidden" : ""}`}>
      <div className="header-logo">
        Kalyani<span>.</span>
      </div>
      <nav className="header-nav">
        <span className="nav-internal" onClick={() => scrollTo("landing")}>Home</span>
        <span className="nav-internal" onClick={() => scrollTo("projects")}>Projects</span>
        <span className="nav-internal" onClick={() => scrollTo("contact")}>Contact</span>
        <div className="nav-divider" />
        <div className="nav-social">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a href="mailto:kalyani@example.com">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email
          </a>
        </div>
      </nav>
    </header>
  );
}

// ─── Landing ──────────────────────────────────────────────────────────────────
function Landing() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="landing" id="landing">
      <div className="landing-inner">
        <div className="avatar-wrap">
          <div className="avatar-ring" />
          <div className="avatar-placeholder">D</div>
        </div>
        <div className="landing-text">
          <p className="landing-eyebrow">Hello, I'm</p>
          <h1 className="landing-name">Kalyani <em>Patil</em></h1>
          <p className="landing-bio">
            A passionate front-end developer and designer who loves crafting clean,
            thoughtful digital experiences. I turn ideas into elegant, functional interfaces —
            one component at a time.
          </p>
          <span className="landing-cta" onClick={() => scrollTo("projects")}>
            View my work →
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ background: "var(--white)", padding: "96px 0" }}>
      <div className="section" style={{ padding: "0 48px" }}>
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className="card" key={i}>
              <div className="card-image">{p.emoji}</div>
              <div className="card-body">
                <p className="card-tag">{p.tag}</p>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
              </div>
              <div className="card-footer">
                <a className="card-link" href={p.github} target="_blank" rel="noreferrer">↗ GitHub</a>
                <a className="card-link" href={p.live} target="_blank" rel="noreferrer">↗ Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = "Name is required.";
    if (!fields.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!fields.type) e.type = "Please select an enquiry type.";
    if (!fields.message.trim()) e.message = "Message is required.";
    else if (fields.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((err) => ({ ...err, [e.target.name]: "" }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        ✦ Thank you, {fields.name}! Your message has been received. I'll get back to you shortly.
      </div>
    );
  }

  return (
    <div className="form">
      <div className="field">
        <label>Full Name *</label>
        <input
          name="name"
          value={fields.name}
          onChange={handleChange}
          placeholder="Kalyani Patil"
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>
      <div className="field">
        <label>Email Address *</label>
        <input
          name="email"
          type="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="kalyani@example.com"
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>
      <div className="field">
        <label>Enquiry Type *</label>
        <select
          name="type"
          value={fields.type}
          onChange={handleChange}
          className={errors.type ? "error" : ""}
          style={{
            fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--ink)",
            background: "var(--white)", border: "1px solid var(--border)",
            borderRadius: "3px", padding: "12px 16px", outline: "none",
            appearance: "none", cursor: "pointer",
            borderColor: errors.type ? "#c0392b" : undefined,
          }}
        >
          <option value="">Select one…</option>
          <option value="freelance">Freelance Project</option>
          <option value="job">Job Opportunity</option>
          <option value="collab">Collaboration</option>
          <option value="other">Other</option>
        </select>
        {errors.type && <span className="field-error">{errors.type}</span>}
      </div>
      <div className="field">
        <label>Message *</label>
        <textarea
          name="message"
          rows={5}
          value={fields.message}
          onChange={handleChange}
          placeholder="Tell me about your project…"
          className={errors.message ? "error" : ""}
        />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Send Message ✦
      </button>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section" style={{ maxWidth: "960px" }}>
      <p className="section-label">Get In Touch</p>
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-layout">
        <div className="contact-info">
          <p>
            I'm currently open to freelance projects, full-time opportunities,
            and creative collaborations. Drop me a message and I'll get back to you within 24 hours.
          </p>
          <div className="contact-info-item">
            <span className="dot" />
            <span>Based in Pune, India</span>
          </div>
          <div className="contact-info-item">
            <span className="dot" />
            <span>kalyani@example.com</span>
          </div>
          <div className="contact-info-item">
            <span className="dot" />
            <span>Available for remote work</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Kalyani Patil — All rights reserved.</p>
      <p>Built with React ✦</p>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalCSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Landing />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
