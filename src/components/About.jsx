import FadeIn from "./FadeIn";

const STATS = [
  { num: "7", label: "Projets\nréalisés" },
  { num: "3+", label: "Années\nd'expérience" },
  { num: "30min", label: "Temps de\nréponse" },
];

export default function About() {
  return (
    <section id="apropos" style={{
      padding: "120px 32px",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }} className="about-grid">

          <FadeIn delay={0}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(40px, 5.5vw, 72px)",
                fontWeight: 800, lineHeight: 0.96,
                letterSpacing: "-0.05em",
                color: "var(--black)",
                marginBottom: 40,
              }}>
                Développeur,<br />
                <span style={{ color: "var(--accent)" }}>pas juste</span><br />
                codeur.
              </h2>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: 17,
                color: "var(--muted)", lineHeight: 1.8, marginBottom: 20,
              }}>
                Je m'appelle <strong style={{ color: "var(--black)", fontWeight: 700 }}>AZA Jules Kemi</strong>. Développeur web fullstack basé au Bénin. Formé sur React, Laravel, PHP, JavaScript et WordPress — je construis des produits web complets du frontend jusqu'à la base de données.
              </p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 17,
                color: "var(--muted)", lineHeight: 1.8, marginBottom: 48,
              }}>
                Ce qui me distingue : je pense d'abord à l'utilisateur, ensuite au code. Un produit bien conçu, c'est un produit qui se vend tout seul.
              </p>


              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: "bi-github", label: "GitHub", href: "https://github.com/Jules-lgtm-cpu" },
                  { icon: "bi-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/jules-kemi-aza" },
                ].map(s => (
                  <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "11px 20px", borderRadius: 6,
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-head)", fontSize: 13, fontWeight: 600,
                    color: "var(--muted)", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--black)"; e.currentTarget.style.borderColor = "rgba(13,13,13,0.3)"; e.currentTarget.style.background = "rgba(13,13,13,0.02)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent"; }}
                  >
                    <i className={`bi ${s.icon}`} style={{ fontSize: 15 }} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ position: "relative" }}>
              <div style={{
                width: "100%", aspectRatio: "3/4",
                borderRadius: 16,
                overflow: "hidden", position: "relative",
              }}>
                <img
                  src="/bykemiimg.jpg"
                  alt="AZA Jules Kemi"
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-grid > div:first-child { order: 2; }
          .about-grid > div:last-child { order: 1; }
        }
      `}</style>
    </section>
  );
}
