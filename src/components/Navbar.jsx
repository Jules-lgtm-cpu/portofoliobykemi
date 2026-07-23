import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "À propos", href: "#apropos" },
    { label: "Projets", href: "#projets" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 32px",
      background: scrolled ? "rgba(245,244,239,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72,
      }}>
        <a href="#" style={{
          fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 20,
          color: "var(--black)", letterSpacing: "-0.03em",
        }}>
          By<span style={{ color: "var(--accent)" }}>Kemi</span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 40 }} className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
              color: "var(--muted)", transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--black)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" style={{
            padding: "9px 22px", borderRadius: 6,
            background: "var(--accent)", color: "#fff",
            fontFamily: "var(--font-head)", fontSize: 13, fontWeight: 700,
            letterSpacing: "-0.01em", transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Me contacter
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="burger" style={{
          display: "none", background: "none", border: "none",
          color: "var(--black)", fontSize: 24, cursor: "pointer",
        }}>
          <i className={`bi bi-${open ? "x-lg" : "list"}`} />
        </button>
      </div>

      {open && (
        <div style={{
          background: "var(--bg)", borderTop: "1px solid var(--border)",
          padding: "20px 32px 28px",
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "14px 0",
              fontFamily: "var(--font-head)", fontSize: 18, fontWeight: 700,
              color: "var(--black)", borderBottom: "1px solid var(--border)",
            }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            display: "block", marginTop: 20, padding: "13px",
            textAlign: "center", borderRadius: 6,
            background: "var(--black)", color: "var(--bg)",
            fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 700,
          }}>Me contacter</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
