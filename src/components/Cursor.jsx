import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let x = 0, y = 0;
    let rx = 0, ry = 0;
    let hovering = false;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.left = x + "px";
        dot.current.style.top = y + "px";
      }
    };

    const onEnter = () => { hovering = true; };
    const onLeave = () => { hovering = false; };

    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (ring.current) {
        ring.current.style.left = rx + "px";
        ring.current.style.top = ry + "px";
        ring.current.style.width = hovering ? "48px" : "32px";
        ring.current.style.height = hovering ? "48px" : "32px";
        ring.current.style.opacity = hovering ? "0.6" : "0.35";
      }
      raf = requestAnimationFrame(loop);
    };

    const targets = document.querySelectorAll("a, button");
    targets.forEach(el => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" style={{
        position: "fixed", pointerEvents: "none", zIndex: 9999,
        width: 6, height: 6, borderRadius: "50%",
        background: "var(--black)",
        transform: "translate(-50%, -50%)",
        transition: "none",
      }} />
      <div ref={ring} className="cursor-ring" style={{
        position: "fixed", pointerEvents: "none", zIndex: 9998,
        width: 32, height: 32, borderRadius: "50%",
        border: "1.5px solid var(--black)",
        transform: "translate(-50%, -50%)",
        transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
      }} />
      <style>{`
        @media (pointer: fine) { * { cursor: none !important; } }
        @media (pointer: coarse) { .cursor-dot, .cursor-ring { display: none !important; } }
      `}</style>
    </>
  );
}
