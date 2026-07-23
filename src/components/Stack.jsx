import FadeIn from "./FadeIn";

const ROW1 = ["React", "JavaScript", "Laravel", "PHP", "WordPress", "MySQL", "HTML / CSS", "Git", "Vite + Node"];
const ROW2 = ["PHP", "WordPress", "MySQL", "React", "Laravel", "Git", "JavaScript", "HTML / CSS", "Vite + Node"];

const ICONS = {
  "React": "bi-braces",
  "JavaScript": "bi-lightning-charge",
  "Laravel": "bi-layers",
  "PHP": "bi-code-slash",
  "WordPress": "bi-globe2",
  "MySQL": "bi-database",
  "HTML / CSS": "bi-palette",
  "Git": "bi-git",
  "Vite + Node": "bi-boxes",
};

const DETAILS = [
  { label: "React", icon: "bi-braces", desc: "Interfaces modernes, composants réutilisables, hooks" },
  { label: "JavaScript", icon: "bi-lightning-charge", desc: "Logique, interactions, APIs, ES6+" },
  { label: "Laravel", icon: "bi-layers", desc: "APIs REST, auth, middleware, Eloquent ORM" },
  { label: "PHP", icon: "bi-code-slash", desc: "Backend robuste, logique serveur, sessions" },
  { label: "WordPress", icon: "bi-globe2", desc: "CMS, thèmes sur-mesure, WooCommerce, plugins" },
  { label: "MySQL", icon: "bi-database", desc: "Bases relationnelles, requêtes optimisées, migrations" },
  { label: "HTML / CSS", icon: "bi-palette", desc: "Structure sémantique, animations, responsive design" },
  { label: "Git", icon: "bi-git", desc: "Versioning, branches, pull requests, GitHub" },
];

function Ticker({ items, direction = 1 }) {
  return (
    <div style={{ overflow: "hidden", width: "100%", padding: "12px 0" }}>
      <div style={{
        display: "flex", gap: 16,
        animation: `ticker${direction > 0 ? "Left" : "Right"} 28s linear infinite`,
        width: "max-content",
      }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "14px 24px", borderRadius: 99,
            border: "1px solid var(--border)",
            background: "rgba(13,13,13,0.02)",
            whiteSpace: "nowrap", flexShrink: 0,
          }}>
            <i className={`bi ${ICONS[item]}`} style={{ fontSize: 15, color: "var(--accent)" }} />
            <span style={{
              fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 700,
              color: "var(--black)", letterSpacing: "-0.02em",
            }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" style={{ padding: "120px 0", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <FadeIn delay={0}>
          <div style={{
            display: "flex", alignItems: "flex-end",
            justifyContent: "space-between", flexWrap: "wrap",
            gap: 24, marginBottom: 64,
          }}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800, lineHeight: 1.02,
                letterSpacing: "-0.04em", color: "var(--black)",
                marginBottom: 16,
              }}>
                Les technologies<br />que j'utilise.
              </h2>
              <p style={{
                fontSize: 16, color: "var(--muted)", lineHeight: 1.7,
                maxWidth: 480, fontFamily: "var(--font-body)",
              }}>
                Je maîtrise un ensemble d'outils modernes pour répondre à tous types de projets.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <Ticker items={ROW1} direction={1} />
        <Ticker items={ROW2} direction={-1} />
      </FadeIn>


      <style>{`
        @keyframes tickerLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes tickerRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 900px) {
          .stack-detail-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stack-detail-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
