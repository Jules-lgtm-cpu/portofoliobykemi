import { useState } from "react";
import FadeIn from "./FadeIn";

const FAQS = [
  {
    q: "Quels types de projets réalisez-vous ?",
    a: "Je développe des sites vitrines, des applications web, des boutiques e-commerce (WooCommerce, React), des blogs, des tableaux de bord et des systèmes de gestion sur mesure. Front comme back, du design à la mise en ligne.",
  },
  {
    q: "Quels sont vos délais de livraison ?",
    a: "Un site vitrine simple : 5 à 7 jours. Une application web complète : 2 à 4 semaines selon la complexité. Je respecte les délais convenus et vous tiens informé à chaque étape.",
  },
  {
    q: "Travaillez-vous avec des clients hors du Bénin ?",
    a: "Oui, je travaille à distance avec des clients partout en Afrique et en Europe. Toute la communication se fait par WhatsApp, email ou appel vidéo selon votre préférence.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Un acompte de 50% est demandé au démarrage du projet, le solde à la livraison. J'accepte les virements, Mobile Money (MTN, Moov) et autres modes selon votre pays.",
  },
  {
    q: "Est-ce que vous faites la maintenance après la livraison ?",
    a: "Oui. Je propose un suivi post-livraison pour corriger d'éventuels bugs et apporter des ajustements. Des formules de maintenance mensuelle sont aussi disponibles.",
  },
  {
    q: "Je n'ai pas de maquette, pouvez-vous quand même m'aider ?",
    a: "Absolument. Si vous n'avez pas de design, je m'occupe de tout — de la réflexion UX jusqu'au produit final. Vous me décrivez votre vision, je la concrétise.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ padding: "120px 32px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.6fr",
          gap: 80, alignItems: "start",
        }} className="faq-grid">

          <FadeIn delay={0}>
            <div style={{ position: "sticky", top: 120 }}>
              <h2 style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800, lineHeight: 1.02,
                letterSpacing: "-0.04em", color: "var(--black)",
                marginBottom: 24,
              }}>
                Questions<br />fréquentes.
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 15,
                color: "var(--muted)", lineHeight: 1.75, marginBottom: 40,
              }}>
                Tout ce que vous voulez savoir avant de démarrer un projet ensemble.
              </p>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: "var(--muted)", letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                {FAQS.length} questions
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderTop: "1px solid var(--border)" }}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: "100%", display: "flex",
                      justifyContent: "space-between", alignItems: "flex-start",
                      padding: "28px 0", background: "none", border: "none",
                      cursor: "pointer", textAlign: "left", gap: 24,
                    }}
                  >
                    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: 11,
                        color: open === i ? "var(--accent)" : "var(--muted)",
                        letterSpacing: "0.06em", fontWeight: 600,
                        flexShrink: 0, paddingTop: 3,
                        transition: "color 0.2s",
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-head)", fontSize: 16, fontWeight: 700,
                        color: "var(--black)", letterSpacing: "-0.02em", lineHeight: 1.4,
                      }}>
                        {faq.q}
                      </span>
                    </div>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%",
                      border: `1px solid ${open === i ? "var(--accent)" : "var(--border)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 2,
                      transition: "all 0.25s",
                      background: open === i ? "var(--accent)" : "transparent",
                    }}>
                      <i className="bi bi-plus" style={{
                        fontSize: 14,
                        color: open === i ? "#fff" : "var(--muted)",
                        display: "block",
                        transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease, color 0.2s",
                      }} />
                    </div>
                  </button>

                  <div style={{
                    maxHeight: open === i ? 300 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
                  }}>
                    <div style={{ display: "flex", gap: 20, paddingBottom: 28 }}>
                      <div style={{ width: 31, flexShrink: 0 }} />
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: 15,
                        color: "var(--muted)", lineHeight: 1.8,
                        borderLeft: "2px solid var(--accent)",
                        paddingLeft: 20, margin: 0,
                      }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)" }} />
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
