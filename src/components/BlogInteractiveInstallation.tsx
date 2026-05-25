import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   DESIGN TOKENS / bioluminescent dark sci-fi matching the Embodied Earth slides
───────────────────────────────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

  :root {
    --black:      #030608;
    --surface-0:  #060c14;
    --surface-1:  #0a1220;
    --surface-2:  #0f1c2e;
    --surface-3:  #162438;
    --cyan:       #00d4ff;
    --cyan-dim:   rgba(0,212,255,0.18);
    --cyan-faint: rgba(0,212,255,0.06);
    --green:      #00ff88;
    --green-dim:  rgba(0,255,136,0.15);
    --amber:      #fbbf24;
    --amber-dim:  rgba(251,191,36,0.15);
    --red:        #ef4444;
    --red-dim:    rgba(239,68,68,0.15);
    --text-hi:    #e8f4ff;
    --text-mid:   #8aaac8;
    --text-lo:    #3a5a78;
    --border:     rgba(0,212,255,0.12);
    --border-hi:  rgba(0,212,255,0.28);
    --glow-cyan:  0 0 24px rgba(0,212,255,0.25);
    --glow-green: 0 0 24px rgba(0,255,136,0.25);
    --ease-out:   cubic-bezier(0.23, 1, 0.32, 1);
    --ease-inout: cubic-bezier(0.77, 0, 0.175, 1);
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  .ee-root {
    font-family: 'Outfit', sans-serif;
    background: var(--black);
    color: var(--text-hi);
    overflow-x: hidden;
  }

  /* ── GRID OVERLAY ── */
  .grid-bg {
    background-image:
      linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* ── TYPOGRAPHY ── */
  .ee-root h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    color: var(--text-hi);
    margin-bottom: 1.5rem;
  }
  .ee-root h3 {
    font-family: 'Syne', sans-serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-hi);
    margin-bottom: 0.7rem;
  }
  .ee-root p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--text-mid);
    margin-bottom: 1.3em;
  }

  /* ── LABEL ── */
  .section-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .section-label::after {
    content: '';
    width: 32px;
    height: 1px;
    background: var(--cyan);
    opacity: 0.4;
  }

  /* ── SECTION WRAPPER ── */
  .section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 7vw;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--border-hi), transparent);
  }

  /* ── GLOW CARD ── */
  .glow-card {
    background: var(--surface-1);
    border: 1px solid var(--border);
    position: relative;
    transition: border-color 0.25s var(--ease-out), box-shadow 0.25s var(--ease-out);
  }
  .glow-card:hover {
    border-color: var(--border-hi);
    box-shadow: var(--glow-cyan);
  }
  .glow-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 12px; height: 12px;
    border-top: 1px solid var(--cyan);
    border-left: 1px solid var(--cyan);
    opacity: 0.6;
  }
  .glow-card::after {
    content: '';
    position: absolute;
    bottom: 0; right: 0;
    width: 12px; height: 12px;
    border-bottom: 1px solid var(--cyan);
    border-right: 1px solid var(--cyan);
    opacity: 0.6;
  }

  /* ════════════════════════════════════════════
     HERO
  ════════════════════════════════════════════ */
  .hero {
    min-height: 100vh;
    background: var(--black);
    display: grid;
    grid-template-rows: 1fr auto;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }
  .hero-glow-1 {
    position: absolute;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
    top: -100px; left: -100px;
    pointer-events: none;
    animation: breathe 6s ease-in-out infinite;
  }
  .hero-glow-2 {
    position: absolute;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%);
    bottom: 0; right: 5%;
    pointer-events: none;
    animation: breathe 8s ease-in-out infinite 2s;
  }
  @keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.15); opacity: 0.7; }
  }

  .hero-inner {
    position: relative; z-index: 2;
    display: flex; flex-direction: column;
    justify-content: center;
    padding: 10vh 7vw 4vh;
    max-width: 1200px;
    margin: 0 auto; width: 100%;
  }
  .hero-eyebrow {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeUp 0.7s var(--ease-out) 0.1s forwards;
    display: flex; align-items: center; gap: 1rem;
  }
  .hero-eyebrow::before {
    content: '';
    width: 24px; height: 1px;
    background: var(--cyan);
  }
