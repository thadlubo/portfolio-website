import { useState, useEffect, useRef } from "react";

const soundMap = [
  { piece: "♙ / ♟", name: "Pawn",   move: "Medieval March",   capture: "Scream Attack" },
  { piece: "♘ / ♞", name: "Knight", move: "Horse Gallop",     capture: "Horse Neigh" },
  { piece: "♗ / ♝", name: "Bishop", move: "Old Church Bell",  capture: "Choir Sound" },
  { piece: "♖ / ♜", name: "Rook",   move: "Moving Catapult",  capture: "Cart Crash" },
  { piece: "♕ / ♛", name: "Queen",  move: "Noble Trumpet",    capture: "Female Laugh" },
  { piece: "♔ / ♚", name: "King",   move: "Royalty Trumpet",  capture: "Male Evil Laugh" },
];

const phases = [
  { label: "Early Game",  trigger: "Game start",        sound: "War sound: minimal ambience", color: "#6b7280" },
  { label: "Middle Game", trigger: "First capture",      sound: "War sound with drums",         color: "#a78bfa" },
  { label: "Late Game",   trigger: "King's first move",  sound: "War sound: full set",         color: "#f59e0b" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ChessboardDeco() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }} aria-hidden>
      <div
        style={{
          position: "absolute",
          right: "-80px",
          top: "60px",
          width: "320px",
          height: "320px",
          opacity: 0.04,
          backgroundImage: "repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)",
          backgroundSize: "40px 40px",
          transform: "rotate(8deg)",
        }}
      />
    </div>
  );
}

