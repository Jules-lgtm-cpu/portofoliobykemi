import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const ADMIN_PASSWORD = "WaterfuckBro";

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [pwd, setPwd] = useState("");
  const [pwdError, setPwdError] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const login = (e) => {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) {
      setAuth(true);
    } else {
      setPwdError(true);
      setPwd("");
    }
  };

  useEffect(() => {
    if (!auth) return;
    setLoading(true);
    supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setMessages(data || []);
        setLoading(false);
      });
  }, [auth]);

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })
      + " · " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  };

  if (!auth) {
    return (
      <div style={{
        minHeight: "100vh", background: "var(--bg)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 32,
      }}>
        <div style={{ width: "100%", maxWidth: 360 }}>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
            color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Admin — ByKemi
          </p>
          <h1 style={{
            fontFamily: "var(--font-head)", fontSize: 32, fontWeight: 800,
            letterSpacing: "-0.04em", color: "var(--black)", marginBottom: 40,
          }}>
            Connexion
          </h1>
          <form onSubmit={login} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <label style={{
                display: "block", fontSize: 11, fontWeight: 600,
                color: "var(--muted)", textTransform: "uppercase",
                letterSpacing: "0.08em", marginBottom: 8,
                fontFamily: "var(--font-mono)",
              }}>Mot de passe</label>
              <input
                type="password"
                value={pwd}
                onChange={e => { setPwd(e.target.value); setPwdError(false); }}
                placeholder="••••••••"
                required
                autoFocus
                style={{
                  width: "100%", padding: "14px 0",
                  background: "transparent", border: "none",
                  borderBottom: `1px solid ${pwdError ? "#c0392b" : "var(--border)"}`,
                  color: "var(--black)", fontSize: 16,
                  fontFamily: "var(--font-body)", outline: "none",
                }}
              />
              {pwdError && (
                <p style={{ fontSize: 12, color: "#c0392b", marginTop: 8, fontFamily: "var(--font-mono)" }}>
                  Mot de passe incorrect.
                </p>
              )}
            </div>
            <button type="submit" style={{
              padding: "14px", borderRadius: 6, border: "none",
              background: "var(--black)", color: "var(--bg)",
              fontFamily: "var(--font-head)", fontSize: 14, fontWeight: 700,
              cursor: "pointer", transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Accéder
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", padding: "48px 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
              color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 8,
            }}>
              Admin — ByKemi
            </p>
            <h1 style={{
              fontFamily: "var(--font-head)", fontSize: 36, fontWeight: 800,
              letterSpacing: "-0.04em", color: "var(--black)",
            }}>
              Messages reçus
              <span style={{
                marginLeft: 12, fontSize: 16, fontWeight: 600,
                color: "var(--muted)", fontFamily: "var(--font-mono)",
              }}>
                ({messages.length})
              </span>
            </h1>
          </div>
          <a href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 20px", borderRadius: 6,
            border: "1px solid var(--border)", color: "var(--muted)",
            fontFamily: "var(--font-head)", fontSize: 13, fontWeight: 600,
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--black)"; e.currentTarget.style.borderColor = "rgba(13,13,13,0.3)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            <i className="bi bi-arrow-left" />
            Retour au site
          </a>
        </div>

        {loading ? (
          <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 14 }}>
            Chargement...
          </p>
        ) : messages.length === 0 ? (
          <div style={{
            padding: "80px 0", textAlign: "center",
            borderTop: "1px solid var(--border)",
          }}>
            <p style={{ color: "var(--muted)", fontSize: 16 }}>Aucun message pour l'instant.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {messages.map((msg, i) => (
              <div key={msg.id} style={{
                padding: "32px 0",
                borderTop: i === 0 ? "1px solid var(--border)" : "none",
                borderBottom: "1px solid var(--border)",
              }}>
                <div style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between", marginBottom: 12, flexWrap: "wrap", gap: 8,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{
                      fontFamily: "var(--font-head)", fontSize: 17, fontWeight: 800,
                      color: "var(--black)", letterSpacing: "-0.02em",
                    }}>
                      {msg.name}
                    </span>
                    <a href={`mailto:${msg.email}`} style={{
                      fontFamily: "var(--font-mono)", fontSize: 13,
                      color: "var(--accent)", textDecoration: "none",
                    }}>
                      {msg.email}
                    </a>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    color: "var(--muted)", letterSpacing: "0.05em",
                  }}>
                    {formatDate(msg.created_at)}
                  </span>
                </div>
                <p style={{
                  fontSize: 15, color: "var(--black)", lineHeight: 1.75,
                  fontFamily: "var(--font-body)", maxWidth: 680,
                }}>
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
