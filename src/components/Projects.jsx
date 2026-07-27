import { useState } from "react";
import FadeIn from "./FadeIn";

const PROJECTS = [
  {
    num: "01",
    title: "RestaurantApp",
    desc: "Site vitrine restaurant complet : hero, menu interactif, réservation en ligne, galerie et contact.",
    tags: ["HTML/CSS", "JavaScript"],
    year: "2026",
    demo: "https://restaurantapp-plum-one.vercel.app",
    github: "https://github.com/Jules-lgtm-cpu/restaurantapp",
    color: "#1a0a0a",
    image: "/LeBaobab.webp",
    featured: true,
  },
  {
    num: "02",
    title: "FashionStore",
    desc: "Boutique de mode africaine en ligne : catalogue produits, filtres par collection et commande via WhatsApp.",
    tags: ["React", "JavaScript"],
    year: "2026",
    demo: "https://fashionstore-nu.vercel.app",
    github: "#",
    color: "#1a0a0f",
  },
  {
    num: "03",
    title: "BudgetWise",
    desc: "Application de finances personnelles : suivi des dépenses, budget mensuel et graphiques interactifs.",
    tags: ["React", "JavaScript"],
    year: "2026",
    demo: "https://budgetwise-delta.vercel.app",
    github: "#",
    color: "#0a1f2e",
  },
  {
    num: "04",
    title: "Bénin Évasion",
    desc: "Site vitrine d'une agence de tourisme béninoise : destinations, circuits, réservations et galerie immersive.",
    tags: ["React", "JavaScript"],
    year: "2026",
    demo: "https://benievasion.vercel.app",
    github: "https://github.com/Jules-lgtm-cpu/benievasion",
    color: "#1b3a2d",
  },
  {
    num: "05",
    title: "OriGlow",
    desc: "E-commerce de cosmétiques naturels africains : catalogue, fiches produits, panier et paiement mobile.",
    tags: ["React", "JavaScript"],
    year: "2026",
    demo: "#",
    github: "#",
    color: "#2e1a0a",
  },
];

const FILTERS = ["Tous", "React", "HTML/CSS", "JavaScript", "Laravel", "PHP"];

