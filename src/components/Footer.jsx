export default function Footer() {
  return (
    <footer style={{
      padding: "32px",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", flexWrap: "wrap", gap: 16,
      }}>
        <span style={{
          fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 17,
          color: "var(--black)", letterSpacing: "-0.03em",
        }}>
          By<span style={{ color: "var(--accent)" }}>Kemi</span>
        </span>

        <p style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
          © 2026 · AZA Jules Kemi · Bénin
        </p>

        <div style={{ display: "flex", gap: 20 }}>
          {[
            { icon: "bi-github", href: "https://github.com/Jules-lgtm-cpu" },
            { icon: "bi-linkedin", href: "https://www.linkedin.com/in/jules-kemi-aza" },
          ].map(s => (
            <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" style={{
              fontSize: 18, color: "var(--muted)", transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--black)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
