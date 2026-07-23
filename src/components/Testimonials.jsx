import { useState } from "react";
import FadeIn from "./FadeIn";

const TESTIMONIALS = [
  {
    name: "Rodrigue Ahouansou",
    role: "Gérant, Boutique Mode Cotonou",
    text: "Jules a créé notre boutique en ligne en moins de 2 semaines. Résultat : nos ventes ont doublé le premier mois. Il comprend vraiment ce que veut le client, pas juste ce qu'on lui demande.",
    initial: "R",
  },
  {
    name: "Fatoumata Diallo",
    role: "Directrice, Cabinet RH Dakar",
    text: "Sérieux, rapide et très professionnel. Notre site vitrine a été livré dans les délais avec un design qu'on n'espérait pas. On revient vers lui pour la prochaine phase sans hésiter.",
    initial: "F",
  },
  {
    name: "Koffi Mensah",
    role: "Fondateur, AgriTech Bénin",
    text: "On avait un budget serré et des besoins précis. Jules a trouvé les bonnes solutions sans nous faire exploser le budget. Notre application de gestion agricole tourne parfaitement.",
    initial: "K",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (i) => {
    setDir(i > active ? 1 : -1);
    setActive(i);
  };

  const prev = () => go(active === 0 ? TESTIMONIALS.length - 1 : active - 1);
  const next = () => go(active === TESTIMONIALS.length - 1 ? 0 : active + 1);

  const t = TESTIMONIALS[active];

  return (
    <section id="temoignages" style={{ padding: "120px 32px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <FadeIn delay={0}>
          <div style={{
            display: "flex", alignItems: "flex-end",
            justifyContent: "space-between", flexWrap: "wrap",
            gap: 24, marginBottom: 64,
          }}>
            <h2 style={{
              fontFamily: "var(--font-head)",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800, lineHeight: 1.02,
              letterSpacing: "-0.04em", color: "var(--black)",
            }}>
              Ce que disent<br />mes clients.
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16,
              color: "var(--muted)", lineHeight: 1.7, maxWidth: 320,
            }}>
              Des projets réels, des résultats concrets, des clients qui reviennent.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            background: "transparent",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "clamp(40px, 6vw, 72px)",
            position: "relative",
            overflow: "hidden",
            minHeight: 320,
          }}>

            {/* Decorative large quote */}
            <div style={{
              position: "absolute", top: -20, right: 60,
              fontFamily: "Georgia, serif", fontSize: 280,
              color: "rgba(232,80,10,0.06)", lineHeight: 1,
              userSelect: "none", pointerEvents: "none",
              fontWeight: 700,
            }}>
              "
            </div>

            {/* Quote mark */}
            <div style={{
              fontFamily: "Georgia, serif",
              fontSize: 72, lineHeight: 0.65,
              color: "var(--accent)", marginBottom: 32,
              userSelect: "none", position: "relative", zIndex: 1,
            }}>
              &ldquo;
            </div>

            {/* Text */}
            <p key={active} style={{
              fontFamily: "var(--font-head)",
              fontSize: "clamp(18px, 2.2vw, 26px)",
              fontWeight: 600, color: "var(--black)",
              lineHeight: 1.6, letterSpacing: "-0.02em",
              maxWidth: 760, marginBottom: 52,
              position: "relative", zIndex: 1,
              animation: "fadeSlide 0.4s ease forwards",
            }}>
              {t.text}
            </p>

            {/* Bottom: author + navigation */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap", gap: 24,
              position: "relative", zIndex: 1,
            }}>
              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "var(--accent)", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "var(--font-head)", fontSize: 20,
                    fontWeight: 800, color: "#fff",
                  }}>
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-head)", fontSize: 16,
                    fontWeight: 700, color: "var(--black)", letterSpacing: "-0.02em",
                    marginBottom: 4,
                  }}>
                    {t.name}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* Dots */}
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {TESTIMONIALS.map((_, i) => (
                    <button key={i} onClick={() => go(i)} style={{
                      width: i === active ? 24 : 8,
                      height: 8, borderRadius: 99,
                      background: i === active ? "var(--accent)" : "rgba(13,13,13,0.15)",
                      border: "none", padding: 0, cursor: "pointer",
                      transition: "all 0.3s ease",
                    }} />
                  ))}
                </div>

                {/* Arrows */}
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { fn: prev, icon: "bi-arrow-left" },
                    { fn: next, icon: "bi-arrow-right" },
                  ].map((btn, i) => (
                    <button key={i} onClick={btn.fn} style={{
                      width: 44, height: 44, borderRadius: "50%",
                      border: "1px solid var(--border)",
                      background: "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      cursor: "pointer", transition: "all 0.2s",
                      color: "var(--black)",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--black)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--black)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--black)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                    >
                      <i className={`bi ${btn.icon}`} style={{ fontSize: 16 }} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