export default function CheckmateSoundscape() {
  const [activePhase, setActivePhase] = useState(0);
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Lora', Georgia, serif",
        background: "#0e0d0c",
        color: "#e8e0d5",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;1,400&family=Space+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .mono    { font-family: 'Space Mono', monospace; }

        .hover-row:hover { background: rgba(167,139,250,0.06); }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0e0d0c; }
        ::-webkit-scrollbar-thumb { background: #3a3530; border-radius: 3px; }

        .phase-btn { transition: all 0.25s ease; border: 1px solid transparent; }
        .phase-btn:hover { border-color: rgba(255,255,255,0.12); }
        .phase-btn.active { border-color: rgba(167,139,250,0.5); background: rgba(167,139,250,0.08); }

        .grain::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.35;
        }
      `}</style>

      <div className="grain" />

      {/* ── HERO ─────────────────────────────────────────── */}
      <header
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(80px, 12vh, 120px) clamp(24px, 6vw, 96px) clamp(48px, 8vh, 80px)",
          borderBottom: "1px solid #2a2520",
          overflow: "hidden",
        }}
      >
        <ChessboardDeco />

        {/* Giant background piece hidden on mobile so it doesn't clash with video */}
        {!mobile && (
          <div
            style={{
              position: "absolute",
              right: "clamp(24px, 10vw, 140px)",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "clamp(180px, 30vw, 360px)",
              lineHeight: 1,
              opacity: 0.03,
              userSelect: "none",
              fontFamily: "serif",
              pointerEvents: "none",
            }}
            aria-hidden
          >
            ♚
          </div>
        )}

        {/* Purple ambient blob */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "30%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
          aria-hidden
        />

        {/* ── HERO INNER: two-col on desktop, stacked on mobile ── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: mobile ? "column" : "row",
            alignItems: mobile ? "stretch" : "center",
            gap: mobile ? "40px" : "clamp(32px, 5vw, 72px)",
            width: "100%",
          }}
        >
          {/* LEFT: text */}
          <div style={{ flex: "1 1 400px", maxWidth: mobile ? "100%" : "600px" }}>
            <div
              className="mono"
              style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#7c6f64", marginBottom: "32px", textTransform: "uppercase" }}
            >
              Case Study &nbsp;·&nbsp; Interactive Soundscape Performance &nbsp;·&nbsp; 2025
            </div>

            <h1
              className="display"
              style={{
                fontSize: mobile ? "clamp(52px, 14vw, 80px)" : "clamp(52px, 9vw, 112px)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                marginBottom: "32px",
                color: "#f0ebe3",
              }}
            >
              Check
              <br />
              <span style={{ color: "#a78bfa", fontStyle: "italic" }}>mate</span>
              <br />
              Soundscape
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 1.8vw, 19px)",
                lineHeight: 1.7,
                color: "#a09585",
                marginBottom: "48px",
              }}
            >
              A chess game as a live, rule-driven medieval soundscape. Every move triggers a sound. Every phase shifts the atmosphere. Silence was never an option.
            </p>

            <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "1px", background: "#a78bfa" }} />
                <span className="mono" style={{ fontSize: "12px", color: "#7c6f64", letterSpacing: "0.1em" }}>
                  Thaddeus Lubo
                </span>
              </div>
              <span style={{ color: "#3a3530", fontSize: "12px" }}>·</span>
              <span className="mono" style={{ fontSize: "12px", color: "#7c6f64" }}>
                playsound.space · freesoundscape · OBS Studio
              </span>
            </div>
          </div>

          {/* RIGHT: YouTube embed */}
          <div
            style={{
              flex: mobile ? "none" : "0 0 clamp(280px, 40%, 520px)",
              width: mobile ? "100%" : undefined,
            }}
          >
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid #2a2520",
                boxShadow: "0 0 80px rgba(109,40,217,0.18)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/rxhTL-eY6-0"
                title="Checkmate Soundscape Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── BODY ─────────────────────────────────────────── */}
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px, 6vw, 96px)" }}>

        {/* ── SECTION 1: CONCEPT ─────────────────────────── */}
        <section style={{ padding: "clamp(64px, 10vh, 120px) 0", borderBottom: "1px solid #1e1b18" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)", alignItems: "start" }}>
              {!mobile && (
                <div>
                  <div className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#6b5e52", textTransform: "uppercase", paddingTop: "6px" }}>
                    01
                  </div>
                </div>
              )}
              <div>
                {mobile && (
                  <div className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#6b5e52", textTransform: "uppercase", marginBottom: "12px" }}>01</div>
                )}
                <h2
                  className="display"
                  style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 600, lineHeight: 1.1, marginBottom: "32px", color: "#f0ebe3" }}
                >
                  The Concept
                </h2>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)" }}>
              {!mobile && <div />}
              <div>
                <p style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.85, color: "#c4b9ac", marginBottom: "24px" }}>
                  It started, as many grand ideas do, with a TV show and a terrible plan. Watching <em>The Queen's Gambit</em>, it became hard to ignore how utterly silent chess is for something so violent. Pawns getting taken left, right and centre, kings on the run, and not so much as a squeak. That felt like a missed opportunity, and a ripe one at that.
                </p>
                <p style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.85, color: "#c4b9ac", marginBottom: "24px" }}>
                  The concept landed somewhere between John Cage's rule-based chance and Brian Eno's process-driven ambience, with a generous side of old cartoon sound effects. The goal: turn a chess game into a layered medieval soundscape where every move triggers a mapped sound and the whole atmosphere evolves as the match progresses.
                </p>

                <blockquote
                  style={{
                    borderLeft: "3px solid #a78bfa",
                    paddingLeft: "28px",
                    margin: "40px 0",
                  }}
                >
                  <p
                    className="display"
                    style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontStyle: "italic", lineHeight: 1.5, color: "#e0d8ce", fontWeight: 400 }}
                  >
                    "Strategy, tension, ceremony, and occasional nonsense that felt right."
                  </p>
                </blockquote>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "32px" }}>
                  {["John Cage's Chance operations", "Brian Eno's Ambient systems", "Game audio SFX", "The Queen's Gambit"].map((t) => (
                    <span
                      key={t}
                      className="mono"
                      style={{
                        fontSize: "11px",
                        padding: "6px 14px",
                        border: "1px solid #2e2820",
                        borderRadius: "2px",
                        color: "#7c6f64",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── SECTION 2: SYSTEM DESIGN ────────────────────── */}
        <section style={{ padding: "clamp(64px, 10vh, 120px) 0", borderBottom: "1px solid #1e1b18" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)", alignItems: "start" }}>
              {!mobile && (
                <div>
                  <div className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#6b5e52", textTransform: "uppercase", paddingTop: "6px" }}>02</div>
                </div>
              )}
              <div>
                {mobile && (
                  <div className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#6b5e52", textTransform: "uppercase", marginBottom: "12px" }}>02</div>
                )}
                <h2
                  className="display"
                  style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 600, lineHeight: 1.1, marginBottom: "48px", color: "#f0ebe3" }}
                >
                  The System Design
                </h2>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)" }}>
              {!mobile && <div />}
              <p style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.85, color: "#c4b9ac", marginBottom: "48px" }}>
                Each chess piece was assigned its own move sound and capture sound. Obviously a bishop deserves church bells and a knight deserves a galloping horse. Captures were choreographed as mini-battles, and a three-phase ambient system built the atmosphere from quiet tension to full medieval chaos.
              </p>
            </div>
          </FadeIn>

          {/* Sound Map Table */}
          <FadeIn delay={150}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)" }}>
              {!mobile && (
                <div style={{ paddingTop: "8px" }}>
                  <p className="mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6b5e52", textTransform: "uppercase", lineHeight: 1.8 }}>
                    Piece<br />Sound<br />Mapping
                  </p>
                </div>
              )}
              <div style={{ border: "1px solid #2a2520", borderRadius: "4px", overflow: "hidden" }}>
                {mobile && (
                  <div style={{ padding: "12px 16px", background: "#111009", borderBottom: "1px solid #2a2520" }}>
                    <span className="mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6b5e52", textTransform: "uppercase" }}>Piece Sound Mapping</span>
                  </div>
                )}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: mobile ? "48px 1fr 1fr" : "60px 1fr 1fr 1fr",
                    padding: "12px 20px",
                    background: "#141210",
                    borderBottom: "1px solid #2a2520",
                  }}
                >
                  {(mobile ? ["Piece", "Move", "Capture"] : ["Piece", "Name", "Move", "Capture"]).map((h) => (
                    <span key={h} className="mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6b5e52", textTransform: "uppercase" }}>{h}</span>
                  ))}
                </div>
                {soundMap.map((row, i) => (
                  <div
                    key={i}
                    className="hover-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: mobile ? "48px 1fr 1fr" : "60px 1fr 1fr 1fr",
                      padding: "14px 20px",
                      borderBottom: i < soundMap.length - 1 ? "1px solid #1e1b18" : "none",
                    }}
                  >
                    <span style={{ fontSize: "18px", lineHeight: 1, letterSpacing: "4px", alignSelf: "center" }}>{row.piece.split(" / ")[0]}</span>
                    {!mobile && <span style={{ fontSize: "13px", color: "#e0d8ce", alignSelf: "center" }}>{row.name}</span>}
                    <span style={{ fontSize: "12px", color: "#a09585", alignSelf: "center" }}>{row.move}</span>
                    <span style={{ fontSize: "12px", color: "#a78bfa", alignSelf: "center" }}>{row.capture}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Capture sequence */}
          <FadeIn delay={200}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)", marginTop: "48px" }}>
              {!mobile && (
                <div style={{ paddingTop: "8px" }}>
                  <p className="mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6b5e52", textTransform: "uppercase", lineHeight: 1.8 }}>
                    Capture<br />Sequence
                  </p>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  background: "#111009",
                  border: "1px solid #2a2520",
                  borderRadius: "4px",
                  overflow: "hidden",
                  flexWrap: mobile ? "wrap" : "nowrap",
                }}
              >
                {mobile && (
                  <div style={{ width: "100%", padding: "12px 16px", borderBottom: "1px solid #1e1b18" }}>
                    <span className="mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6b5e52", textTransform: "uppercase" }}>Capture Sequence</span>
                  </div>
                )}
                {[
                  { step: "1", label: "Attacker moves",       icon: "⚔",  color: "#7c6f64" },
                  { step: "2", label: "Medieval battle SFX",  icon: "🔔", color: "#a78bfa" },
                  { step: "3", label: "Captured piece sounds", icon: "💀", color: "#f87171" },
                  { step: "4", label: "Attacker wins",        icon: "🏆", color: "#fbbf24" },
                ].map((s, i, arr) => (
                  <div
                    key={i}
                    style={{
                      flex: mobile ? "1 1 50%" : "1",
                      padding: "24px 20px",
                      borderRight: !mobile && i < arr.length - 1 ? "1px solid #1e1b18" : "none",
                      borderBottom: mobile && i < arr.length - 1 ? "1px solid #1e1b18" : "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <span className="mono" style={{ fontSize: "10px", color: "#3a3530" }}>0{s.step}</span>
                    <span style={{ fontSize: "22px" }}>{s.icon}</span>
                    <span style={{ fontSize: "12px", color: s.color, lineHeight: 1.4 }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Phase System */}
          <FadeIn delay={240}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)", marginTop: "48px" }}>
              {!mobile && (
                <div style={{ paddingTop: "8px" }}>
                  <p className="mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6b5e52", textTransform: "uppercase", lineHeight: 1.8 }}>
                    Phase<br />System
                  </p>
                </div>
              )}
              <div>
                {mobile && (
                  <p className="mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6b5e52", textTransform: "uppercase", marginBottom: "16px" }}>Phase System</p>
                )}
                <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
                  {phases.map((p, i) => (
                    <button
                      key={i}
                      className={`phase-btn ${activePhase === i ? "active" : ""}`}
                      onClick={() => setActivePhase(i)}
                      style={{
                        background: "transparent",
                        padding: "8px 20px",
                        borderRadius: "2px",
                        cursor: "pointer",
                        color: activePhase === i ? "#e0d8ce" : "#7c6f64",
                      }}
                    >
                      <span className="mono" style={{ fontSize: "12px" }}>{p.label}</span>
                    </button>
                  ))}
                </div>
                <div
                  style={{
                    padding: "28px",
                    background: "#111009",
                    border: "1px solid #2a2520",
                    borderRadius: "4px",
                    minHeight: "100px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "3px", minHeight: "60px", background: phases[activePhase].color, borderRadius: "2px", flexShrink: 0 }} />
                    <div>
                      <p className="mono" style={{ fontSize: "10px", color: "#6b5e52", letterSpacing: "0.15em", marginBottom: "8px", textTransform: "uppercase" }}>
                        Trigger: {phases[activePhase].trigger}
                      </p>
                      <p style={{ fontSize: "16px", color: "#c4b9ac", lineHeight: 1.6 }}>{phases[activePhase].sound}</p>
                      <div style={{ display: "flex", gap: "6px", marginTop: "16px" }}>
                        {phases.map((_, j) => (
                          <div
                            key={j}
                            style={{
                              width: j <= activePhase ? "20px" : "6px",
                              height: "3px",
                              borderRadius: "2px",
                              background: j <= activePhase ? phases[activePhase].color : "#2a2520",
                              transition: "all 0.3s ease",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Channel mapping */}
          <FadeIn delay={260}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)", marginTop: "48px" }}>
              {!mobile && (
                <div style={{ paddingTop: "8px" }}>
                  <p className="mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#6b5e52", textTransform: "uppercase", lineHeight: 1.8 }}>
                    OBS<br />Channel<br />Routing
                  </p>
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#1e1b18", border: "1px solid #1e1b18", borderRadius: "4px", overflow: "hidden" }}>
                {[
                  { ch: "L", browser: "Chrome",  label: "White pieces", items: ["Move sounds", "Capture sounds"], color: "#e0d8ce" },
                  { ch: "M", browser: "Firefox", label: "Effects",       items: ["Checks", "Castles", "Phase ambience", "Victory"], color: "#a78bfa" },
                  { ch: "R", browser: "MS Edge", label: "Black pieces",  items: ["Move sounds", "Capture sounds"], color: "#9ca3af" },
                ].map((c) => (
                  <div
                    key={c.ch}
                    style={{
                      padding: mobile ? "16px 12px" : "24px 20px",
                      background: "#0e0d0c",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#1a1713",
                        border: `1px solid ${c.color}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span className="mono" style={{ fontSize: "11px", color: c.color }}>{c.ch}</span>
                    </div>
                    <div>
                      <p className="mono" style={{ fontSize: "10px", color: "#6b5e52", letterSpacing: "0.1em" }}>{c.browser}</p>
                      <p style={{ fontSize: mobile ? "12px" : "13px", color: c.color, marginTop: "4px" }}>{c.label}</p>
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
                      {c.items.map((item) => (
                        <li key={item} style={{ fontSize: "11px", color: "#6b5e52", display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#3a3530", flexShrink: 0, display: "inline-block" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── SECTION 3: PERFORMANCE ─────────────────────── */}
        <section style={{ padding: "clamp(64px, 10vh, 120px) 0", borderBottom: "1px solid #1e1b18" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)", alignItems: "start" }}>
              {!mobile && (
                <div>
                  <div className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#6b5e52", textTransform: "uppercase", paddingTop: "6px" }}>03</div>
                </div>
              )}
              <div>
                {mobile && (
                  <div className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#6b5e52", textTransform: "uppercase", marginBottom: "12px" }}>03</div>
                )}
                <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 600, lineHeight: 1.1, marginBottom: "32px", color: "#f0ebe3" }}>
                  The Performance
                </h2>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)" }}>
              {!mobile && <div />}
              <div>
                <p style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.85, color: "#c4b9ac", marginBottom: "24px" }}>
                  The original plan was to play a live timed chess match while simultaneously triggering all the sounds. Very noble. Very ambitious. An absolute disaster waiting to happen. After approximately one rehearsal where both the chess and the soundboard went sideways at the same time, that plan was quietly retired.
                </p>
                <p style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.85, color: "#c4b9ac", marginBottom: "40px" }}>
                  Instead, the first chess game from <em>The Queen's Gambit</em> was replayed on Lichess as a reviewed analysis. This gave enough structure to follow the moves cleanly without the added panic of losing on the clock while also trying to make medieval noises sound dignified.
                </p>

                {/* Performance flow */}
                <div
                  style={{
                    background: "#111009",
                    border: "1px solid #2a2520",
                    borderRadius: "4px",
                    padding: "28px",
                    marginBottom: "32px",
                  }}
                >
                  <p className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#6b5e52", marginBottom: "24px", textTransform: "uppercase" }}>
                    Performance Flow
                  </p>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {[
                      { action: "Start OBS recording",                              note: "" },
                      { action: "Load Lichess game analysis",                       note: "Queen's Gambit, Ep. 1" },
                      { action: "Trigger Early Game ambience",                      note: "Minimal war sound" },
                      { action: "For every move: identify piece, side, type",      note: "move / capture / check / castle" },
                      { action: "Trigger mapped sound",                             note: "playsound.space" },
                      { action: "On first capture: shift to Middle Game",          note: "War + drums" },
                      { action: "On king move: shift to Late Game",               note: "Full war set" },
                      { action: "On win: trigger Victory sound + end recording",  note: "" },
                    ].map((step, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: "20px",
                          paddingBottom: "16px",
                          paddingTop: i === 0 ? 0 : "16px",
                          borderTop: i === 0 ? "none" : "1px solid #1a1713",
                          alignItems: "flex-start",
                        }}
                      >
                        <span className="mono" style={{ fontSize: "10px", color: "#3a3530", paddingTop: "3px", minWidth: "20px" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: "14px", color: "#e0d8ce" }}>{step.action}</span>
                          {step.note && (
                            <span style={{ fontSize: "12px", color: "#6b5e52", marginLeft: "12px" }}>{step.note}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tool strip */}
                <div style={{ display: "grid", gridTemplateColumns: mobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "1px", borderRadius: "4px", overflow: "hidden", border: "1px solid #1e1b18", background: "#1e1b18" }}>
                  {[
                    { name: "Lichess",        role: "Game analysis" },
                    { name: "playsound.space", role: "Piece sounds" },
                    { name: "Freesoundscape", role: "Ambient phases" },
                    { name: "OBS Studio",     role: "Recording + routing" },
                  ].map((t) => (
                    <div
                      key={t.name}
                      style={{
                        padding: "16px 14px",
                        background: "#111009",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <span style={{ fontSize: "12px", color: "#a78bfa" }}>{t.name}</span>
                      <span className="mono" style={{ fontSize: "10px", color: "#6b5e52" }}>{t.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── SECTION 4: REFLECTION ──────────────────────── */}
        <section style={{ padding: "clamp(64px, 10vh, 120px) 0" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)", alignItems: "start" }}>
              {!mobile && (
                <div>
                  <div className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#6b5e52", textTransform: "uppercase", paddingTop: "6px" }}>04</div>
                </div>
              )}
              <div>
                {mobile && (
                  <div className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#6b5e52", textTransform: "uppercase", marginBottom: "12px" }}>04</div>
                )}
                <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 600, lineHeight: 1.1, marginBottom: "32px", color: "#f0ebe3" }}>
                  Reflection
                </h2>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 3fr", gap: "clamp(24px, 4vw, 64px)" }}>
              {!mobile && <div />}
              <div>
                <p style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.85, color: "#c4b9ac", marginBottom: "24px" }}>
                  What came out of this was genuinely surprising. Chess is a game most people associate with silence and serious faces, and yet give every piece a voice and suddenly the whole board has personality. Pawns feel expendable. Knights feel ridiculous in the best way. The king arrives like he owns the place and leaves in a state.
                </p>
                <p style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.85, color: "#c4b9ac", marginBottom: "40px" }}>
                  The bigger lesson was about how much atmosphere can do. The performance did not need complex visuals or a complicated interface. The sound rules alone were enough to make a 64-square board feel like a kingdom with actual stakes. By the late game, with layers of war drums and chaos building underneath, even a routine rook trade felt like an event worth witnessing.
                </p>

                <blockquote
                  style={{
                    borderLeft: "3px solid #fbbf24",
                    paddingLeft: "28px",
                    margin: "40px 0",
                  }}
                >
                  <p
                    className="display"
                    style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontStyle: "italic", lineHeight: 1.5, color: "#e0d8ce", fontWeight: 400 }}
                  >
                    "Interaction does not need to be visually complex to feel rich. Get the rules right, commit to the bit, and even chess becomes theatre."
                  </p>
                </blockquote>

                <div style={{ display: "grid", gridTemplateColumns: mobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "#1e1b18", border: "1px solid #1e1b18", borderRadius: "4px", overflow: "hidden", marginTop: "40px" }}>
                  {[
                    { icon: "♟", insight: "Sound as character design",  body: "Each piece has a sonic identity. Pawns march. Kings declare. Bishops haunt." },
                    { icon: "⚡", insight: "Atmosphere over complexity",  body: "The phase system taught me that pacing shapes interaction as strongly as mechanics." },
                    { icon: "🎭", insight: "Rules liberate performance",  body: "Cage was right. Constraints don't limit the performer. They free them." },
                    { icon: "🔧", insight: "Scope early, scope often",    body: "Live play plus live sounds is a two-person job. Know your limits before game day." },
                  ].map((c) => (
                    <div
                      key={c.insight}
                      style={{
                        padding: mobile ? "20px 16px" : "28px 24px",
                        background: "#0e0d0c",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <span style={{ fontSize: "24px" }}>{c.icon}</span>
                      <p style={{ fontSize: "13px", color: "#e0d8ce", fontWeight: 500 }}>{c.insight}</p>
                      <p style={{ fontSize: "12px", color: "#7c6f64", lineHeight: 1.6 }}>{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid #1e1b18",
          padding: "40px clamp(24px, 6vw, 96px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "24px", opacity: 0.5 }}>♚</span>
          <span className="mono" style={{ fontSize: "11px", color: "#3a3530", letterSpacing: "0.1em" }}>
            CHECKMATE SOUNDSCAPE by THADDEUS LUBO
          </span>
        </div>
        <span className="mono" style={{ fontSize: "11px", color: "#3a3530" }}>
          Interactive/Algorithmic Sonic Performance · 2025
        </span>
      </footer>
    </div>
  );
}