function Placeholder({ title, color }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: color,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)",
      }} />
      <div style={{ position: "absolute", top: 16, left: 16, right: 16, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.1)" }} />
      <div style={{ position: "absolute", top: 28, left: 16, right: 40, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", top: 38, left: 16, right: 60, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.04)" }} />
      <span style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
        color: "rgba(255,255,255,0.2)", letterSpacing: "0.12em",
        textTransform: "uppercase", position: "relative", zIndex: 1,
      }}>
        {title}
      </span>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(active));
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section id="projets" style={{ padding: "120px 32px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <FadeIn delay={0}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: 0 }}>
              <div>
                <h2 style={{
                  fontFamily: "var(--font-head)",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  fontWeight: 800, lineHeight: 1.02,
                  letterSpacing: "-0.04em", color: "var(--black)", marginBottom: 14,
                }}>
                  Mon portfolio.
                </h2>
                <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: 480, fontFamily: "var(--font-body)" }}>
                  Quelques projets récents dont je suis fier, du site vitrine à l'application web complexe.
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {FILTERS.map(f => (
                  <button key={f} onClick={() => setActive(f)} style={{
                    padding: "7px 16px", borderRadius: 4, border: "1px solid",
                    borderColor: active === f ? "var(--black)" : "var(--border)",
                    background: active === f ? "var(--black)" : "transparent",
                    color: active === f ? "var(--bg)" : "var(--muted)",
                    fontFamily: "var(--font-head)", fontSize: 12, fontWeight: 600,
                    cursor: "pointer", transition: "all 0.15s",
                  }}>{f}</button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {featured && (
          <FadeIn delay={0.1}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              border: "1px solid var(--border)", borderRadius: 14,
              overflow: "hidden", marginBottom: 20,
              transition: "box-shadow 0.25s, transform 0.25s",
            }}
            className="featured-card"
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 48px rgba(13,13,13,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ height: 300, position: "relative", overflow: "hidden" }}>
                {featured.image
                  ? <img src={featured.image} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  : <Placeholder title={featured.title} color={featured.color} />
                }
              </div>
              <div style={{
                padding: "36px 40px", display: "flex", flexDirection: "column",
                justifyContent: "space-between", borderLeft: "1px solid var(--border)",
              }}>
                <div>
                  <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                    {featured.tags.map(t => (
                      <span key={t} style={{
                        padding: "3px 9px", borderRadius: 4, border: "1px solid var(--border)",
                        fontSize: 10, fontWeight: 600, color: "var(--muted)",
                        fontFamily: "var(--font-mono)", letterSpacing: "0.04em", textTransform: "uppercase",
                      }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-head)", fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 800, letterSpacing: "-0.04em", color: "var(--black)", marginBottom: 16,
                  }}>
                    {featured.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75 }}>
                    {featured.desc}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 32 }}>
                  <a href={featured.demo} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "11px 22px", borderRadius: 6,
                    background: "var(--accent)", color: "#fff",
                    fontFamily: "var(--font-head)", fontSize: 13, fontWeight: 700,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >
                    <i className="bi bi-box-arrow-up-right" style={{ fontSize: 12 }} />
                    Voir le projet
                  </a>
                  <a href={featured.github} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "11px 22px", borderRadius: 6,
                    border: "1px solid var(--border)", color: "var(--muted)",
                    fontFamily: "var(--font-head)", fontSize: 13, fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--black)"; e.currentTarget.style.borderColor = "rgba(13,13,13,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                  >
                    <i className="bi bi-github" style={{ fontSize: 13 }} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {rest.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="projects-grid">
            {rest.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.07}>
                <div style={{
                  border: "1px solid var(--border)", borderRadius: 14,
                  overflow: "hidden", transition: "box-shadow 0.25s, transform 0.25s",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(13,13,13,0.09)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ height: 160, overflow: "hidden" }}>
                    {p.image
                      ? <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                      : <Placeholder title={p.title} color={p.color} />
                    }
                  </div>
                  <div style={{ padding: "20px 22px", borderTop: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", gap: 5, marginBottom: 10, flexWrap: "wrap" }}>
                      {p.tags.map(t => (
                        <span key={t} style={{
                          padding: "2px 7px", borderRadius: 3, border: "1px solid var(--border)",
                          fontSize: 9, fontWeight: 600, color: "var(--muted)",
                          fontFamily: "var(--font-mono)", letterSpacing: "0.04em", textTransform: "uppercase",
                        }}>{t}</span>
                      ))}
                    </div>
                    <h3 style={{
                      fontFamily: "var(--font-head)", fontSize: 18, fontWeight: 800,
                      letterSpacing: "-0.03em", color: "var(--black)", marginBottom: 8,
                    }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65, marginBottom: 16 }}>
                      {p.desc}
                    </p>
                    <div style={{ display: "flex", gap: 8 }}>
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        padding: "7px 14px", borderRadius: 5,
                        background: "var(--accent)", color: "#fff",
                        fontFamily: "var(--font-head)", fontSize: 11, fontWeight: 700,
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                      >
                        <i className="bi bi-box-arrow-up-right" style={{ fontSize: 10 }} />
                        Voir
                      </a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        padding: "7px 14px", borderRadius: 5,
                        border: "1px solid var(--border)", color: "var(--muted)",
                        fontFamily: "var(--font-head)", fontSize: 11, fontWeight: 600,
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--black)"; e.currentTarget.style.borderColor = "rgba(13,13,13,0.3)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                      >
                        <i className="bi bi-github" style={{ fontSize: 10 }} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .featured-card > div:first-child { height: 200px !important; }
          .featured-card > div:last-child { border-left: none !important; border-top: 1px solid var(--border); }
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
