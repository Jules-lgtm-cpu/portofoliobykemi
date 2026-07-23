import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section style={{
      padding: "120px 32px",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <FadeIn delay={0}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
            color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase",
            display: "block", marginBottom: 32,
          }}>
            Prêt à démarrer ?
          </span>
          <h2 style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "var(--black)",
            marginBottom: 24, maxWidth: 800, margin: "0 auto 24px",
          }}>
            Votre projet mérite<br />
            <span style={{ color: "var(--accent)" }}>d'être construit.</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18,
            color: "var(--muted)", lineHeight: 1.7,
            maxWidth: 520, margin: "0 auto 48px",
          }}>
            Une idée, une vision, un besoin. Je réponds en moins de 30 minutes et on commence quand vous voulez.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" style={{
              padding: "16px 36px", borderRadius: 6,
              background: "var(--accent)", color: "#fff",
              fontFamily: "var(--font-head)", fontSize: 15, fontWeight: 700,
              letterSpacing: "-0.02em", transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Démarrer un projet
            </a>
            <a href="https://wa.me/22956031032" target="_blank" rel="noopener noreferrer" style={{
              padding: "16px 36px", borderRadius: 6,
              border: "1px solid var(--border)", color: "var(--muted)",
              fontFamily: "var(--font-head)", fontSize: 15, fontWeight: 600,
              transition: "all 0.2s",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(13,13,13,0.3)"; e.currentTarget.style.color = "var(--black)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
            >
              <i className="bi bi-whatsapp" />
              WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
