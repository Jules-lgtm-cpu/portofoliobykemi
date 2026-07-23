import { useState } from "react";
import FadeIn from "./FadeIn";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const { error: err } = await supabase.from("messages").insert([{
      name: form.name,
      email: form.email,
      message: form.message,
    }]);

    if (err) {
      setError("Une erreur est survenue. Réessayez.");
      setStatus("idle");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }
  };

  const input = {
    width: "100%", padding: "14px 0",
    background: "transparent",
    border: "none", borderBottom: "1px solid var(--border)",
    color: "var(--black)", fontSize: 16,
    fontFamily: "var(--font-body)", outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 80, alignItems: "start",
        }} className="contact-grid">

          <FadeIn delay={0}>
            <h2 style={{
              fontFamily: "var(--font-head)",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800, lineHeight: 1.02,
              letterSpacing: "-0.04em", color: "var(--black)",
              marginBottom: 32,
            }}>
              Parlons de<br />votre projet.
            </h2>
            <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.8, marginBottom: 40 }}>
              Une idée, un projet, une question ?<br />
              Je réponds en moins de 30 minutes.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a href="mailto:azajuleskemi@gmail.com" style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                color: "var(--muted)", transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--black)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <i className="bi bi-envelope-fill" style={{ fontSize: 17, color: "var(--black)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 500 }}>
                  azajuleskemi@gmail.com
                </span>
              </a>

              <a href="https://wa.me/22956031032" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                color: "var(--muted)", transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--black)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <i className="bi bi-whatsapp" style={{ fontSize: 17, color: "var(--black)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 500 }}>
                  +229 56031032
                </span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {status === "success" ? (
              <div style={{
                display: "flex", flexDirection: "column",
                justifyContent: "center", minHeight: 360,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "var(--black)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <i className="bi bi-check-lg" style={{ fontSize: 24, color: "var(--bg)" }} />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-head)", fontSize: 26,
                  fontWeight: 800, color: "var(--black)", marginBottom: 12,
                  letterSpacing: "-0.03em",
                }}>
                  Message envoyé !
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)" }}>
                  Je vous reviens très rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="form-row">
                  <div>
                    <label style={{
                      display: "block", fontSize: 11, fontWeight: 600,
                      color: "var(--muted)", textTransform: "uppercase",
                      letterSpacing: "0.08em", marginBottom: 8,
                      fontFamily: "var(--font-mono)",
                    }}>Nom</label>
                    <input type="text" placeholder="Votre nom" required value={form.name} onChange={set("name")} style={input}
                      onFocus={e => e.target.style.borderColor = "var(--black)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: "block", fontSize: 11, fontWeight: 600,
                      color: "var(--muted)", textTransform: "uppercase",
                      letterSpacing: "0.08em", marginBottom: 8,
                      fontFamily: "var(--font-mono)",
                    }}>Email</label>
                    <input type="email" placeholder="votre@email.com" required value={form.email} onChange={set("email")} style={input}
                      onFocus={e => e.target.style.borderColor = "var(--black)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: "block", fontSize: 11, fontWeight: 600,
                    color: "var(--muted)", textTransform: "uppercase",
                    letterSpacing: "0.08em", marginBottom: 8,
                    fontFamily: "var(--font-mono)",
                  }}>Message</label>
                  <textarea placeholder="Décrivez votre projet..." required rows={4} value={form.message} onChange={set("message")}
                    style={{ ...input, resize: "none", lineHeight: 1.7 }}
                    onFocus={e => e.target.style.borderColor = "var(--black)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: 13, color: "#c0392b", fontFamily: "var(--font-mono)" }}>{error}</p>
                )}

                <button type="submit" disabled={status === "loading"} style={{
                  alignSelf: "flex-start",
                  padding: "14px 36px", borderRadius: 6, border: "none",
                  background: status === "loading" ? "rgba(232,80,10,0.5)" : "var(--accent)", color: "#fff",
                  fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 700,
                  letterSpacing: "-0.01em",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.opacity = "0.75"; }}
                onMouseLeave={e => { if (status !== "loading") e.currentTarget.style.opacity = "1"; }}
                >
                  {status === "loading" ? "Envoi..." : "Envoyer"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--muted); }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