.hero-title {
  font-family: 'Syne', sans-serif;

  /* smoother scaling across devices */
  font-size: clamp(2.5rem, 6vw, 6.5rem);

  font-weight: 750;
  line-height: 0.95;

  letter-spacing: -0.015em;
  color: var(--text-hi);

  margin-bottom: 0.2em;

  opacity: 0;
  animation: fadeUp 0.7s var(--ease-out) 0.2s forwards;
}
  .hero-title-em {
    display: block;
    background: linear-gradient(90deg, var(--cyan), var(--green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-sub {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(0.95rem, 1.8vw, 1.2rem);
    color: var(--text-mid);
    max-width: 540px;
    line-height: 1.65;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    opacity: 0;
    animation: fadeUp 0.7s var(--ease-out) 0.3s forwards;
  }
  .hero-meta {
    display: flex; gap: 3rem; flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.7s var(--ease-out) 0.4s forwards;
  }
  .hero-meta-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.6rem; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--text-lo);
    margin-bottom: 0.3em;
  }
  .hero-meta-value {
    font-family: 'Outfit', sans-serif;
    font-size: 0.88rem; color: var(--text-mid);
  }
  .hero-scroll {
    position: relative; z-index: 2;
    padding: 1.5rem 7vw 2rem;
    display: flex; align-items: center; gap: 1rem;
    opacity: 0;
    animation: fadeUp 0.7s var(--ease-out) 0.6s forwards;
  }
  .hero-scroll-text {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.6rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--text-lo);
  }
  .hero-scroll-line {
    width: 48px; height: 1px;
    background: linear-gradient(to right, var(--text-lo), transparent);
  }

  /* Particles */
  .particles { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
  .particle {
    position: absolute; border-radius: 50%;
    opacity: 0;
    animation: drift var(--dur, 10s) ease-in-out infinite;
    animation-delay: var(--del, 0s);
  }
  @keyframes drift {
    0%   { transform: translateY(100vh) translateX(0) scale(0); opacity: 0; }
    8%   { opacity: 0.6; }
    92%  { opacity: 0.2; }
    100% { transform: translateY(-8vh) translateX(var(--dx, 20px)) scale(1.4); opacity: 0; }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ════════════════════════════════════════════
     PROBLEM SECTION / full image
  ════════════════════════════════════════════ */
  .problem-wrap { background: var(--surface-0); }
  .problem-image-block {
    width: 100%; max-width: 1200px; margin: 0 auto;
    padding: 0 7vw 4rem;
  }
  .problem-image-frame {
    position: relative;
    border: 1px solid var(--border);
    overflow: hidden;
  }
  .problem-image-frame::before {
    content: '';
    position: absolute; top: 0; left: 0;
    width: 20px; height: 20px;
    border-top: 2px solid var(--cyan);
    border-left: 2px solid var(--cyan);
    z-index: 3;
  }
  .problem-image-frame::after {
    content: '';
    position: absolute; bottom: 0; right: 0;
    width: 20px; height: 20px;
    border-bottom: 2px solid var(--cyan);
    border-right: 2px solid var(--cyan);
    z-index: 3;
  }
  .problem-image-frame img {
    width: 100%; display: block;
    filter: brightness(0.9) saturate(0.9);
    transition: filter 0.4s var(--ease-out);
  }
  .problem-image-frame:hover img { filter: brightness(1) saturate(1.05); }
  .problem-caption {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.62rem; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--text-lo);
    padding: 0.7rem 0;
    border-top: 1px solid var(--border);
    margin-top: 0;
  }

  /* ════════════════════════════════════════════
     CONCEPT
  ════════════════════════════════════════════ */
  .concept-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    margin-top: 2.5rem;
  }
  .concept-statement {
    font-family: 'Syne', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    color: var(--text-hi);
    border-left: 2px solid var(--cyan);
    padding-left: 1.2rem;
    margin-bottom: 1.8rem;
  }
  .sdg-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
  .sdg-tag {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.63rem; letter-spacing: 0.1em;
    padding: 0.3em 0.75em;
    background: var(--cyan-faint);
    border: 1px solid var(--border);
    color: var(--cyan);
    text-transform: uppercase;
    transition: background 0.2s, border-color 0.2s;
  }
  .sdg-tag:hover { background: var(--cyan-dim); border-color: var(--cyan); }

  /* ════════════════════════════════════════════
     EXPERIENCE JOURNEY IMAGE
  ════════════════════════════════════════════ */
  .journey-image-wrap {
    background: var(--surface-0);
    padding: 0 7vw 5rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  .journey-image-frame {
    position: relative;
    border: 1px solid var(--border);
    overflow: hidden;
  }
  .journey-image-frame::before {
    content: 'EXPERIENCE JOURNEY / FOUR ECOLOGICAL STATES';
    position: absolute; top: 0; left: 0; right: 0;
    padding: 0.6rem 1rem;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.6rem; letter-spacing: 0.2em;
    background: rgba(0,0,0,0.7);
    color: var(--text-lo);
    z-index: 2;
    border-bottom: 1px solid var(--border);
  }
  .journey-image-frame img { width: 100%; display: block; }

  /* ════════════════════════════════════════════
     STORYBOARD
  ════════════════════════════════════════════ */
  .storyboard-wrap { background: var(--black) grid-bg; }
  .storyboard-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    margin-top: 2.5rem;
    border: 1px solid var(--border);
    background: var(--border);
  }
  .panel {
    background: var(--surface-0);
    overflow: hidden;
    position: relative;
    transition: background 0.25s var(--ease-out);
  }
  .panel:hover { background: var(--surface-1); }
  .panel:hover .panel-sketch-wrap { filter: brightness(1.1); }
  .panel-sketch-wrap {
    transition: filter 0.25s var(--ease-out);
  }
  .panel-sketch { display: block; width: 100%; }
  .panel-caption { padding: 0.9rem 1.1rem 1.1rem; border-top: 1px solid var(--border); }
  .panel-num {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.6rem; letter-spacing: 0.18em;
    color: var(--cyan); margin-bottom: 0.35rem; text-transform: uppercase;
  }
  .panel-caption h4 {
    font-family: 'Syne', sans-serif; font-size: 0.92rem;
    font-weight: 600; color: var(--text-hi); margin-bottom: 0.35rem;
  }
  .panel-caption p {
    font-size: 0.78rem; line-height: 1.55;
    color: var(--text-mid); margin-bottom: 0;
  }

  /* ════════════════════════════════════════════
     SYSTEM FLOWCHART IMAGE
  ════════════════════════════════════════════ */
  .flowchart-image-frame {
    border: 1px solid var(--border);
    overflow: hidden;
    margin-top: 2.5rem;
    position: relative;
  }
  .flowchart-image-frame::before {
    content: 'INTERACTIVE SYSTEM / REAL-TIME ECOLOGICAL FEEDBACK';
    position: absolute; top: 0; left: 0; right: 0;
    padding: 0.55rem 1rem;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.58rem; letter-spacing: 0.22em;
    background: rgba(0,0,0,0.75); color: var(--text-lo);
    z-index: 2; border-bottom: 1px solid var(--border);
  }
  .flowchart-image-frame img { width: 100%; display: block; }

  /* SVG Flowchart below */
  .flowchart-svg-wrap {
    background: var(--surface-0);
    border: 1px solid var(--border);
    padding: 2.5rem;
    margin-top: 1px;
    overflow-x: auto;
  }

  /* ════════════════════════════════════════════
     TECH STACK
  ════════════════════════════════════════════ */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    margin-top: 2.5rem;
    background: var(--border);
    border: 1px solid var(--border);
  }
  .tech-block {
    background: var(--surface-0);
    padding: 2rem 2.2rem;
    transition: background 0.2s var(--ease-out);
  }
  .tech-block:hover { background: var(--surface-1); }
  .tech-block-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.6rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--cyan);
    margin-bottom: 1rem;
  }
  .tech-block h3 { font-size: 1.05rem; margin-bottom: 0.9rem; }
  .tech-list { list-style: none; font-size: 0.88rem; line-height: 1.9; }
  .tech-list li { display: flex; align-items: baseline; gap: 0.7rem; color: var(--text-mid); }
  .tech-list li::before { content: '>'; color: var(--cyan); font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; flex-shrink: 0; opacity: 0.7; }
  .tech-list li strong { color: var(--text-hi); font-weight: 500; }

  /* ════════════════════════════════════════════
     EHI ALGORITHM + S6 IMAGE
  ════════════════════════════════════════════ */
  .ehi-wrap { background: var(--surface-0); }
  .ehi-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
    margin-top: 2.5rem;
  }
  .ehi-image-frame {
    border: 1px solid var(--border);
    overflow: hidden;
    position: sticky;
    top: 2rem;
  }
  .ehi-image-frame::before {
    content: 'EHI / FEEDBACK STATES';
    display: block;
    padding: 0.55rem 1rem;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.58rem; letter-spacing: 0.2em;
    background: rgba(0,0,0,0.7); color: var(--text-lo);
    border-bottom: 1px solid var(--border);
  }
  .ehi-image-frame img { width: 100%; display: block; }

  .ehi-formula {
    background: var(--black);
    border: 1px solid var(--border);
    border-left: 2px solid var(--cyan);
    padding: 1.8rem 2rem;
    margin: 1.5rem 0;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.88rem;
    color: var(--text-mid);
    line-height: 2;
    overflow-x: auto;
    white-space: pre;
  }
  .ehi-formula .fn { color: var(--cyan); }
  .ehi-formula .var { color: var(--green); }
  .ehi-formula .comment { color: var(--text-lo); }

  .ehi-states {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    margin-top: 1.5rem;
  }
  .ehi-state {
    padding: 1.2rem 1rem;
    text-align: center;
    background: var(--black);
    transition: background 0.2s var(--ease-out);
  }
  .ehi-state:hover { background: var(--surface-1); }
  .ehi-range {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.95rem; font-weight: 500;
    margin-bottom: 0.4rem;
  }
  .ehi-state-name {
    font-family: 'Outfit', sans-serif;
    font-size: 0.78rem; color: var(--text-mid);
    margin-bottom: 0.6rem;
  }
  .ehi-dot { width: 8px; height: 8px; border-radius: 50%; margin: 0 auto; }

  .ehi-state:nth-child(1) .ehi-range { color: var(--green); }
  .ehi-state:nth-child(1) .ehi-dot { background: var(--green); box-shadow: 0 0 8px var(--green); }
  .ehi-state:nth-child(2) .ehi-range { color: #84cc16; }
  .ehi-state:nth-child(2) .ehi-dot { background: #84cc16; box-shadow: 0 0 8px #84cc16; }
  .ehi-state:nth-child(3) .ehi-range { color: var(--amber); }
  .ehi-state:nth-child(3) .ehi-dot { background: var(--amber); box-shadow: 0 0 8px var(--amber); }
  .ehi-state:nth-child(4) .ehi-range { color: var(--red); }
  .ehi-state:nth-child(4) .ehi-dot { background: var(--red); box-shadow: 0 0 8px var(--red); }

  .threshold-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1px; background: var(--border);
    border: 1px solid var(--border); margin-top: 1rem;
  }
  .threshold-block { background: var(--black); padding: 1.3rem; }
  .threshold-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.6rem; letter-spacing: 0.15em;
    text-transform: uppercase; margin-bottom: 0.7rem;
  }
  .threshold-block:first-child .threshold-label { color: var(--red); }
  .threshold-block:last-child .threshold-label { color: var(--green); }
  .threshold-list { list-style: none; font-size: 0.83rem; }
  .threshold-list li {
    display: flex; align-items: baseline; gap: 0.5rem;
    color: var(--text-mid); line-height: 2;
  }
  .threshold-list li::before { content: '-'; flex-shrink: 0; }
  .threshold-block:first-child .threshold-list li::before { color: var(--red); }
  .threshold-block:last-child .threshold-list li::before { color: var(--green); }

  /* ════════════════════════════════════════════
     OBJECTS
  ════════════════════════════════════════════ */
  .objects-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 1px; background: var(--border);
    border: 1px solid var(--border); margin-top: 2.5rem;
  }
  .objects-block {
    background: var(--surface-0); padding: 2rem 2.2rem;
    transition: background 0.2s var(--ease-out);
  }
  .objects-block:hover { background: var(--surface-1); }
  .objects-block h3 { font-size: 1rem; margin-bottom: 0.8rem; }
  .objects-block p { font-size: 0.88rem; line-height: 1.7; color: var(--text-mid); margin-bottom: 0; }
  .obj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.9rem; }
  .obj-tag {
    font-family: 'IBM Plex Mono', monospace; font-size: 0.62rem;
    padding: 0.25em 0.65em; letter-spacing: 0.08em;
  }
  .obj-tag.disruptive {
    background: var(--red-dim); border: 1px solid rgba(239,68,68,0.3); color: #fca5a5;
  }
  .obj-tag.restorative {
    background: var(--green-dim); border: 1px solid rgba(0,255,136,0.25); color: #86efac;
  }

  /* ════════════════════════════════════════════
     STATEMENT
  ════════════════════════════════════════════ */
  .statement-section { background: var(--surface-0); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .statement-inner {
    max-width: 900px; margin: 0 auto;
    padding: 7rem 7vw; text-align: center;
  }
  .statement-mark {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.62rem; letter-spacing: 0.22em;
    text-transform: uppercase; color: var(--cyan);
    margin-bottom: 2rem;
    display: flex; align-items: center; justify-content: center; gap: 1rem;
  }
  .statement-mark::before, .statement-mark::after {
    content: ''; width: 40px; height: 1px; background: var(--cyan); opacity: 0.4;
  }
  .statement-quote {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.3rem, 3vw, 2.2rem);
    font-weight: 500;
    line-height: 1.5;
    color: var(--text-hi);
    margin-bottom: 2rem;
  }
  .statement-quote span { color: var(--cyan); }
  .statement-attr {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.63rem; letter-spacing: 0.15em;
    color: var(--text-lo); text-transform: uppercase;
  }

  /* ════════════════════════════════════════════
     REFLECTION
  ════════════════════════════════════════════ */
  .reflection-grid {
    display: grid; grid-template-columns: 2fr 1fr;
    gap: 4rem; align-items: start; margin-top: 2.5rem;
  }
  .reflection-body h3 { margin-top: 2rem; }
  .reflection-body h3:first-child { margin-top: 0; }
  .reflection-note {
    background: var(--surface-1);
    border: 1px solid var(--border);
    padding: 1.4rem; margin-bottom: 1px;
    transition: border-color 0.2s var(--ease-out);
  }
  .reflection-note:hover { border-color: var(--border-hi); }
  .reflection-note-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.6rem; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--cyan);
    margin-bottom: 0.5rem;
  }
  .reflection-note p { font-size: 0.84rem; line-height: 1.65; color: var(--text-mid); margin-bottom: 0; }

  /* ════════════════════════════════════════════
     FOOTER
  ════════════════════════════════════════════ */
  .ee-footer {
    background: var(--black);
    border-top: 1px solid var(--border);
    padding: 3rem 7vw;
    display: flex; justify-content: space-between; align-items: center;
  }
  .footer-brand {
    font-family: 'Syne', sans-serif; font-size: 1.1rem;
    font-weight: 700; color: var(--text-hi);
    display: flex; align-items: center; gap: 0.6rem;
  }
  .footer-brand span {
    background: linear-gradient(90deg, var(--cyan), var(--green));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .footer-info {
    font-family: 'IBM Plex Mono', monospace; font-size: 0.6rem;
    letter-spacing: 0.1em; color: var(--text-lo);
    text-align: right; line-height: 2;
  }

  /* ════════════════════════════════════════════
     REVEAL
  ════════════════════════════════════════════ */
  .reveal {
    opacity: 0; transform: translateY(24px);
    transition: opacity 0.65s var(--ease-out), transform 0.65s var(--ease-out);
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-d1 { transition-delay: 0.08s; }
  .reveal-d2 { transition-delay: 0.16s; }
  .reveal-d3 { transition-delay: 0.24s; }

  @media (prefers-reduced-motion: reduce) {
    .reveal { transition: opacity 0.3s ease; transform: none; }
    .particle, .hero-glow-1, .hero-glow-2 { animation: none; opacity: 0.2; }
  }

  @media (max-width: 900px) {
    .concept-grid, .ehi-grid, .reflection-grid { grid-template-columns: 1fr; }
    .storyboard-grid { grid-template-columns: 1fr 1fr; }
    .tech-grid, .objects-grid, .threshold-grid { grid-template-columns: 1fr; }
    .ehi-states { grid-template-columns: repeat(2, 1fr); }
    .ee-footer { flex-direction: column; gap: 1.5rem; }
    .footer-info { text-align: center; }
    .hero-meta { gap: 2rem; }
  }
`;

/* ─────────────────────────────────────────────────────────────────────────────
   PARTICLE DATA
───────────────────────────────────────────────────────────────────────────── */
const PARTICLES = [
    { left: "12%", size: 3, dur: "12s", del: "0s", dx: "40px", color: "#00d4ff" },
    { left: "28%", size: 2, dur: "9s", del: "2s", dx: "-24px", color: "#00ff88" },
    { left: "44%", size: 4, dur: "14s", del: "0.5s", dx: "18px", color: "#00d4ff" },
    { left: "60%", size: 2, dur: "10s", del: "3.5s", dx: "-32px", color: "#00ff88" },
    { left: "75%", size: 3, dur: "11s", del: "1s", dx: "28px", color: "#00d4ff" },
    { left: "88%", size: 2, dur: "13s", del: "4s", dx: "-18px", color: "#fbbf24" },
    { left: "20%", size: 2, dur: "8s", del: "5s", dx: "22px", color: "#fbbf24" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function BlogInteractiveInstallation() {
    const rootRef = useRef<HTMLDivElement>(null);
    const base = import.meta.env.BASE_URL;

    const S2 = `${base}images/InteractiveArt/S2.png`;
    const S6 = `${base}images/InteractiveArt/S6.png`;
    const S7 = `${base}images/InteractiveArt/S7.png`;
    const S8 = `${base}images/InteractiveArt/S8.png`;


    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
        );
        el.querySelectorAll(".reveal").forEach((node) => obs.observe(node));
        return () => obs.disconnect();
    }, []);

    return (
        <div className="ee-root" ref={rootRef}>
            <style>{css}</style>

            {/* ══ HERO ══════════════════════════════════════════ */}
            <header className="hero">
                <div className="hero-glow-1" />
                <div className="hero-glow-2" />
                <div className="particles">
                    {PARTICLES.map((p, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: p.left,
                                width: p.size,
                                height: p.size,
                                background: p.color,
                                boxShadow: `0 0 6px ${p.color}`,
                                "--dur": p.dur,
                                "--del": p.del,
                                "--dx": p.dx,
                            } as React.CSSProperties}
                        />
                    ))}
                </div>

                <div className="hero-inner">
                    <div className="hero-eyebrow">CS6042 / Assignment 1 / Interactive Installation</div>
                    <h1 className="hero-title">
                        Embodied
                        <span className="hero-title-em">Earth</span>
                    </h1>
                    <p className="hero-sub">
                        A living feedback system where human presence shapes and destroys a projected ecological world
                    </p>
                    <div className="hero-meta">
                        {[
                            { label: "Author", value: "Thaddeus Lubo" },
                            { label: "Theme", value: "UN Sustainability Goals" },
                            { label: "Medium", value: "Interactive Installation" },
                            { label: "Year", value: "2026" },
                        ].map(({ label, value }) => (
                            <div key={label}>
                                <div className="hero-meta-label">{label}</div>
                                <div className="hero-meta-value">{value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* ══ PROBLEM ═══════════════════════════════════════ */}
            <div className="problem-wrap">
                <div className="section">
                    <div className="section-label reveal">01 / The Problem</div>
                    <h2 className="reveal">
                        Climate change is abstract.<br />We made it <span style={{ color: "var(--cyan)" }}>felt.</span>
                    </h2>
                    <p className="reveal" style={{ maxWidth: 640 }}>
                        People understand climate data intellectually, but the emotional and embodied experience of ecological
                        collapse remains distant. Embodied Earth closes that gap by making collective behaviour viscerally visible.
                    </p>
                </div>
                <div className="problem-image-block reveal">
                    <div className="problem-image-frame">
                        <img src={S2} alt="SDG 13, 14, 15: climate action, life below water, life on land" />
                    </div>
                    <div className="problem-caption">
                        Slide 02 / SDG 13 Climate Action · SDG 14 Life Below Water · SDG 15 Life on Land
                    </div>
                </div>
            </div>

            <div className="divider" />

            {/* ══ CONCEPT ═══════════════════════════════════════ */}
            <div style={{ background: "var(--black)" }}>
                <div className="section">
                    <div className="section-label reveal">02 / The Concept</div>
                    <div className="concept-grid">
                        <div>
                            <h2 className="reveal">A room that breathes with you</h2>
                            <p className="concept-statement reveal">
                                Embodied Earth transforms a room into a responsive ecosystem, where participants do not observe
                                nature; they become its pressure.
                            </p>
                            <p className="reveal">
                                The installation projects a living ecological world onto floor and walls. As participants move,
                                gather, and crowd, the ecosystem responds: vegetation withers, water darkens, coral bleaches.
                                The relationship is direct, immediate, and inescapable.
                            </p>
                            <p className="reveal">
                                Recovery only comes when density decreases. The system is asymmetric by design; damage accumulates
                                faster than healing, mirroring the real dynamics of ecological tipping points.
                            </p>
                            <div className="sdg-tags reveal">
                                {["SDG 13 Climate Action", "SDG 14 Life Below Water", "SDG 15 Life on Land", "SDG 11 Sustainable Cities"].map((t) => (
                                    <span key={t} className="sdg-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <svg viewBox="0 0 340 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                                <defs>
                                    <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.15" />
                                        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                                    </radialGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                    </filter>
                                </defs>
                                <circle cx="170" cy="200" r="155" fill="none" stroke="rgba(0,212,255,0.08)" strokeWidth="1" strokeDasharray="4 8" />
                                <circle cx="170" cy="200" r="110" fill="none" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" strokeDasharray="2 10" />
                                <circle cx="170" cy="200" r="75" fill="url(#cg)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" filter="url(#glow)" />
                                <text x="170" y="210" textAnchor="middle" fontSize="36" fontFamily="serif">🌍</text>
                                {[
                                    { cx: 170, cy: 50, label: "DENSITY", icon: "👥" },
                                    { cx: 318, cy: 200, label: "DURATION", icon: "⏱" },
                                    { cx: 170, cy: 348, label: "ACCUMULATION", icon: "📦" },
                                    { cx: 22, cy: 200, label: "EHI", icon: "🌡" },
                                ].map(({ cx, cy, label, icon }) => (
                                    <g key={label}>
                                        <rect x={cx - 28} y={cy - 28} width="56" height="56" rx="4" fill="rgba(6,12,20,0.9)" stroke="rgba(0,212,255,0.25)" strokeWidth="1" />
                                        <text x={cx} y={cy - 6} textAnchor="middle" fontSize="16">{icon}</text>
                                        <text x={cx} y={cy + 10} textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7" fill="#6a8ab0" letterSpacing="1">{label}</text>
                                    </g>
                                ))}
                                {[
                                    { x1: 170, y1: 78, x2: 170, y2: 122 },
                                    { x1: 290, y1: 200, x2: 248, y2: 200 },
                                    { x1: 170, y1: 322, x2: 170, y2: 278 },
                                    { x1: 50, y1: 200, x2: 92, y2: 200 },
                                ].map((l, i) => (
                                    <line key={i} {...l} stroke="rgba(0,212,255,0.4)" strokeWidth="1" strokeDasharray="3 4" markerEnd="url(#arrC)" />
                                ))}
                                <defs>
                                    <marker id="arrC" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
                                        <polygon points="0 0, 6 2.5, 0 5" fill="rgba(0,212,255,0.6)" />
                                    </marker>
                                </defs>
                                <text x="170" y="20" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="#3a5a78" letterSpacing="2">FEEDBACK LOOP</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider" />

            {/* ══ EXPERIENCE JOURNEY (S8) ════════════════════════ */}
            <div style={{ background: "var(--surface-0)" }}>
                <div className="section" style={{ paddingBottom: "2rem" }}>
                    <div className="section-label reveal">03 / Experience Journey</div>
                    <h2 className="reveal">Four ecological states</h2>
                    <p className="reveal" style={{ maxWidth: 620 }}>
                        The visitor's arc moves from equilibrium through individual interaction, collective strain, and finally
                        regeneration. Each state is defined by a distinct EHI band and corresponding visual world.
                    </p>
                </div>
                <div className="journey-image-wrap reveal">
                    <div className="journey-image-frame">
                        <img src={S8} alt="Embodied Earth experience journey: four ecological states" />
                    </div>
                </div>
                {/* Spacer */}
                <div style={{ height: "4rem" }} />
            </div>

            <div className="divider" />

            {/* ══ STORYBOARD ════════════════════════════════════ */}
            <div style={{ background: "var(--black)" }}>
                <div className="section">
                    <div className="section-label reveal">04 / Storyboard</div>
                    <h2 className="reveal">Six scenes of ecological consequence</h2>
                    <p className="reveal" style={{ maxWidth: 620 }}>
                        Moment-by-moment sketches of the visitor experience, from first encounter through collapse and toward
                        slow recovery.
                    </p>
                    <div className="storyboard-grid reveal">

                        {/* Panel 01 */}
                        <div className="panel">
                            <div className="panel-sketch-wrap">
                                <svg className="panel-sketch" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="320" height="200" fill="#030608" />
                                    <rect width="320" height="200" fill="none" opacity="0.4"
                                        style={{ backgroundImage: "linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg,rgba(0,212,255,0.02) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                                    <defs>
                                        <radialGradient id="p1g" cx="50%" cy="80%" r="60%">
                                            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.18" />
                                            <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
                                        </radialGradient>
                                        <filter id="glow1"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    <ellipse cx="160" cy="168" rx="130" ry="28" fill="url(#p1g)" />
                                    {/* Water stream */}
                                    <path d="M 30 178 Q 80 170 130 174 Q 180 178 230 172 Q 270 168 300 172" fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.6" filter="url(#glow1)" />
                                    <path d="M 30 183 Q 80 176 130 180 Q 180 184 230 178 Q 270 174 300 178" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3" />
                                    {/* Trees */}
                                    {[55, 95, 195, 245].map((x, i) => (
                                        <g key={x}>
                                            <line x1={x} y1="170" x2={x} y2={148 - i * 2} stroke="#00ff88" strokeWidth="1.5" opacity="0.7" filter="url(#glow1)" />
                                            <circle cx={x} cy={140 - i * 2} r={10 + i} fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.5" />
                                            <circle cx={x} cy={140 - i * 2} r={5 + i * 0.5} fill="#00ff88" opacity="0.15" />
                                        </g>
                                    ))}
                                    {/* Coral walls */}
                                    <path d="M 18 85 Q 22 68 26 78 Q 30 62 34 74 Q 37 66 40 74" fill="none" stroke="#ff6040" strokeWidth="1.5" opacity="0.5" filter="url(#glow1)" />
                                    <path d="M 278 90 Q 282 72 286 82 Q 290 65 294 76 Q 297 68 300 76" fill="none" stroke="#ff6040" strokeWidth="1.5" opacity="0.5" filter="url(#glow1)" />
                                    {/* Projector beams */}
                                    <line x1="40" y1="8" x2="100" y2="168" stroke="rgba(0,212,255,0.12)" strokeWidth="0.5" strokeDasharray="2 6" />
                                    <line x1="280" y1="8" x2="220" y2="168" stroke="rgba(0,212,255,0.12)" strokeWidth="0.5" strokeDasharray="2 6" />
                                    {/* HUD */}
                                    <rect x="218" y="12" width="88" height="26" rx="2" fill="rgba(0,0,0,0.7)" stroke="rgba(0,212,255,0.25)" strokeWidth="0.8" />
                                    <text x="262" y="23" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="6.5" fill="#3a5a78" letterSpacing="0.5">EHI</text>
                                    <text x="262" y="34" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="#00ff88" fontWeight="500">100</text>
                                    <text x="160" y="196" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7" fill="#00ff88" letterSpacing="0.5" opacity="0.7">ECOSYSTEM INITIALISED</text>
                                </svg>
                            </div>
                            <div className="panel-caption">
                                <div className="panel-num">Scene 01</div>
                                <h4>The Empty Room</h4>
                                <p>Visitors enter a thriving projected ecosystem: lush floor vegetation, cyan water streams, vibrant coral on the walls. EHI at 100.</p>
                            </div>
                        </div>

                        {/* Panel 02 */}
                        <div className="panel">
                            <div className="panel-sketch-wrap">
                                <svg className="panel-sketch" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="320" height="200" fill="#040810" />
                                    <defs>
                                        <filter id="glow2"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    <ellipse cx="160" cy="168" rx="128" ry="26" fill="rgba(0,255,136,0.08)" />
                                    <path d="M 30 178 Q 90 172 150 175 Q 210 178 280 174" fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.5" filter="url(#glow2)" />
                                    {/* Trees still ok */}
                                    <line x1="52" y1="170" x2="52" y2="148" stroke="#00ff88" strokeWidth="1.5" opacity="0.65" />
                                    <circle cx="52" cy="141" r="10" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.45" />
                                    <line x1="262" y1="170" x2="262" y2="148" stroke="#00ff88" strokeWidth="1.5" opacity="0.65" />
                                    <circle cx="262" cy="141" r="10" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.45" />
                                    {/* Person 1 */}
                                    <ellipse cx="128" cy="178" rx="16" ry="6" fill="rgba(0,212,255,0.12)" />
                                    <circle cx="128" cy="158" r="8" fill="none" stroke="#00d4ff" strokeWidth="1.5" filter="url(#glow2)" />
                                    <rect x="121" y="165" width="14" height="16" rx="3" fill="none" stroke="#00d4ff" strokeWidth="1.5" filter="url(#glow2)" />
                                    {/* Person 2 */}
                                    <ellipse cx="192" cy="176" rx="14" ry="5" fill="rgba(0,212,255,0.12)" />
                                    <circle cx="192" cy="157" r="7" fill="none" stroke="#00d4ff" strokeWidth="1.5" filter="url(#glow2)" />
                                    <rect x="186" y="163" width="12" height="15" rx="3" fill="none" stroke="#00d4ff" strokeWidth="1.5" filter="url(#glow2)" />
                                    {/* Scan lines from camera */}
                                    <line x1="160" y1="6" x2="128" y2="156" stroke="rgba(0,212,255,0.3)" strokeWidth="0.5" strokeDasharray="3 6" />
                                    <line x1="160" y1="6" x2="192" y2="156" stroke="rgba(0,212,255,0.3)" strokeWidth="0.5" strokeDasharray="3 6" />
                                    {/* Ripple */}
                                    <ellipse cx="128" cy="176" rx="24" ry="9" fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="0.7" strokeDasharray="2 4" />
                                    <ellipse cx="192" cy="174" rx="20" ry="8" fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="0.7" strokeDasharray="2 4" />
                                    {/* HUD */}
                                    <rect x="218" y="12" width="88" height="26" rx="2" fill="rgba(0,0,0,0.7)" stroke="rgba(0,212,255,0.25)" strokeWidth="0.8" />
                                    <text x="262" y="23" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="6.5" fill="#3a5a78">EHI</text>
                                    <text x="262" y="34" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="#84cc16" fontWeight="500">84</text>
                                    <text x="160" y="196" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7" fill="#00d4ff" letterSpacing="0.5" opacity="0.7">FIRST CONTACT · MINIMAL IMPACT</text>
                                </svg>
                            </div>
                            <div className="panel-caption">
                                <div className="panel-num">Scene 02</div>
                                <h4>First Contact</h4>
                                <p>Early visitors explore. The depth camera detects their positions. Minor disruption ripples where they stand, barely perceptible.</p>
                            </div>
                        </div>

                        {/* Panel 03 */}
                        <div className="panel">
                            <div className="panel-sketch-wrap">
                                <svg className="panel-sketch" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="320" height="200" fill="#060a0e" />
                                    <defs>
                                        <filter id="glow3"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    <ellipse cx="160" cy="170" rx="126" ry="24" fill="rgba(0,255,136,0.05)" />
                                    {/* Trees stressed */}
                                    <line x1="46" y1="170" x2="46" y2="152" stroke="#00ff88" strokeWidth="1.2" opacity="0.45" />
                                    <circle cx="46" cy="145" r="8" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.35" />
                                    <line x1="268" y1="170" x2="268" y2="152" stroke="#00ff88" strokeWidth="1.2" opacity="0.45" />
                                    <circle cx="268" cy="145" r="8" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.35" />
                                    {/* Objects */}
                                    <ellipse cx="140" cy="186" rx="20" ry="9" fill="rgba(251,191,36,0.2)" stroke="rgba(251,191,36,0.5)" strokeWidth="1" />
                                    <text x="140" y="190" textAnchor="middle" fontSize="11">🎒</text>
                                    <ellipse cx="186" cy="188" rx="18" ry="8" fill="rgba(251,191,36,0.2)" stroke="rgba(251,191,36,0.5)" strokeWidth="1" />
                                    <text x="186" y="192" textAnchor="middle" fontSize="11">🧱</text>
                                    <path d="M 96 182 Q 124 177 148 180" fill="none" stroke="rgba(251,191,36,0.6)" strokeWidth="2.5" strokeLinecap="round" />
                                    {/* 3 people */}
                                    {[116, 158, 200].map((cx, i) => (
                                        <g key={cx}>
                                            <circle cx={cx} cy={158} r="7" fill="none" stroke={i === 1 ? "#fbbf24" : "#00d4ff"} strokeWidth="1.3" filter="url(#glow3)" />
                                            <rect x={cx - 6} y="164" width="12" height="14" rx="2" fill="none" stroke={i === 1 ? "#fbbf24" : "#00d4ff"} strokeWidth="1.3" filter="url(#glow3)" />
                                        </g>
                                    ))}
                                    {/* Disturbance field */}
                                    <ellipse cx="160" cy="174" rx="74" ry="20" fill="none" stroke="rgba(251,191,36,0.2)" strokeWidth="1" strokeDasharray="3 5" />
                                    {/* HUD */}
                                    <rect x="218" y="12" width="88" height="26" rx="2" fill="rgba(0,0,0,0.7)" stroke="rgba(0,212,255,0.2)" strokeWidth="0.8" />
                                    <text x="262" y="23" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="6.5" fill="#3a5a78">EHI</text>
                                    <text x="262" y="34" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="#fbbf24" fontWeight="500">62</text>
                                    <text x="160" y="196" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7" fill="#fbbf24" letterSpacing="0.5" opacity="0.8">OBJECTS PLACED · SIMULATION STRAINED</text>
                                </svg>
                            </div>
                            <div className="panel-caption">
                                <div className="panel-num">Scene 03</div>
                                <h4>Objects Introduced</h4>
                                <p>Participants receive bean bags, ropes, and LEGO bricks representing settlement and construction. Ecological stress increases.</p>
                            </div>
                        </div>

                        {/* Panel 04 */}
                        <div className="panel">
                            <div className="panel-sketch-wrap">
                                <svg className="panel-sketch" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="320" height="200" fill="#0a0404" />
                                    <defs>
                                        <radialGradient id="p4red" cx="50%" cy="60%" r="50%">
                                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.12" />
                                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                                        </radialGradient>
                                        <filter id="glow4"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    <ellipse cx="160" cy="170" rx="130" ry="26" fill="url(#p4red)" />
                                    {/* Dead trees */}
                                    <line x1="42" y1="170" x2="42" y2="154" stroke="#5a3a28" strokeWidth="2" />
                                    <line x1="42" y1="154" x2="34" y2="142" stroke="#5a3a28" strokeWidth="1.2" />
                                    <line x1="42" y1="154" x2="52" y2="144" stroke="#5a3a28" strokeWidth="1.2" />
                                    <line x1="274" y1="170" x2="274" y2="152" stroke="#5a3a28" strokeWidth="2" />
                                    <line x1="274" y1="152" x2="266" y2="142" stroke="#5a3a28" strokeWidth="1.2" />
                                    {/* Dark water */}
                                    <path d="M 30 185 Q 90 180 160 183 Q 220 186 290 181" fill="none" stroke="rgba(30,50,80,0.8)" strokeWidth="3" />
                                    {/* Bleached coral */}
                                    <path d="M 16 88 Q 20 70 24 82 Q 28 65 32 76" fill="none" stroke="rgba(230,220,210,0.5)" strokeWidth="1.5" />
                                    <path d="M 276 88 Q 280 70 284 82 Q 288 65 292 76" fill="none" stroke="rgba(230,220,210,0.5)" strokeWidth="1.5" />
                                    {/* Crowd of 5 */}
                                    {[108, 128, 150, 172, 194].map((cx, i) => (
                                        <g key={cx}>
                                            <circle cx={cx} cy={160} r="6" fill="none" stroke="#ef4444" strokeWidth="1" filter="url(#glow4)" opacity="0.8" />
                                            <rect x={cx - 5} y="165" width="10" height="12" rx="2" fill="none" stroke="#ef4444" strokeWidth="1" filter="url(#glow4)" opacity="0.8" />
                                        </g>
                                    ))}
                                    {/* Critical pulse */}
                                    <circle cx="160" cy="108" r="36" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="1" />
                                    <circle cx="160" cy="108" r="24" fill="none" stroke="rgba(239,68,68,0.35)" strokeWidth="1.2" />
                                    <text x="160" y="112" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="#ef4444" letterSpacing="0.5" filter="url(#glow4)">CRITICAL</text>
                                    {/* HUD */}
                                    <rect x="218" y="10" width="88" height="26" rx="2" fill="rgba(20,4,4,0.9)" stroke="rgba(239,68,68,0.35)" strokeWidth="0.8" />
                                    <text x="262" y="21" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="6.5" fill="#8a3a3a">EHI</text>
                                    <text x="262" y="32" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="#ef4444" fontWeight="500" filter="url(#glow4)">14</text>
                                    <text x="160" y="196" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7" fill="#ef4444" letterSpacing="0.5" opacity="0.9">SYSTEMIC COLLAPSE · EHI: 14</text>
                                </svg>
                            </div>
                            <div className="panel-caption">
                                <div className="panel-num">Scene 04</div>
                                <h4>Collapse</h4>
                                <p>Density accumulates. EHI plummets. Vegetation dies, water darkens, coral bleaches white. The room signals systemic failure.</p>
                            </div>
                        </div>

                        {/* Panel 05 */}
                        <div className="panel">
                            <div className="panel-sketch-wrap">
                                <svg className="panel-sketch" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="320" height="200" fill="#04090e" />
                                    <defs>
                                        <filter id="glow5"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    {/* Sparse new growth */}
                                    <line x1="66" y1="170" x2="66" y2="153" stroke="#00ff88" strokeWidth="1.5" opacity="0.5" filter="url(#glow5)" />
                                    <circle cx="66" cy="146" r="8" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.4" />
                                    <circle cx="108" cy="182" r="4" fill="#00ff88" opacity="0.3" filter="url(#glow5)" />
                                    <circle cx="124" cy="178" r="3" fill="#00ff88" opacity="0.25" />
                                    {/* Solar mirror */}
                                    <rect x="192" y="124" width="32" height="22" rx="2" fill="rgba(0,212,255,0.15)" stroke="rgba(0,212,255,0.5)" strokeWidth="1.2" filter="url(#glow5)" />
                                    {[129, 134, 139].map((y) => <line key={y} x1="192" y1={y} x2="224" y2={y} stroke="rgba(0,212,255,0.3)" strokeWidth="0.5" />)}
                                    <line x1="208" y1="124" x2="208" y2="146" stroke="rgba(0,212,255,0.3)" strokeWidth="0.5" />
                                    {/* Plastic tree */}
                                    <line x1="142" y1="180" x2="142" y2="160" stroke="#00cc66" strokeWidth="2" opacity="0.8" />
                                    <circle cx="142" cy="153" r="10" fill="rgba(0,204,102,0.2)" stroke="#00cc66" strokeWidth="1" filter="url(#glow5)" />
                                    <text x="142" y="157" textAnchor="middle" fontSize="10">🌱</text>
                                    {/* Glow halos on objects */}
                                    <ellipse cx="142" cy="172" rx="22" ry="9" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth="0.7" strokeDasharray="2 4" />
                                    <ellipse cx="208" cy="138" rx="22" ry="13" fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="0.7" strokeDasharray="2 4" />
                                    {/* 2 spread-out people */}
                                    <circle cx="96" cy="160" r="6" fill="none" stroke="#00ff88" strokeWidth="1.2" filter="url(#glow5)" />
                                    <rect x="91" y="165" width="10" height="12" rx="2" fill="none" stroke="#00ff88" strokeWidth="1.2" filter="url(#glow5)" />
                                    <circle cx="252" cy="160" r="6" fill="none" stroke="#00ff88" strokeWidth="1.2" filter="url(#glow5)" />
                                    <rect x="247" y="165" width="10" height="12" rx="2" fill="none" stroke="#00ff88" strokeWidth="1.2" filter="url(#glow5)" />
                                    {/* HUD */}
                                    <rect x="218" y="10" width="88" height="26" rx="2" fill="rgba(0,0,0,0.8)" stroke="rgba(0,212,255,0.2)" strokeWidth="0.8" />
                                    <text x="262" y="21" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="6.5" fill="#3a5a78">EHI</text>
                                    <text x="262" y="32" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="#84cc16" fontWeight="500">38</text>
                                    <text x="160" y="196" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7" fill="#00ff88" letterSpacing="0.5" opacity="0.7">RESTORATIVE OBJECTS DEPLOYED</text>
                                </svg>
                            </div>
                            <div className="panel-caption">
                                <div className="panel-num">Scene 05</div>
                                <h4>Intervention</h4>
                                <p>Participants receive plastic trees and mirrors. These positively shift EHI but never erase accumulated damage.</p>
                            </div>
                        </div>

                        {/* Panel 06 */}
                        <div className="panel">
                            <div className="panel-sketch-wrap">
                                <svg className="panel-sketch" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="320" height="200" fill="#050a0f" />
                                    <defs>
                                        <filter id="glow6"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                                    </defs>
                                    {/* Partial vegetation */}
                                    <line x1="58" y1="170" x2="58" y2="148" stroke="#00ff88" strokeWidth="1.5" opacity="0.6" filter="url(#glow6)" />
                                    <circle cx="58" cy="141" r="9" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.45" />
                                    <line x1="92" y1="174" x2="92" y2="158" stroke="#00ff88" strokeWidth="1.2" opacity="0.45" />
                                    <circle cx="92" cy="152" r="7" fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.35" />
                                    {/* Water recovering */}
                                    <path d="M 36 182 Q 96 176 160 179 Q 220 182 284 178" fill="none" stroke="#00b4cc" strokeWidth="2" opacity="0.5" filter="url(#glow6)" />
                                    {/* Contemplative person */}
                                    <circle cx="108" cy="158" r="7" fill="none" stroke="#00ff88" strokeWidth="1.5" filter="url(#glow6)" />
                                    <rect x="102" y="164" width="12" height="15" rx="3" fill="none" stroke="#00ff88" strokeWidth="1.5" filter="url(#glow6)" />
                                    {/* Thought bubble */}
                                    <circle cx="120" cy="146" r="3.5" fill="none" stroke="rgba(0,255,136,0.5)" strokeWidth="0.7" />
                                    <circle cx="127" cy="139" r="5" fill="none" stroke="rgba(0,255,136,0.5)" strokeWidth="0.7" />
                                    <ellipse cx="138" cy="131" rx="13" ry="9" fill="rgba(5,10,15,0.9)" stroke="rgba(0,255,136,0.5)" strokeWidth="0.9" />
                                    <text x="138" y="135" textAnchor="middle" fontSize="10">🌍</text>
                                    {/* Second person */}
                                    <circle cx="214" cy="160" r="6" fill="none" stroke="#00ff88" strokeWidth="1.3" filter="url(#glow6)" />
                                    <rect x="209" y="165" width="10" height="13" rx="2" fill="none" stroke="#00ff88" strokeWidth="1.3" filter="url(#glow6)" />
                                    {/* Recovery bar */}
                                    <rect x="16" y="14" width="160" height="12" rx="2" fill="rgba(0,0,0,0.7)" stroke="rgba(0,212,255,0.18)" strokeWidth="0.8" />
                                    <rect x="17" y="15" width="96" height="10" rx="1" fill="rgba(0,255,136,0.35)" />
                                    <text x="100" y="23" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="6" fill="#00ff88">RECOVERING · 8 MIN</text>
                                    {/* HUD */}
                                    <rect x="218" y="10" width="88" height="26" rx="2" fill="rgba(0,0,0,0.8)" stroke="rgba(0,212,255,0.2)" strokeWidth="0.8" />
                                    <text x="262" y="21" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="6.5" fill="#3a5a78">EHI</text>
                                    <text x="262" y="32" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="#00ff88" fontWeight="500" filter="url(#glow6)">57</text>
                                    <text x="160" y="196" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7" fill="#00ff88" letterSpacing="0.5" opacity="0.8">UNDERSTANDING ARRIVES · LESSON LANDS</text>
                                </svg>
                            </div>
                            <div className="panel-caption">
                                <div className="panel-num">Scene 06</div>
                                <h4>The Reflection</h4>
                                <p>Participants step back. The slow recovery rate embodies a real-world truth: restoration is harder than destruction.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="divider" />

            {/* ══ SYSTEM ARCHITECTURE ═══════════════════════════ */}
            <div style={{ background: "var(--surface-0)" }}>
                <div className="section" style={{ paddingBottom: "2rem" }}>
                    <div className="section-label reveal">05 / System Architecture</div>
                    <h2 className="reveal">The interactive loop</h2>
                    <p className="reveal" style={{ maxWidth: 620 }}>
                        A continuous feedback system connecting physical presence to simulated ecology. Every participant is a
                        variable in a live ecological equation.
                    </p>
                </div>

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 7vw 2rem" }}>
                    <div className="flowchart-image-frame reveal">
                        <img src={S7} alt="Interactive system: real-time ecological feedback pipeline" />
                    </div>
                </div>

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 7vw 6rem" }}>
                    <div className="flowchart-svg-wrap reveal">
                        <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", minWidth: 600 }}>
                            <defs>
                                <marker id="aW" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="rgba(255,255,255,0.3)" /></marker>
                                <marker id="aC" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#00d4ff" /></marker>
                                <marker id="aG" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#00ff88" /></marker>
                                <filter id="glowSvg"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                            </defs>
                            {/* Grid */}
                            <g stroke="rgba(0,212,255,0.04)" strokeWidth="0.5">
                                {[80, 160, 240, 320, 400].map((y) => <line key={y} x1="0" y1={y} x2="900" y2={y} />)}
                                {[150, 300, 450, 600, 750].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="420" />)}
                            </g>
                            {/* Layer labels */}
                            <text x="14" y="112" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="rgba(0,212,255,0.25)" transform="rotate(-90,14,112)" letterSpacing="2">INPUT</text>
                            <text x="14" y="232" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="rgba(0,212,255,0.25)" transform="rotate(-90,14,232)" letterSpacing="2">PROCESS</text>
                            <text x="14" y="352" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="rgba(0,212,255,0.25)" transform="rotate(-90,14,352)" letterSpacing="2">OUTPUT</text>
                            <line x1="32" y1="60" x2="32" y2="420" stroke="rgba(0,212,255,0.08)" strokeWidth="0.5" />

                            {/* Row 1 nodes */}
                            {[
                                { x: 56, label: "HARDWARE", title: "Depth Camera", sub: "Intel RealSense", color: "#00d4ff" },
                                { x: 236, label: "ACTORS", title: "Participants", sub: "Body + Objects", color: "#ef4444" },
                                { x: 416, label: "PROPS", title: "Physical Objects", sub: "Bags · Ropes · Trees", color: "#ef4444" },
                            ].map(({ x, label, title, sub, color }) => (
                                <g key={title}>
                                    <rect x={x} y="76" width="140" height="58" rx="3" fill="rgba(6,12,20,0.95)" stroke={`${color}44`} strokeWidth="1.2" />
                                    <rect x={x} y="76" width="140" height="2" rx="1" fill={color} opacity="0.6" />
                                    <text x={x + 70} y="96" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill={color} letterSpacing="0.5">{label}</text>
                                    <text x={x + 70} y="114" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="rgba(232,244,255,0.9)" fontWeight="500">{title}</text>
                                    <text x={x + 70} y="128" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="rgba(106,138,176,0.8)">{sub}</text>
                                </g>
                            ))}

                            {/* Row 2 nodes */}
                            {[
                                { x: 56, label: "VISION", title: "OpenCV", sub: "Silhouette extraction", color: "#00d4ff" },
                                { x: 296, label: "ALGORITHM", title: "EHI Engine", sub: "density x duration x accum.", color: "#ef4444", wide: true },
                                { x: 596, label: "RENDER", title: "TouchDesigner", sub: "GLSL fluid simulation", color: "#00d4ff" },
                            ].map(({ x, label, title, sub, color, wide }) => (
                                <g key={title}>
                                    <rect x={x} y="182" width={wide ? 168 : 140} height={wide ? 76 : 58} rx="3" fill="rgba(6,12,20,0.95)" stroke={`${color}44`} strokeWidth={wide ? 1.8 : 1.2} />
                                    <rect x={x} y="182" width={wide ? 168 : 140} height="2" rx="1" fill={color} opacity="0.6" />
                                    <text x={x + (wide ? 84 : 70)} y="200" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill={color} letterSpacing="0.5">{label}</text>
                                    <text x={x + (wide ? 84 : 70)} y="218" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="rgba(232,244,255,0.9)" fontWeight="500">{title}</text>
                                    <text x={x + (wide ? 84 : 70)} y="233" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="rgba(106,138,176,0.8)">{sub}</text>
                                    {wide && <text x={x + 84} y="248" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7" fill="rgba(239,68,68,0.6)">Python / C++</text>}
                                </g>
                            ))}

                            {/* Row 3 nodes */}
                            {[
                                { x: 56, label: "VISUAL", title: "3-4 Projectors", sub: "Floor + wall mapping", wide: false },
                                { x: 236, label: "AUDIO", title: "Surround Sound", sub: "Adaptive soundscape", wide: false },
                                { x: 566, label: "STATE", title: "Ecological Engine", sub: "Bloom / Stable / Collapse", wide: true },
                            ].map(({ x, label, title, sub, wide }) => (
                                <g key={title}>
                                    <rect x={x} y="310" width={wide ? 220 : 140} height="58" rx="3" fill="rgba(6,12,20,0.95)" stroke="rgba(0,212,255,0.18)" strokeWidth="1.2" />
                                    <rect x={x} y="310" width={wide ? 220 : 140} height="2" rx="1" fill="#00ff88" opacity="0.5" />
                                    <text x={x + (wide ? 110 : 70)} y="328" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="#00ff88" letterSpacing="0.5">{label}</text>
                                    <text x={x + (wide ? 110 : 70)} y="346" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="rgba(232,244,255,0.9)" fontWeight="500">{title}</text>
                                    <text x={x + (wide ? 110 : 70)} y="360" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="rgba(106,138,176,0.8)">{sub}</text>
                                </g>
                            ))}

                            {/* Connections row1 -> row2 */}
                            <line x1="126" y1="134" x2="126" y2="180" stroke="rgba(0,212,255,0.4)" strokeWidth="1.2" markerEnd="url(#aW)" />
                            <line x1="306" y1="134" x2="360" y2="180" stroke="rgba(239,68,68,0.6)" strokeWidth="1.2" markerEnd="url(#aC)" />
                            <line x1="486" y1="134" x2="448" y2="180" stroke="rgba(239,68,68,0.6)" strokeWidth="1.2" markerEnd="url(#aC)" />
                            {/* Connections row2 -> row2 */}
                            <line x1="196" y1="212" x2="292" y2="212" stroke="rgba(0,212,255,0.4)" strokeWidth="1.2" markerEnd="url(#aW)" />
                            <line x1="464" y1="224" x2="592" y2="224" stroke="rgba(239,68,68,0.6)" strokeWidth="1.2" markerEnd="url(#aC)" />
                            {/* Connections row2 -> row3 */}
                            <line x1="636" y1="258" x2="220" y2="308" stroke="rgba(0,255,136,0.4)" strokeWidth="1.2" markerEnd="url(#aG)" />
                            <line x1="660" y1="258" x2="356" y2="308" stroke="rgba(0,255,136,0.4)" strokeWidth="1.2" markerEnd="url(#aG)" />
                            <line x1="464" y1="258" x2="596" y2="308" stroke="rgba(239,68,68,0.5)" strokeWidth="1.2" markerEnd="url(#aC)" />
                            {/* Feedback loop curve */}
                            <path d="M 686 368 Q 856 420 856 220 Q 856 56 480 56 Q 350 56 306 74" fill="none" stroke="rgba(0,255,136,0.3)" strokeWidth="1.2" strokeDasharray="5 5" markerEnd="url(#aG)" />
                            <text x="858" y="228" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="rgba(0,255,136,0.4)" transform="rotate(90,858,228)" letterSpacing="1">FEEDBACK LOOP</text>

                            <text x="450" y="412" textAnchor="middle" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="rgba(0,212,255,0.2)" letterSpacing="2">EMBODIED EARTH / SYSTEM ARCHITECTURE v1.0</text>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="divider" />

            {/* ══ TECH STACK ════════════════════════════════════ */}
            <div style={{ background: "var(--black)" }}>
                <div className="section">
                    <div className="section-label reveal">06 / Technology</div>
                    <h2 className="reveal">Hardware and Software Stack</h2>
                    <div className="tech-grid reveal">
                        <div className="tech-block">
                            <div className="tech-block-label">Hardware</div>
                            <h3>The Physical Layer</h3>
                            <ul className="tech-list">
                                <li><strong>3-4 Projectors:</strong> floor and wall projection mapping creating the immersive ecological world</li>
                                <li><strong>Overhead Depth Camera:</strong> tracks participant position and density in real time</li>
                                <li><strong>Surround Audio System:</strong> adaptive ambient soundscape that shifts with EHI state</li>
                                <li><strong>GPU-powered PC:</strong> handles real-time rendering, simulation, and sensor processing</li>
                            </ul>
                        </div>
                        <div className="tech-block">
                            <div className="tech-block-label">Software</div>
                            <h3>The Digital Engine</h3>
                            <ul className="tech-list">
                                <li><strong>TouchDesigner:</strong> real-time visual programming for projection mapping and generative visuals</li>
                                <li><strong>OpenCV:</strong> computer vision for silhouette extraction and participant tracking</li>
                                <li><strong>GLSL Shaders:</strong> GPU-based fluid simulation for water flow and ecological visual states</li>
                                <li><strong>Python / C++:</strong> core machine logic implementing the EHI calculation engine</li>
                            </ul>
                        </div>
                        <div className="tech-block">
                            <div className="tech-block-label">Sensing</div>
                            <h3>How Presence is Read</h3>
                            <ul className="tech-list">
                                <li><strong>Depth map analysis:</strong> continuous overhead scan produces a 3D point cloud of positions</li>
                                <li><strong>Silhouette extraction:</strong> OpenCV isolates human forms, treating each as an obstacle</li>
                                <li><strong>Density heatmap:</strong> spatial grid calculates crowd concentration per cell at ~30fps</li>
                                <li><strong>Object detection:</strong> colour-coded physical objects are recognised and classified</li>
                            </ul>
                        </div>
                        <div className="tech-block">
                            <div className="tech-block-label">Simulation</div>
                            <h3>How Ecology is Rendered</h3>
                            <ul className="tech-list">
                                <li><strong>Fluid dynamics (GLSL):</strong> Navier-Stokes-inspired shader simulates water disrupted by participants</li>
                                <li><strong>L-system vegetation:</strong> procedural plant growth algorithms determine foliage health</li>
                                <li><strong>Coral bleaching model:</strong> gradual RGB shift from vibrant orange to white below EHI threshold</li>
                                <li><strong>Asymmetric decay:</strong> damage rate faster than recovery rate, mirroring ecological tipping points</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══ EHI ALGORITHM + S6 ════════════════════════════ */}
            <div className="ehi-wrap">
                <div className="section">
                    <div className="section-label reveal">07 / The Algorithm</div>
                    <h2 className="reveal">Environmental Health Index</h2>
                    <div className="ehi-grid">
                        <div>
                            <p className="reveal">
                                The EHI is a continuous scalar from 0 to 100 representing overall ecosystem vitality. It is the
                                central variable driving every visual and audio change in the installation.
                            </p>
                            <div className="ehi-formula reveal">
                                <span className="comment">{"// EHI: core calculation\n\n"}</span>
                                <span className="fn">{"EHI"}</span>{" = "}<span className="fn">{"f"}</span>{"(\n"}
                                {"  "}<span className="var">{"density"}</span>{"( area + activity )\n"}
                                {"  x "}<span className="var">{"duration"}</span>{"( stillness + time )\n"}
                                {"  x "}<span className="var">{"accumulation"}</span>{"( weight + obj_count )\n)\n\n"}
                                <span className="comment">{"// Modifiers\n"}</span>
                                <span className="var">{"restorative_obj"}</span>{"  -> +"}<span className="fn">{"EHI_delta"}</span>{" (trees, mirrors)\n"}
                                <span className="var">{"disruptive_obj"}</span>{"   -> -"}<span className="fn">{"EHI_delta"}</span>{" (bags, ropes, LEGO)\n"}
                                <span className="var">{"decay_rate"}</span>{"       >  "}<span className="fn">{"recovery_rate"}</span>{"  "}<span className="comment">{"// asymmetric"}</span>
                            </div>
                            <div className="ehi-states reveal">
                                {[
                                    { range: "80-100", name: "Blooming" },
                                    { range: "50-79", name: "Stable" },
                                    { range: "20-49", name: "Withering" },
                                    { range: "0-19", name: "Collapse" },
                                ].map(({ range, name }) => (
                                    <div key={range} className="ehi-state">
                                        <div className="ehi-range">{range}</div>
                                        <div className="ehi-state-name">{name}</div>
                                        <div className="ehi-dot" />
                                    </div>
                                ))}
                            </div>
                            <div className="threshold-grid reveal">
                                <div className="threshold-block">
                                    <div className="threshold-label">Below threshold</div>
                                    <ul className="threshold-list">
                                        {["Coral bleaching activates", "Fish density reduces", "Water darkens", "Plant growth halts"].map((t) => <li key={t}>{t}</li>)}
                                    </ul>
                                </div>
                                <div className="threshold-block">
                                    <div className="threshold-label">Recovery conditions</div>
                                    <ul className="threshold-list">
                                        {["Crowd density decreases", "Participants clear space", "Restorative objects placed", "Recovery always slower than damage"].map((t) => <li key={t}>{t}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ehi-image-frame reveal">
                                <img src={S6} alt="EHI feedback states slide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider" />

            {/* ══ OBJECTS ═══════════════════════════════════════ */}
            <div style={{ background: "var(--black)" }}>
                <div className="section">
                    <div className="section-label reveal">08 / Participatory Objects</div>
                    <h2 className="reveal">Props that carry meaning</h2>
                    <p className="reveal" style={{ maxWidth: 680 }}>
                        Participants are not told what to do. They are handed objects that feel like entertainment, and only
                        gradually realise these objects carry ecological consequences.
                    </p>
                    <div className="objects-grid reveal">
                        <div className="objects-block">
                            <h3>Disruptive Objects</h3>
                            <div className="obj-tags">
                                {["Bean Bags", "LEGO Bricks", "Ropes", "Balloons"].map((t) => <span key={t} className="obj-tag disruptive">{t}</span>)}
                            </div>
                            <p>
                                These props symbolise settlement, construction, and accumulation. When placed they occupy space in
                                the simulation and reduce water flow and plant regeneration. The longer they remain, the greater
                                the accumulated penalty to EHI. They are given first, framed as fun.
                            </p>
                        </div>
                        <div className="objects-block">
                            <h3>Restorative Objects</h3>
                            <div className="obj-tags">
                                {["Plastic Trees", "Mirrors"].map((t) => <span key={t} className="obj-tag restorative">{t}</span>)}
                            </div>
                            <p>
                                These symbolise reforestation and solar energy respectively. Placing a plastic tree triggers a
                                recovery pulse; holding a mirror boosts EHI. Accumulated damage is never fully erasable: restoration
                                is modelled as partial and slow, mirroring ecological reality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══ ARTIST STATEMENT ══════════════════════════════ */}
            <div className="statement-section">
                <div className="statement-inner">
                    <div className="statement-mark">Artist Statement</div>
                    <p className="statement-quote">
                        Embodied Earth connects human presence to environmental consequence, allowing participants to{" "}
                        <span>see and feel</span> how collective behaviour shapes ecological systems, and how slowly those
                        systems heal once broken.
                    </p>
                    <div className="statement-attr"> Thad / CS6042 / 2026</div>
                </div>
            </div>

            {/* ══ REFLECTION ════════════════════════════════════ */}
            <div style={{ background: "var(--black)" }}>
                <div className="section">
                    <div className="section-label reveal">09 / Reflection</div>
                    <h2 className="reveal">What we learned making it</h2>
                    <div className="reflection-grid">
                        <div className="reflection-body">
                            <h3 className="reveal">On the Design Process</h3>
                            <p className="reveal">
                                The central challenge was making the causal link between human action and ecological response
                                legible without being didactic. Early iterations used explicit warning text; these felt preachy and
                                broke immersion. We stripped everything back to the visual layer: when the world withers beneath
                                your feet, explanation becomes redundant.
                            </p>
                            <p className="reveal">
                                Making damage asymmetric, faster to accumulate than to heal, was the hardest and most important
                                design choice. We mitigated frustration by ensuring early-stage degradation is gradual and
                                beautiful rather than alarming, drawing participants in before consequence becomes visible.
                            </p>
                            <h3 className="reveal">On Technical Implementation</h3>
                            <p className="reveal">
                                TouchDesigner's node-based architecture proved ideal for linking sensor input to visual output in
                                real time. The most demanding component was the GLSL fluid simulation: getting water to respond
                                naturally to participant-sized obstacles required significant shader tuning. The EHI calculation is
                                deceptively simple; the complexity lives in calibrating density, duration, and accumulation
                                weightings so the installation feels responsive but not chaotic.
                            </p>
                            <h3 className="reveal">On the Learning Outcomes</h3>
                            <p className="reveal">
                                The assignment asked us to determine relevant tools for specific interactive effects.
                                TouchDesigner, OpenCV, and GLSL emerged naturally from the problem rather than being selected from
                                a list. Storyboarding forced sequential thinking about the participant's emotional arc, not just
                                the technical system. The most valuable realisation: the storyboard and the flowchart describe the
                                same system from different angles, one human, one computational.
                            </p>
                        </div>
                        <div className="reveal">
                            {[
                                { label: "On Collective Impact", body: "The work makes visible what is normally invisible: ecological damage is not caused by villains but by everyone doing ordinary things. Standing in a room together is not harmful, unless the room is alive." },
                                { label: "On Fragility", body: "When recovery is slower than damage, participants intuitively perceive ecosystems as fragile. This is more effective than any statistics-based communication." },
                                { label: "On Behaviour Change", body: "Observing that harm is linked to crowding, participants naturally begin to self-regulate: spreading out, stepping back. The installation produces the behaviour it depicts." },
                                { label: "SDG Alignment", body: "The work directly addresses SDG 13, 14, and 15, not by describing them, but by producing a miniature version of them at human scale, in a room, in real time." },
                            ].map(({ label, body }) => (
                                <div key={label} className="reflection-note">
                                    <div className="reflection-note-label">{label}</div>
                                    <p>{body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ══ FOOTER ════════════════════════════════════════ */}
            <footer className="ee-footer">
                <div className="footer-brand">
                    Embodied <span>Earth</span>
                </div>
                <div className="footer-info">
                    CS6042 · Assignment 1<br />
                    Interactive Installation · UN SDGs 13, 14, 15<br />
                    Thaddeus · 2026
                </div>
            </footer>
        </div>
    );
}