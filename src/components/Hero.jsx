import { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";

const TECH_PILLS = [
  { label: "React",       icon: "bi-braces",          top: "6%",  left: "18%", dur: 4.2, delay: 0    },
  { label: "Laravel",     icon: "bi-layers",           top: "22%", left: "54%", dur: 5.1, delay: 0.7  },
  { label: "PHP",         icon: "bi-code-slash",       top: "16%", left: "0%",  dur: 4.7, delay: 1.4  },
  { label: "JavaScript",  icon: "bi-lightning-charge", top: "46%", left: "34%", dur: 3.9, delay: 0.3  },
  { label: "WordPress",   icon: "bi-globe2",           top: "63%", left: "6%",  dur: 5.3, delay: 1.1  },
  { label: "MySQL",       icon: "bi-database",         top: "76%", left: "50%", dur: 4.1, delay: 0.5  },
  { label: "HTML / CSS",  icon: "bi-palette",          top: "38%", left: "58%", dur: 4.9, delay: 2.0  },
  { label: "Git",         icon: "bi-git",              top: "86%", left: "22%", dur: 3.6, delay: 1.7  },
];

export default function Hero() {
  const [countRef, count] = useCounter(7, 1200);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      padding: "0 32px",
      display: "flex", alignItems: "center",
      borderBottom: "1px solid var(--border)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", width: "100%",
        paddingTop: 80, paddingBottom: 48,
        position: "relative", zIndex: 1,
      }}>

        {/* Meta bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 56, paddingBottom: 20,
          borderBottom: "1px solid var(--border)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
            color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase",
          }}>
            Développeur Web Fullstack
          </span>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11,
            color: "var(--muted)", letterSpacing: "0.08em",
          }}>
            Bénin · 2026
          </span>
        </div>

        {/* Headline + floating icons */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 400px",
          gap: 40,
          alignItems: "center",
          marginBottom: 52,
        }} className="hero-main-grid">

          <h1 style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(56px, 9.5vw, 130px)",
            fontWeight: 800, lineHeight: 0.9,
            letterSpacing: "-0.055em",
            color: "var(--black)",
          }}>
            {[
              { text: "AZA Jules", accent: false },
              { text: "Kemi.",     accent: true  },
            ].map((w, i) => (
              <span key={i} style={{ display: "block", overflow: "hidden", lineHeight: 1.05 }}>
                <span style={{
                  display: "block",
                  color: w.accent ? "var(--accent)" : "var(--black)",
                  transform: visible ? "translateY(0)" : "translateY(110%)",
                  opacity: visible ? 1 : 0,
                  transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.18 + i * 0.14}s, opacity 0.5s ease ${0.18 + i * 0.14}s`,
                }}>
                  {w.text}
                </span>
              </span>
            ))}
          </h1>

          {/* Floating tech pills */}
          <div style={{
            position: "relative",
            height: 340,
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.7s",
          }} className="hero-icons-col">
            {TECH_PILLS.map((item, i) => (
              <div key={i} style={{
                position: "absolute",
                top: item.top,
                left: item.left,
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 18px",
                borderRadius: 99,
                border: "1px solid rgba(13,13,13,0.1)",
                background: "rgba(245,244,239,0.85)",
                backdropFilter: "blur(10px)",
                whiteSpace: "nowrap",
                animation: `float${["A","B","C"][i % 3]} ${item.dur}s ease-in-out ${item.delay}s infinite`,
                boxShadow: "0 4px 20px rgba(13,13,13,0.06)",
              }}>
                <i className={`bi ${item.icon}`} style={{ fontSize: 13, color: "var(--accent)" }} />
                <span style={{
                  fontFamily: "var(--font-head)", fontSize: 12, fontWeight: 700,
                  color: "var(--black)", letterSpacing: "-0.02em",
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile pills row — visible only on small screens */}
        <div className="hero-pills-mobile" style={{
          display: "none",
          overflowX: "auto", gap: 10,
          paddingBottom: 4, marginBottom: 36,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.5s",
        }}>
          {TECH_PILLS.map((item, i) => (
            <div key={i} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "9px 16px", borderRadius: 99,
              border: "1px solid rgba(13,13,13,0.1)",
              background: "rgba(245,244,239,0.9)",
              whiteSpace: "nowrap", flexShrink: 0,
            }}>
              <i className={`bi ${item.icon}`} style={{ fontSize: 12, color: "var(--accent)" }} />
              <span style={{
                fontFamily: "var(--font-head)", fontSize: 12, fontWeight: 700,
                color: "var(--black)", letterSpacing: "-0.02em",
              }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Separator + description / CTAs */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(22px)",
          transition: "opacity 0.7s ease 0.56s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.56s",
        }}>
          <div style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 36,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48, alignItems: "center",
          }} className="hero-sub-grid">
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18,
              color: "var(--muted)", lineHeight: 1.8, maxWidth: 460,
            }}>
              Je construis des sites et applications web propres, rapides et qui servent vraiment à quelque chose.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }} className="hero-cta">
              <a href="#projets" style={{
                padding: "14px 30px", borderRadius: 6,
                background: "var(--accent)", color: "#fff",
                fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 700,
                letterSpacing: "-0.02em", display: "inline-block",
                transition: "opacity 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1";   e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
              >
                Voir les projets
              </a>
              <a href="#contact" style={{
                padding: "14px 30px", borderRadius: 6,
                border: "1px solid var(--border)", color: "var(--muted)",
                fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 600,
                display: "inline-block",
                transition: "all 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(13,13,13,0.3)"; e.currentTarget.style.color = "var(--black)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)";       e.currentTarget.style.color = "var(--muted)";  e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%",
        transform: "translateX(-50%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 1.3s",
      }}>
        <div style={{
          width: 1, height: 44,
          background: "linear-gradient(to bottom, transparent, rgba(13,13,13,0.25))",
          animation: "scrollDrop 1.8s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-11px) rotate(1deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(-4px) rotate(-0.5deg); }
          50%       { transform: translateY(9px) rotate(0.5deg); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(5px) rotate(0.5deg); }
          50%       { transform: translateY(-9px) rotate(-1deg); }
        }
        @keyframes scrollDrop {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          40%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
          60%  { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
        }
        @media (max-width: 640px) {
          .hero-main-grid { grid-template-columns: 1fr !important; }
          .hero-icons-col { display: none !important; }
          .hero-pills-mobile { display: flex !important; }
        }
        @media (max-width: 768px) {
          .hero-sub-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-cta { justify-content: flex-start !important; }
          .hero-stats { grid-template-columns: 1fr !important; }
          .hero-stats > div { border-right: none !important; padding-left: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
