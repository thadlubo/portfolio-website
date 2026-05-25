import{j as e}from"./index-Dgpj-Nc8.js";import{r as c}from"./vendor-react-CFg076AJ.js";import"./vendor-motion-CmqCaZqT.js";import"./vendor-icons-DIDCPYlp.js";const f=`
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
`,p=[{left:"12%",size:3,dur:"12s",del:"0s",dx:"40px",color:"#00d4ff"},{left:"28%",size:2,dur:"9s",del:"2s",dx:"-24px",color:"#00ff88"},{left:"44%",size:4,dur:"14s",del:"0.5s",dx:"18px",color:"#00d4ff"},{left:"60%",size:2,dur:"10s",del:"3.5s",dx:"-32px",color:"#00ff88"},{left:"75%",size:3,dur:"11s",del:"1s",dx:"28px",color:"#00d4ff"},{left:"88%",size:2,dur:"13s",del:"4s",dx:"-18px",color:"#fbbf24"},{left:"20%",size:2,dur:"8s",del:"5s",dx:"22px",color:"#fbbf24"}];function j(){const n=c.useRef(null),l="/portfolio-website/",d=`${l}images/InteractiveArt/S2.png`,h=`${l}images/InteractiveArt/S6.png`,x=`${l}images/InteractiveArt/S7.png`,m=`${l}images/InteractiveArt/S8.png`;return c.useEffect(()=>{const r=n.current;if(!r)return;const t=new IntersectionObserver(i=>i.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")}),{threshold:.08,rootMargin:"0px 0px -32px 0px"});return r.querySelectorAll(".reveal").forEach(i=>t.observe(i)),()=>t.disconnect()},[]),e.jsxs("div",{className:"ee-root",ref:n,children:[e.jsx("style",{children:f}),e.jsxs("header",{className:"hero",children:[e.jsx("div",{className:"hero-glow-1"}),e.jsx("div",{className:"hero-glow-2"}),e.jsx("div",{className:"particles",children:p.map((r,t)=>e.jsx("div",{className:"particle",style:{left:r.left,width:r.size,height:r.size,background:r.color,boxShadow:`0 0 6px ${r.color}`,"--dur":r.dur,"--del":r.del,"--dx":r.dx}},t))}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{className:"hero-eyebrow",children:"CS6042 / Assignment 1 / Interactive Installation"}),e.jsxs("h1",{className:"hero-title",children:["Embodied",e.jsx("span",{className:"hero-title-em",children:"Earth"})]}),e.jsx("p",{className:"hero-sub",children:"A living feedback system where human presence shapes and destroys a projected ecological world"}),e.jsx("div",{className:"hero-meta",children:[{label:"Author",value:"Thaddeus Lubo"},{label:"Theme",value:"UN Sustainability Goals"},{label:"Medium",value:"Interactive Installation"},{label:"Year",value:"2026"}].map(({label:r,value:t})=>e.jsxs("div",{children:[e.jsx("div",{className:"hero-meta-label",children:r}),e.jsx("div",{className:"hero-meta-value",children:t})]},r))})]})]}),e.jsxs("div",{className:"problem-wrap",children:[e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label reveal",children:"01 / The Problem"}),e.jsxs("h2",{className:"reveal",children:["Climate change is abstract.",e.jsx("br",{}),"We made it ",e.jsx("span",{style:{color:"var(--cyan)"},children:"felt."})]}),e.jsx("p",{className:"reveal",style:{maxWidth:640},children:"People understand climate data intellectually, but the emotional and embodied experience of ecological collapse remains distant. Embodied Earth closes that gap by making collective behaviour viscerally visible."})]}),e.jsxs("div",{className:"problem-image-block reveal",children:[e.jsx("div",{className:"problem-image-frame",children:e.jsx("img",{src:d,alt:"SDG 13, 14, 15: climate action, life below water, life on land"})}),e.jsx("div",{className:"problem-caption",children:"Slide 02 / SDG 13 Climate Action · SDG 14 Life Below Water · SDG 15 Life on Land"})]})]}),e.jsx("div",{className:"divider"}),e.jsx("div",{style:{background:"var(--black)"},children:e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label reveal",children:"02 / The Concept"}),e.jsxs("div",{className:"concept-grid",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"reveal",children:"A room that breathes with you"}),e.jsx("p",{className:"concept-statement reveal",children:"Embodied Earth transforms a room into a responsive ecosystem, where participants do not observe nature; they become its pressure."}),e.jsx("p",{className:"reveal",children:"The installation projects a living ecological world onto floor and walls. As participants move, gather, and crowd, the ecosystem responds: vegetation withers, water darkens, coral bleaches. The relationship is direct, immediate, and inescapable."}),e.jsx("p",{className:"reveal",children:"Recovery only comes when density decreases. The system is asymmetric by design; damage accumulates faster than healing, mirroring the real dynamics of ecological tipping points."}),e.jsx("div",{className:"sdg-tags reveal",children:["SDG 13 Climate Action","SDG 14 Life Below Water","SDG 15 Life on Land","SDG 11 Sustainable Cities"].map(r=>e.jsx("span",{className:"sdg-tag",children:r},r))})]}),e.jsx("div",{children:e.jsxs("svg",{viewBox:"0 0 340 400",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"auto"},children:[e.jsxs("defs",{children:[e.jsxs("radialGradient",{id:"cg",cx:"50%",cy:"50%",r:"50%",children:[e.jsx("stop",{offset:"0%",stopColor:"#00d4ff",stopOpacity:"0.15"}),e.jsx("stop",{offset:"100%",stopColor:"#00d4ff",stopOpacity:"0"})]}),e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("circle",{cx:"170",cy:"200",r:"155",fill:"none",stroke:"rgba(0,212,255,0.08)",strokeWidth:"1",strokeDasharray:"4 8"}),e.jsx("circle",{cx:"170",cy:"200",r:"110",fill:"none",stroke:"rgba(0,212,255,0.15)",strokeWidth:"0.5",strokeDasharray:"2 10"}),e.jsx("circle",{cx:"170",cy:"200",r:"75",fill:"url(#cg)",stroke:"rgba(0,212,255,0.3)",strokeWidth:"1",filter:"url(#glow)"}),e.jsx("text",{x:"170",y:"210",textAnchor:"middle",fontSize:"36",fontFamily:"serif",children:"🌍"}),[{cx:170,cy:50,label:"DENSITY",icon:"👥"},{cx:318,cy:200,label:"DURATION",icon:"⏱"},{cx:170,cy:348,label:"ACCUMULATION",icon:"📦"},{cx:22,cy:200,label:"EHI",icon:"🌡"}].map(({cx:r,cy:t,label:i,icon:s})=>e.jsxs("g",{children:[e.jsx("rect",{x:r-28,y:t-28,width:"56",height:"56",rx:"4",fill:"rgba(6,12,20,0.9)",stroke:"rgba(0,212,255,0.25)",strokeWidth:"1"}),e.jsx("text",{x:r,y:t-6,textAnchor:"middle",fontSize:"16",children:s}),e.jsx("text",{x:r,y:t+10,textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7",fill:"#6a8ab0",letterSpacing:"1",children:i})]},i)),[{x1:170,y1:78,x2:170,y2:122},{x1:290,y1:200,x2:248,y2:200},{x1:170,y1:322,x2:170,y2:278},{x1:50,y1:200,x2:92,y2:200}].map((r,t)=>e.jsx("line",{...r,stroke:"rgba(0,212,255,0.4)",strokeWidth:"1",strokeDasharray:"3 4",markerEnd:"url(#arrC)"},t)),e.jsx("defs",{children:e.jsx("marker",{id:"arrC",markerWidth:"6",markerHeight:"5",refX:"5",refY:"2.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 6 2.5, 0 5",fill:"rgba(0,212,255,0.6)"})})}),e.jsx("text",{x:"170",y:"20",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"8",fill:"#3a5a78",letterSpacing:"2",children:"FEEDBACK LOOP"})]})})]})]})}),e.jsx("div",{className:"divider"}),e.jsxs("div",{style:{background:"var(--surface-0)"},children:[e.jsxs("div",{className:"section",style:{paddingBottom:"2rem"},children:[e.jsx("div",{className:"section-label reveal",children:"03 / Experience Journey"}),e.jsx("h2",{className:"reveal",children:"Four ecological states"}),e.jsx("p",{className:"reveal",style:{maxWidth:620},children:"The visitor's arc moves from equilibrium through individual interaction, collective strain, and finally regeneration. Each state is defined by a distinct EHI band and corresponding visual world."})]}),e.jsx("div",{className:"journey-image-wrap reveal",children:e.jsx("div",{className:"journey-image-frame",children:e.jsx("img",{src:m,alt:"Embodied Earth experience journey: four ecological states"})})}),e.jsx("div",{style:{height:"4rem"}})]}),e.jsx("div",{className:"divider"}),e.jsx("div",{style:{background:"var(--black)"},children:e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label reveal",children:"04 / Storyboard"}),e.jsx("h2",{className:"reveal",children:"Six scenes of ecological consequence"}),e.jsx("p",{className:"reveal",style:{maxWidth:620},children:"Moment-by-moment sketches of the visitor experience, from first encounter through collapse and toward slow recovery."}),e.jsxs("div",{className:"storyboard-grid reveal",children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panel-sketch-wrap",children:e.jsxs("svg",{className:"panel-sketch",viewBox:"0 0 320 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"320",height:"200",fill:"#030608"}),e.jsx("rect",{width:"320",height:"200",fill:"none",opacity:"0.4",style:{backgroundImage:"linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg,rgba(0,212,255,0.02) 1px, transparent 1px)",backgroundSize:"24px 24px"}}),e.jsxs("defs",{children:[e.jsxs("radialGradient",{id:"p1g",cx:"50%",cy:"80%",r:"60%",children:[e.jsx("stop",{offset:"0%",stopColor:"#00ff88",stopOpacity:"0.18"}),e.jsx("stop",{offset:"100%",stopColor:"#00ff88",stopOpacity:"0"})]}),e.jsxs("filter",{id:"glow1",children:[e.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"b"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"b"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("ellipse",{cx:"160",cy:"168",rx:"130",ry:"28",fill:"url(#p1g)"}),e.jsx("path",{d:"M 30 178 Q 80 170 130 174 Q 180 178 230 172 Q 270 168 300 172",fill:"none",stroke:"#00d4ff",strokeWidth:"2",opacity:"0.6",filter:"url(#glow1)"}),e.jsx("path",{d:"M 30 183 Q 80 176 130 180 Q 180 184 230 178 Q 270 174 300 178",fill:"none",stroke:"#00d4ff",strokeWidth:"1",opacity:"0.3"}),[55,95,195,245].map((r,t)=>e.jsxs("g",{children:[e.jsx("line",{x1:r,y1:"170",x2:r,y2:148-t*2,stroke:"#00ff88",strokeWidth:"1.5",opacity:"0.7",filter:"url(#glow1)"}),e.jsx("circle",{cx:r,cy:140-t*2,r:10+t,fill:"none",stroke:"#00ff88",strokeWidth:"1",opacity:"0.5"}),e.jsx("circle",{cx:r,cy:140-t*2,r:5+t*.5,fill:"#00ff88",opacity:"0.15"})]},r)),e.jsx("path",{d:"M 18 85 Q 22 68 26 78 Q 30 62 34 74 Q 37 66 40 74",fill:"none",stroke:"#ff6040",strokeWidth:"1.5",opacity:"0.5",filter:"url(#glow1)"}),e.jsx("path",{d:"M 278 90 Q 282 72 286 82 Q 290 65 294 76 Q 297 68 300 76",fill:"none",stroke:"#ff6040",strokeWidth:"1.5",opacity:"0.5",filter:"url(#glow1)"}),e.jsx("line",{x1:"40",y1:"8",x2:"100",y2:"168",stroke:"rgba(0,212,255,0.12)",strokeWidth:"0.5",strokeDasharray:"2 6"}),e.jsx("line",{x1:"280",y1:"8",x2:"220",y2:"168",stroke:"rgba(0,212,255,0.12)",strokeWidth:"0.5",strokeDasharray:"2 6"}),e.jsx("rect",{x:"218",y:"12",width:"88",height:"26",rx:"2",fill:"rgba(0,0,0,0.7)",stroke:"rgba(0,212,255,0.25)",strokeWidth:"0.8"}),e.jsx("text",{x:"262",y:"23",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"6.5",fill:"#3a5a78",letterSpacing:"0.5",children:"EHI"}),e.jsx("text",{x:"262",y:"34",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"10",fill:"#00ff88",fontWeight:"500",children:"100"}),e.jsx("text",{x:"160",y:"196",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7",fill:"#00ff88",letterSpacing:"0.5",opacity:"0.7",children:"ECOSYSTEM INITIALISED"})]})}),e.jsxs("div",{className:"panel-caption",children:[e.jsx("div",{className:"panel-num",children:"Scene 01"}),e.jsx("h4",{children:"The Empty Room"}),e.jsx("p",{children:"Visitors enter a thriving projected ecosystem: lush floor vegetation, cyan water streams, vibrant coral on the walls. EHI at 100."})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panel-sketch-wrap",children:e.jsxs("svg",{className:"panel-sketch",viewBox:"0 0 320 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"320",height:"200",fill:"#040810"}),e.jsx("defs",{children:e.jsxs("filter",{id:"glow2",children:[e.jsx("feGaussianBlur",{stdDeviation:"2",result:"b"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"b"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),e.jsx("ellipse",{cx:"160",cy:"168",rx:"128",ry:"26",fill:"rgba(0,255,136,0.08)"}),e.jsx("path",{d:"M 30 178 Q 90 172 150 175 Q 210 178 280 174",fill:"none",stroke:"#00d4ff",strokeWidth:"2",opacity:"0.5",filter:"url(#glow2)"}),e.jsx("line",{x1:"52",y1:"170",x2:"52",y2:"148",stroke:"#00ff88",strokeWidth:"1.5",opacity:"0.65"}),e.jsx("circle",{cx:"52",cy:"141",r:"10",fill:"none",stroke:"#00ff88",strokeWidth:"1",opacity:"0.45"}),e.jsx("line",{x1:"262",y1:"170",x2:"262",y2:"148",stroke:"#00ff88",strokeWidth:"1.5",opacity:"0.65"}),e.jsx("circle",{cx:"262",cy:"141",r:"10",fill:"none",stroke:"#00ff88",strokeWidth:"1",opacity:"0.45"}),e.jsx("ellipse",{cx:"128",cy:"178",rx:"16",ry:"6",fill:"rgba(0,212,255,0.12)"}),e.jsx("circle",{cx:"128",cy:"158",r:"8",fill:"none",stroke:"#00d4ff",strokeWidth:"1.5",filter:"url(#glow2)"}),e.jsx("rect",{x:"121",y:"165",width:"14",height:"16",rx:"3",fill:"none",stroke:"#00d4ff",strokeWidth:"1.5",filter:"url(#glow2)"}),e.jsx("ellipse",{cx:"192",cy:"176",rx:"14",ry:"5",fill:"rgba(0,212,255,0.12)"}),e.jsx("circle",{cx:"192",cy:"157",r:"7",fill:"none",stroke:"#00d4ff",strokeWidth:"1.5",filter:"url(#glow2)"}),e.jsx("rect",{x:"186",y:"163",width:"12",height:"15",rx:"3",fill:"none",stroke:"#00d4ff",strokeWidth:"1.5",filter:"url(#glow2)"}),e.jsx("line",{x1:"160",y1:"6",x2:"128",y2:"156",stroke:"rgba(0,212,255,0.3)",strokeWidth:"0.5",strokeDasharray:"3 6"}),e.jsx("line",{x1:"160",y1:"6",x2:"192",y2:"156",stroke:"rgba(0,212,255,0.3)",strokeWidth:"0.5",strokeDasharray:"3 6"}),e.jsx("ellipse",{cx:"128",cy:"176",rx:"24",ry:"9",fill:"none",stroke:"rgba(0,212,255,0.3)",strokeWidth:"0.7",strokeDasharray:"2 4"}),e.jsx("ellipse",{cx:"192",cy:"174",rx:"20",ry:"8",fill:"none",stroke:"rgba(0,212,255,0.3)",strokeWidth:"0.7",strokeDasharray:"2 4"}),e.jsx("rect",{x:"218",y:"12",width:"88",height:"26",rx:"2",fill:"rgba(0,0,0,0.7)",stroke:"rgba(0,212,255,0.25)",strokeWidth:"0.8"}),e.jsx("text",{x:"262",y:"23",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"6.5",fill:"#3a5a78",children:"EHI"}),e.jsx("text",{x:"262",y:"34",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"10",fill:"#84cc16",fontWeight:"500",children:"84"}),e.jsx("text",{x:"160",y:"196",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7",fill:"#00d4ff",letterSpacing:"0.5",opacity:"0.7",children:"FIRST CONTACT · MINIMAL IMPACT"})]})}),e.jsxs("div",{className:"panel-caption",children:[e.jsx("div",{className:"panel-num",children:"Scene 02"}),e.jsx("h4",{children:"First Contact"}),e.jsx("p",{children:"Early visitors explore. The depth camera detects their positions. Minor disruption ripples where they stand, barely perceptible."})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panel-sketch-wrap",children:e.jsxs("svg",{className:"panel-sketch",viewBox:"0 0 320 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"320",height:"200",fill:"#060a0e"}),e.jsx("defs",{children:e.jsxs("filter",{id:"glow3",children:[e.jsx("feGaussianBlur",{stdDeviation:"2",result:"b"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"b"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),e.jsx("ellipse",{cx:"160",cy:"170",rx:"126",ry:"24",fill:"rgba(0,255,136,0.05)"}),e.jsx("line",{x1:"46",y1:"170",x2:"46",y2:"152",stroke:"#00ff88",strokeWidth:"1.2",opacity:"0.45"}),e.jsx("circle",{cx:"46",cy:"145",r:"8",fill:"none",stroke:"#00ff88",strokeWidth:"1",opacity:"0.35"}),e.jsx("line",{x1:"268",y1:"170",x2:"268",y2:"152",stroke:"#00ff88",strokeWidth:"1.2",opacity:"0.45"}),e.jsx("circle",{cx:"268",cy:"145",r:"8",fill:"none",stroke:"#00ff88",strokeWidth:"1",opacity:"0.35"}),e.jsx("ellipse",{cx:"140",cy:"186",rx:"20",ry:"9",fill:"rgba(251,191,36,0.2)",stroke:"rgba(251,191,36,0.5)",strokeWidth:"1"}),e.jsx("text",{x:"140",y:"190",textAnchor:"middle",fontSize:"11",children:"🎒"}),e.jsx("ellipse",{cx:"186",cy:"188",rx:"18",ry:"8",fill:"rgba(251,191,36,0.2)",stroke:"rgba(251,191,36,0.5)",strokeWidth:"1"}),e.jsx("text",{x:"186",y:"192",textAnchor:"middle",fontSize:"11",children:"🧱"}),e.jsx("path",{d:"M 96 182 Q 124 177 148 180",fill:"none",stroke:"rgba(251,191,36,0.6)",strokeWidth:"2.5",strokeLinecap:"round"}),[116,158,200].map((r,t)=>e.jsxs("g",{children:[e.jsx("circle",{cx:r,cy:158,r:"7",fill:"none",stroke:t===1?"#fbbf24":"#00d4ff",strokeWidth:"1.3",filter:"url(#glow3)"}),e.jsx("rect",{x:r-6,y:"164",width:"12",height:"14",rx:"2",fill:"none",stroke:t===1?"#fbbf24":"#00d4ff",strokeWidth:"1.3",filter:"url(#glow3)"})]},r)),e.jsx("ellipse",{cx:"160",cy:"174",rx:"74",ry:"20",fill:"none",stroke:"rgba(251,191,36,0.2)",strokeWidth:"1",strokeDasharray:"3 5"}),e.jsx("rect",{x:"218",y:"12",width:"88",height:"26",rx:"2",fill:"rgba(0,0,0,0.7)",stroke:"rgba(0,212,255,0.2)",strokeWidth:"0.8"}),e.jsx("text",{x:"262",y:"23",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"6.5",fill:"#3a5a78",children:"EHI"}),e.jsx("text",{x:"262",y:"34",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"10",fill:"#fbbf24",fontWeight:"500",children:"62"}),e.jsx("text",{x:"160",y:"196",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7",fill:"#fbbf24",letterSpacing:"0.5",opacity:"0.8",children:"OBJECTS PLACED · SIMULATION STRAINED"})]})}),e.jsxs("div",{className:"panel-caption",children:[e.jsx("div",{className:"panel-num",children:"Scene 03"}),e.jsx("h4",{children:"Objects Introduced"}),e.jsx("p",{children:"Participants receive bean bags, ropes, and LEGO bricks representing settlement and construction. Ecological stress increases."})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panel-sketch-wrap",children:e.jsxs("svg",{className:"panel-sketch",viewBox:"0 0 320 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"320",height:"200",fill:"#0a0404"}),e.jsxs("defs",{children:[e.jsxs("radialGradient",{id:"p4red",cx:"50%",cy:"60%",r:"50%",children:[e.jsx("stop",{offset:"0%",stopColor:"#ef4444",stopOpacity:"0.12"}),e.jsx("stop",{offset:"100%",stopColor:"#ef4444",stopOpacity:"0"})]}),e.jsxs("filter",{id:"glow4",children:[e.jsx("feGaussianBlur",{stdDeviation:"2",result:"b"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"b"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("ellipse",{cx:"160",cy:"170",rx:"130",ry:"26",fill:"url(#p4red)"}),e.jsx("line",{x1:"42",y1:"170",x2:"42",y2:"154",stroke:"#5a3a28",strokeWidth:"2"}),e.jsx("line",{x1:"42",y1:"154",x2:"34",y2:"142",stroke:"#5a3a28",strokeWidth:"1.2"}),e.jsx("line",{x1:"42",y1:"154",x2:"52",y2:"144",stroke:"#5a3a28",strokeWidth:"1.2"}),e.jsx("line",{x1:"274",y1:"170",x2:"274",y2:"152",stroke:"#5a3a28",strokeWidth:"2"}),e.jsx("line",{x1:"274",y1:"152",x2:"266",y2:"142",stroke:"#5a3a28",strokeWidth:"1.2"}),e.jsx("path",{d:"M 30 185 Q 90 180 160 183 Q 220 186 290 181",fill:"none",stroke:"rgba(30,50,80,0.8)",strokeWidth:"3"}),e.jsx("path",{d:"M 16 88 Q 20 70 24 82 Q 28 65 32 76",fill:"none",stroke:"rgba(230,220,210,0.5)",strokeWidth:"1.5"}),e.jsx("path",{d:"M 276 88 Q 280 70 284 82 Q 288 65 292 76",fill:"none",stroke:"rgba(230,220,210,0.5)",strokeWidth:"1.5"}),[108,128,150,172,194].map((r,t)=>e.jsxs("g",{children:[e.jsx("circle",{cx:r,cy:160,r:"6",fill:"none",stroke:"#ef4444",strokeWidth:"1",filter:"url(#glow4)",opacity:"0.8"}),e.jsx("rect",{x:r-5,y:"165",width:"10",height:"12",rx:"2",fill:"none",stroke:"#ef4444",strokeWidth:"1",filter:"url(#glow4)",opacity:"0.8"})]},r)),e.jsx("circle",{cx:"160",cy:"108",r:"36",fill:"none",stroke:"rgba(239,68,68,0.2)",strokeWidth:"1"}),e.jsx("circle",{cx:"160",cy:"108",r:"24",fill:"none",stroke:"rgba(239,68,68,0.35)",strokeWidth:"1.2"}),e.jsx("text",{x:"160",y:"112",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"8",fill:"#ef4444",letterSpacing:"0.5",filter:"url(#glow4)",children:"CRITICAL"}),e.jsx("rect",{x:"218",y:"10",width:"88",height:"26",rx:"2",fill:"rgba(20,4,4,0.9)",stroke:"rgba(239,68,68,0.35)",strokeWidth:"0.8"}),e.jsx("text",{x:"262",y:"21",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"6.5",fill:"#8a3a3a",children:"EHI"}),e.jsx("text",{x:"262",y:"32",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"10",fill:"#ef4444",fontWeight:"500",filter:"url(#glow4)",children:"14"}),e.jsx("text",{x:"160",y:"196",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7",fill:"#ef4444",letterSpacing:"0.5",opacity:"0.9",children:"SYSTEMIC COLLAPSE · EHI: 14"})]})}),e.jsxs("div",{className:"panel-caption",children:[e.jsx("div",{className:"panel-num",children:"Scene 04"}),e.jsx("h4",{children:"Collapse"}),e.jsx("p",{children:"Density accumulates. EHI plummets. Vegetation dies, water darkens, coral bleaches white. The room signals systemic failure."})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panel-sketch-wrap",children:e.jsxs("svg",{className:"panel-sketch",viewBox:"0 0 320 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"320",height:"200",fill:"#04090e"}),e.jsx("defs",{children:e.jsxs("filter",{id:"glow5",children:[e.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"b"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"b"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),e.jsx("line",{x1:"66",y1:"170",x2:"66",y2:"153",stroke:"#00ff88",strokeWidth:"1.5",opacity:"0.5",filter:"url(#glow5)"}),e.jsx("circle",{cx:"66",cy:"146",r:"8",fill:"none",stroke:"#00ff88",strokeWidth:"1",opacity:"0.4"}),e.jsx("circle",{cx:"108",cy:"182",r:"4",fill:"#00ff88",opacity:"0.3",filter:"url(#glow5)"}),e.jsx("circle",{cx:"124",cy:"178",r:"3",fill:"#00ff88",opacity:"0.25"}),e.jsx("rect",{x:"192",y:"124",width:"32",height:"22",rx:"2",fill:"rgba(0,212,255,0.15)",stroke:"rgba(0,212,255,0.5)",strokeWidth:"1.2",filter:"url(#glow5)"}),[129,134,139].map(r=>e.jsx("line",{x1:"192",y1:r,x2:"224",y2:r,stroke:"rgba(0,212,255,0.3)",strokeWidth:"0.5"},r)),e.jsx("line",{x1:"208",y1:"124",x2:"208",y2:"146",stroke:"rgba(0,212,255,0.3)",strokeWidth:"0.5"}),e.jsx("line",{x1:"142",y1:"180",x2:"142",y2:"160",stroke:"#00cc66",strokeWidth:"2",opacity:"0.8"}),e.jsx("circle",{cx:"142",cy:"153",r:"10",fill:"rgba(0,204,102,0.2)",stroke:"#00cc66",strokeWidth:"1",filter:"url(#glow5)"}),e.jsx("text",{x:"142",y:"157",textAnchor:"middle",fontSize:"10",children:"🌱"}),e.jsx("ellipse",{cx:"142",cy:"172",rx:"22",ry:"9",fill:"none",stroke:"rgba(0,255,136,0.2)",strokeWidth:"0.7",strokeDasharray:"2 4"}),e.jsx("ellipse",{cx:"208",cy:"138",rx:"22",ry:"13",fill:"none",stroke:"rgba(0,212,255,0.2)",strokeWidth:"0.7",strokeDasharray:"2 4"}),e.jsx("circle",{cx:"96",cy:"160",r:"6",fill:"none",stroke:"#00ff88",strokeWidth:"1.2",filter:"url(#glow5)"}),e.jsx("rect",{x:"91",y:"165",width:"10",height:"12",rx:"2",fill:"none",stroke:"#00ff88",strokeWidth:"1.2",filter:"url(#glow5)"}),e.jsx("circle",{cx:"252",cy:"160",r:"6",fill:"none",stroke:"#00ff88",strokeWidth:"1.2",filter:"url(#glow5)"}),e.jsx("rect",{x:"247",y:"165",width:"10",height:"12",rx:"2",fill:"none",stroke:"#00ff88",strokeWidth:"1.2",filter:"url(#glow5)"}),e.jsx("rect",{x:"218",y:"10",width:"88",height:"26",rx:"2",fill:"rgba(0,0,0,0.8)",stroke:"rgba(0,212,255,0.2)",strokeWidth:"0.8"}),e.jsx("text",{x:"262",y:"21",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"6.5",fill:"#3a5a78",children:"EHI"}),e.jsx("text",{x:"262",y:"32",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"10",fill:"#84cc16",fontWeight:"500",children:"38"}),e.jsx("text",{x:"160",y:"196",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7",fill:"#00ff88",letterSpacing:"0.5",opacity:"0.7",children:"RESTORATIVE OBJECTS DEPLOYED"})]})}),e.jsxs("div",{className:"panel-caption",children:[e.jsx("div",{className:"panel-num",children:"Scene 05"}),e.jsx("h4",{children:"Intervention"}),e.jsx("p",{children:"Participants receive plastic trees and mirrors. These positively shift EHI but never erase accumulated damage."})]})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"panel-sketch-wrap",children:e.jsxs("svg",{className:"panel-sketch",viewBox:"0 0 320 200",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"320",height:"200",fill:"#050a0f"}),e.jsx("defs",{children:e.jsxs("filter",{id:"glow6",children:[e.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"b"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"b"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),e.jsx("line",{x1:"58",y1:"170",x2:"58",y2:"148",stroke:"#00ff88",strokeWidth:"1.5",opacity:"0.6",filter:"url(#glow6)"}),e.jsx("circle",{cx:"58",cy:"141",r:"9",fill:"none",stroke:"#00ff88",strokeWidth:"1",opacity:"0.45"}),e.jsx("line",{x1:"92",y1:"174",x2:"92",y2:"158",stroke:"#00ff88",strokeWidth:"1.2",opacity:"0.45"}),e.jsx("circle",{cx:"92",cy:"152",r:"7",fill:"none",stroke:"#00ff88",strokeWidth:"1",opacity:"0.35"}),e.jsx("path",{d:"M 36 182 Q 96 176 160 179 Q 220 182 284 178",fill:"none",stroke:"#00b4cc",strokeWidth:"2",opacity:"0.5",filter:"url(#glow6)"}),e.jsx("circle",{cx:"108",cy:"158",r:"7",fill:"none",stroke:"#00ff88",strokeWidth:"1.5",filter:"url(#glow6)"}),e.jsx("rect",{x:"102",y:"164",width:"12",height:"15",rx:"3",fill:"none",stroke:"#00ff88",strokeWidth:"1.5",filter:"url(#glow6)"}),e.jsx("circle",{cx:"120",cy:"146",r:"3.5",fill:"none",stroke:"rgba(0,255,136,0.5)",strokeWidth:"0.7"}),e.jsx("circle",{cx:"127",cy:"139",r:"5",fill:"none",stroke:"rgba(0,255,136,0.5)",strokeWidth:"0.7"}),e.jsx("ellipse",{cx:"138",cy:"131",rx:"13",ry:"9",fill:"rgba(5,10,15,0.9)",stroke:"rgba(0,255,136,0.5)",strokeWidth:"0.9"}),e.jsx("text",{x:"138",y:"135",textAnchor:"middle",fontSize:"10",children:"🌍"}),e.jsx("circle",{cx:"214",cy:"160",r:"6",fill:"none",stroke:"#00ff88",strokeWidth:"1.3",filter:"url(#glow6)"}),e.jsx("rect",{x:"209",y:"165",width:"10",height:"13",rx:"2",fill:"none",stroke:"#00ff88",strokeWidth:"1.3",filter:"url(#glow6)"}),e.jsx("rect",{x:"16",y:"14",width:"160",height:"12",rx:"2",fill:"rgba(0,0,0,0.7)",stroke:"rgba(0,212,255,0.18)",strokeWidth:"0.8"}),e.jsx("rect",{x:"17",y:"15",width:"96",height:"10",rx:"1",fill:"rgba(0,255,136,0.35)"}),e.jsx("text",{x:"100",y:"23",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"6",fill:"#00ff88",children:"RECOVERING · 8 MIN"}),e.jsx("rect",{x:"218",y:"10",width:"88",height:"26",rx:"2",fill:"rgba(0,0,0,0.8)",stroke:"rgba(0,212,255,0.2)",strokeWidth:"0.8"}),e.jsx("text",{x:"262",y:"21",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"6.5",fill:"#3a5a78",children:"EHI"}),e.jsx("text",{x:"262",y:"32",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"10",fill:"#00ff88",fontWeight:"500",filter:"url(#glow6)",children:"57"}),e.jsx("text",{x:"160",y:"196",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7",fill:"#00ff88",letterSpacing:"0.5",opacity:"0.8",children:"UNDERSTANDING ARRIVES · LESSON LANDS"})]})}),e.jsxs("div",{className:"panel-caption",children:[e.jsx("div",{className:"panel-num",children:"Scene 06"}),e.jsx("h4",{children:"The Reflection"}),e.jsx("p",{children:"Participants step back. The slow recovery rate embodies a real-world truth: restoration is harder than destruction."})]})]})]})]})}),e.jsx("div",{className:"divider"}),e.jsxs("div",{style:{background:"var(--surface-0)"},children:[e.jsxs("div",{className:"section",style:{paddingBottom:"2rem"},children:[e.jsx("div",{className:"section-label reveal",children:"05 / System Architecture"}),e.jsx("h2",{className:"reveal",children:"The interactive loop"}),e.jsx("p",{className:"reveal",style:{maxWidth:620},children:"A continuous feedback system connecting physical presence to simulated ecology. Every participant is a variable in a live ecological equation."})]}),e.jsx("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 7vw 2rem"},children:e.jsx("div",{className:"flowchart-image-frame reveal",children:e.jsx("img",{src:x,alt:"Interactive system: real-time ecological feedback pipeline"})})}),e.jsx("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 7vw 6rem"},children:e.jsx("div",{className:"flowchart-svg-wrap reveal",children:e.jsxs("svg",{viewBox:"0 0 900 420",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"auto",minWidth:600},children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"aW",markerWidth:"7",markerHeight:"5",refX:"6",refY:"2.5",orient:"auto",children:e.jsx("polygon",{points:"0 0,7 2.5,0 5",fill:"rgba(255,255,255,0.3)"})}),e.jsx("marker",{id:"aC",markerWidth:"7",markerHeight:"5",refX:"6",refY:"2.5",orient:"auto",children:e.jsx("polygon",{points:"0 0,7 2.5,0 5",fill:"#00d4ff"})}),e.jsx("marker",{id:"aG",markerWidth:"7",markerHeight:"5",refX:"6",refY:"2.5",orient:"auto",children:e.jsx("polygon",{points:"0 0,7 2.5,0 5",fill:"#00ff88"})}),e.jsxs("filter",{id:"glowSvg",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"b"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsxs("g",{stroke:"rgba(0,212,255,0.04)",strokeWidth:"0.5",children:[[80,160,240,320,400].map(r=>e.jsx("line",{x1:"0",y1:r,x2:"900",y2:r},r)),[150,300,450,600,750].map(r=>e.jsx("line",{x1:r,y1:"0",x2:r,y2:"420"},r))]}),e.jsx("text",{x:"14",y:"112",fontFamily:"'IBM Plex Mono',monospace",fontSize:"8",fill:"rgba(0,212,255,0.25)",transform:"rotate(-90,14,112)",letterSpacing:"2",children:"INPUT"}),e.jsx("text",{x:"14",y:"232",fontFamily:"'IBM Plex Mono',monospace",fontSize:"8",fill:"rgba(0,212,255,0.25)",transform:"rotate(-90,14,232)",letterSpacing:"2",children:"PROCESS"}),e.jsx("text",{x:"14",y:"352",fontFamily:"'IBM Plex Mono',monospace",fontSize:"8",fill:"rgba(0,212,255,0.25)",transform:"rotate(-90,14,352)",letterSpacing:"2",children:"OUTPUT"}),e.jsx("line",{x1:"32",y1:"60",x2:"32",y2:"420",stroke:"rgba(0,212,255,0.08)",strokeWidth:"0.5"}),[{x:56,label:"HARDWARE",title:"Depth Camera",sub:"Intel RealSense",color:"#00d4ff"},{x:236,label:"ACTORS",title:"Participants",sub:"Body + Objects",color:"#ef4444"},{x:416,label:"PROPS",title:"Physical Objects",sub:"Bags · Ropes · Trees",color:"#ef4444"}].map(({x:r,label:t,title:i,sub:s,color:a})=>e.jsxs("g",{children:[e.jsx("rect",{x:r,y:"76",width:"140",height:"58",rx:"3",fill:"rgba(6,12,20,0.95)",stroke:`${a}44`,strokeWidth:"1.2"}),e.jsx("rect",{x:r,y:"76",width:"140",height:"2",rx:"1",fill:a,opacity:"0.6"}),e.jsx("text",{x:r+70,y:"96",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7.5",fill:a,letterSpacing:"0.5",children:t}),e.jsx("text",{x:r+70,y:"114",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"10",fill:"rgba(232,244,255,0.9)",fontWeight:"500",children:i}),e.jsx("text",{x:r+70,y:"128",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7.5",fill:"rgba(106,138,176,0.8)",children:s})]},i)),[{x:56,label:"VISION",title:"OpenCV",sub:"Silhouette extraction",color:"#00d4ff"},{x:296,label:"ALGORITHM",title:"EHI Engine",sub:"density x duration x accum.",color:"#ef4444",wide:!0},{x:596,label:"RENDER",title:"TouchDesigner",sub:"GLSL fluid simulation",color:"#00d4ff"}].map(({x:r,label:t,title:i,sub:s,color:a,wide:o})=>e.jsxs("g",{children:[e.jsx("rect",{x:r,y:"182",width:o?168:140,height:o?76:58,rx:"3",fill:"rgba(6,12,20,0.95)",stroke:`${a}44`,strokeWidth:o?1.8:1.2}),e.jsx("rect",{x:r,y:"182",width:o?168:140,height:"2",rx:"1",fill:a,opacity:"0.6"}),e.jsx("text",{x:r+(o?84:70),y:"200",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7.5",fill:a,letterSpacing:"0.5",children:t}),e.jsx("text",{x:r+(o?84:70),y:"218",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"11",fill:"rgba(232,244,255,0.9)",fontWeight:"500",children:i}),e.jsx("text",{x:r+(o?84:70),y:"233",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7.5",fill:"rgba(106,138,176,0.8)",children:s}),o&&e.jsx("text",{x:r+84,y:"248",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7",fill:"rgba(239,68,68,0.6)",children:"Python / C++"})]},i)),[{x:56,label:"VISUAL",title:"3-4 Projectors",sub:"Floor + wall mapping",wide:!1},{x:236,label:"AUDIO",title:"Surround Sound",sub:"Adaptive soundscape",wide:!1},{x:566,label:"STATE",title:"Ecological Engine",sub:"Bloom / Stable / Collapse",wide:!0}].map(({x:r,label:t,title:i,sub:s,wide:a})=>e.jsxs("g",{children:[e.jsx("rect",{x:r,y:"310",width:a?220:140,height:"58",rx:"3",fill:"rgba(6,12,20,0.95)",stroke:"rgba(0,212,255,0.18)",strokeWidth:"1.2"}),e.jsx("rect",{x:r,y:"310",width:a?220:140,height:"2",rx:"1",fill:"#00ff88",opacity:"0.5"}),e.jsx("text",{x:r+(a?110:70),y:"328",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7.5",fill:"#00ff88",letterSpacing:"0.5",children:t}),e.jsx("text",{x:r+(a?110:70),y:"346",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"10",fill:"rgba(232,244,255,0.9)",fontWeight:"500",children:i}),e.jsx("text",{x:r+(a?110:70),y:"360",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7.5",fill:"rgba(106,138,176,0.8)",children:s})]},i)),e.jsx("line",{x1:"126",y1:"134",x2:"126",y2:"180",stroke:"rgba(0,212,255,0.4)",strokeWidth:"1.2",markerEnd:"url(#aW)"}),e.jsx("line",{x1:"306",y1:"134",x2:"360",y2:"180",stroke:"rgba(239,68,68,0.6)",strokeWidth:"1.2",markerEnd:"url(#aC)"}),e.jsx("line",{x1:"486",y1:"134",x2:"448",y2:"180",stroke:"rgba(239,68,68,0.6)",strokeWidth:"1.2",markerEnd:"url(#aC)"}),e.jsx("line",{x1:"196",y1:"212",x2:"292",y2:"212",stroke:"rgba(0,212,255,0.4)",strokeWidth:"1.2",markerEnd:"url(#aW)"}),e.jsx("line",{x1:"464",y1:"224",x2:"592",y2:"224",stroke:"rgba(239,68,68,0.6)",strokeWidth:"1.2",markerEnd:"url(#aC)"}),e.jsx("line",{x1:"636",y1:"258",x2:"220",y2:"308",stroke:"rgba(0,255,136,0.4)",strokeWidth:"1.2",markerEnd:"url(#aG)"}),e.jsx("line",{x1:"660",y1:"258",x2:"356",y2:"308",stroke:"rgba(0,255,136,0.4)",strokeWidth:"1.2",markerEnd:"url(#aG)"}),e.jsx("line",{x1:"464",y1:"258",x2:"596",y2:"308",stroke:"rgba(239,68,68,0.5)",strokeWidth:"1.2",markerEnd:"url(#aC)"}),e.jsx("path",{d:"M 686 368 Q 856 420 856 220 Q 856 56 480 56 Q 350 56 306 74",fill:"none",stroke:"rgba(0,255,136,0.3)",strokeWidth:"1.2",strokeDasharray:"5 5",markerEnd:"url(#aG)"}),e.jsx("text",{x:"858",y:"228",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7.5",fill:"rgba(0,255,136,0.4)",transform:"rotate(90,858,228)",letterSpacing:"1",children:"FEEDBACK LOOP"}),e.jsx("text",{x:"450",y:"412",textAnchor:"middle",fontFamily:"'IBM Plex Mono',monospace",fontSize:"7.5",fill:"rgba(0,212,255,0.2)",letterSpacing:"2",children:"EMBODIED EARTH / SYSTEM ARCHITECTURE v1.0"})]})})})]}),e.jsx("div",{className:"divider"}),e.jsx("div",{style:{background:"var(--black)"},children:e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label reveal",children:"06 / Technology"}),e.jsx("h2",{className:"reveal",children:"Hardware and Software Stack"}),e.jsxs("div",{className:"tech-grid reveal",children:[e.jsxs("div",{className:"tech-block",children:[e.jsx("div",{className:"tech-block-label",children:"Hardware"}),e.jsx("h3",{children:"The Physical Layer"}),e.jsxs("ul",{className:"tech-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"3-4 Projectors:"})," floor and wall projection mapping creating the immersive ecological world"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overhead Depth Camera:"})," tracks participant position and density in real time"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Surround Audio System:"})," adaptive ambient soundscape that shifts with EHI state"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GPU-powered PC:"})," handles real-time rendering, simulation, and sensor processing"]})]})]}),e.jsxs("div",{className:"tech-block",children:[e.jsx("div",{className:"tech-block-label",children:"Software"}),e.jsx("h3",{children:"The Digital Engine"}),e.jsxs("ul",{className:"tech-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"TouchDesigner:"})," real-time visual programming for projection mapping and generative visuals"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OpenCV:"})," computer vision for silhouette extraction and participant tracking"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GLSL Shaders:"})," GPU-based fluid simulation for water flow and ecological visual states"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Python / C++:"})," core machine logic implementing the EHI calculation engine"]})]})]}),e.jsxs("div",{className:"tech-block",children:[e.jsx("div",{className:"tech-block-label",children:"Sensing"}),e.jsx("h3",{children:"How Presence is Read"}),e.jsxs("ul",{className:"tech-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Depth map analysis:"})," continuous overhead scan produces a 3D point cloud of positions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Silhouette extraction:"})," OpenCV isolates human forms, treating each as an obstacle"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Density heatmap:"})," spatial grid calculates crowd concentration per cell at ~30fps"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Object detection:"})," colour-coded physical objects are recognised and classified"]})]})]}),e.jsxs("div",{className:"tech-block",children:[e.jsx("div",{className:"tech-block-label",children:"Simulation"}),e.jsx("h3",{children:"How Ecology is Rendered"}),e.jsxs("ul",{className:"tech-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Fluid dynamics (GLSL):"})," Navier-Stokes-inspired shader simulates water disrupted by participants"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"L-system vegetation:"})," procedural plant growth algorithms determine foliage health"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Coral bleaching model:"})," gradual RGB shift from vibrant orange to white below EHI threshold"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Asymmetric decay:"})," damage rate faster than recovery rate, mirroring ecological tipping points"]})]})]})]})]})}),e.jsx("div",{className:"ehi-wrap",children:e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label reveal",children:"07 / The Algorithm"}),e.jsx("h2",{className:"reveal",children:"Environmental Health Index"}),e.jsxs("div",{className:"ehi-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"reveal",children:"The EHI is a continuous scalar from 0 to 100 representing overall ecosystem vitality. It is the central variable driving every visual and audio change in the installation."}),e.jsxs("div",{className:"ehi-formula reveal",children:[e.jsx("span",{className:"comment",children:`// EHI: core calculation

`}),e.jsx("span",{className:"fn",children:"EHI"})," = ",e.jsx("span",{className:"fn",children:"f"}),`(
`,"  ",e.jsx("span",{className:"var",children:"density"}),`( area + activity )
`,"  x ",e.jsx("span",{className:"var",children:"duration"}),`( stillness + time )
`,"  x ",e.jsx("span",{className:"var",children:"accumulation"}),`( weight + obj_count )
)

`,e.jsx("span",{className:"comment",children:`// Modifiers
`}),e.jsx("span",{className:"var",children:"restorative_obj"}),"  -> +",e.jsx("span",{className:"fn",children:"EHI_delta"}),` (trees, mirrors)
`,e.jsx("span",{className:"var",children:"disruptive_obj"}),"   -> -",e.jsx("span",{className:"fn",children:"EHI_delta"}),` (bags, ropes, LEGO)
`,e.jsx("span",{className:"var",children:"decay_rate"}),"       >  ",e.jsx("span",{className:"fn",children:"recovery_rate"}),"  ",e.jsx("span",{className:"comment",children:"// asymmetric"})]}),e.jsx("div",{className:"ehi-states reveal",children:[{range:"80-100",name:"Blooming"},{range:"50-79",name:"Stable"},{range:"20-49",name:"Withering"},{range:"0-19",name:"Collapse"}].map(({range:r,name:t})=>e.jsxs("div",{className:"ehi-state",children:[e.jsx("div",{className:"ehi-range",children:r}),e.jsx("div",{className:"ehi-state-name",children:t}),e.jsx("div",{className:"ehi-dot"})]},r))}),e.jsxs("div",{className:"threshold-grid reveal",children:[e.jsxs("div",{className:"threshold-block",children:[e.jsx("div",{className:"threshold-label",children:"Below threshold"}),e.jsx("ul",{className:"threshold-list",children:["Coral bleaching activates","Fish density reduces","Water darkens","Plant growth halts"].map(r=>e.jsx("li",{children:r},r))})]}),e.jsxs("div",{className:"threshold-block",children:[e.jsx("div",{className:"threshold-label",children:"Recovery conditions"}),e.jsx("ul",{className:"threshold-list",children:["Crowd density decreases","Participants clear space","Restorative objects placed","Recovery always slower than damage"].map(r=>e.jsx("li",{children:r},r))})]})]})]}),e.jsx("div",{children:e.jsx("div",{className:"ehi-image-frame reveal",children:e.jsx("img",{src:h,alt:"EHI feedback states slide"})})})]})]})}),e.jsx("div",{className:"divider"}),e.jsx("div",{style:{background:"var(--black)"},children:e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label reveal",children:"08 / Participatory Objects"}),e.jsx("h2",{className:"reveal",children:"Props that carry meaning"}),e.jsx("p",{className:"reveal",style:{maxWidth:680},children:"Participants are not told what to do. They are handed objects that feel like entertainment, and only gradually realise these objects carry ecological consequences."}),e.jsxs("div",{className:"objects-grid reveal",children:[e.jsxs("div",{className:"objects-block",children:[e.jsx("h3",{children:"Disruptive Objects"}),e.jsx("div",{className:"obj-tags",children:["Bean Bags","LEGO Bricks","Ropes","Balloons"].map(r=>e.jsx("span",{className:"obj-tag disruptive",children:r},r))}),e.jsx("p",{children:"These props symbolise settlement, construction, and accumulation. When placed they occupy space in the simulation and reduce water flow and plant regeneration. The longer they remain, the greater the accumulated penalty to EHI. They are given first, framed as fun."})]}),e.jsxs("div",{className:"objects-block",children:[e.jsx("h3",{children:"Restorative Objects"}),e.jsx("div",{className:"obj-tags",children:["Plastic Trees","Mirrors"].map(r=>e.jsx("span",{className:"obj-tag restorative",children:r},r))}),e.jsx("p",{children:"These symbolise reforestation and solar energy respectively. Placing a plastic tree triggers a recovery pulse; holding a mirror boosts EHI. Accumulated damage is never fully erasable: restoration is modelled as partial and slow, mirroring ecological reality."})]})]})]})}),e.jsx("div",{className:"statement-section",children:e.jsxs("div",{className:"statement-inner",children:[e.jsx("div",{className:"statement-mark",children:"Artist Statement"}),e.jsxs("p",{className:"statement-quote",children:["Embodied Earth connects human presence to environmental consequence, allowing participants to"," ",e.jsx("span",{children:"see and feel"})," how collective behaviour shapes ecological systems, and how slowly those systems heal once broken."]}),e.jsx("div",{className:"statement-attr",children:" Thad / CS6042 / 2026"})]})}),e.jsx("div",{style:{background:"var(--black)"},children:e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label reveal",children:"09 / Reflection"}),e.jsx("h2",{className:"reveal",children:"What we learned making it"}),e.jsxs("div",{className:"reflection-grid",children:[e.jsxs("div",{className:"reflection-body",children:[e.jsx("h3",{className:"reveal",children:"On the Design Process"}),e.jsx("p",{className:"reveal",children:"The central challenge was making the causal link between human action and ecological response legible without being didactic. Early iterations used explicit warning text; these felt preachy and broke immersion. We stripped everything back to the visual layer: when the world withers beneath your feet, explanation becomes redundant."}),e.jsx("p",{className:"reveal",children:"Making damage asymmetric, faster to accumulate than to heal, was the hardest and most important design choice. We mitigated frustration by ensuring early-stage degradation is gradual and beautiful rather than alarming, drawing participants in before consequence becomes visible."}),e.jsx("h3",{className:"reveal",children:"On Technical Implementation"}),e.jsx("p",{className:"reveal",children:"TouchDesigner's node-based architecture proved ideal for linking sensor input to visual output in real time. The most demanding component was the GLSL fluid simulation: getting water to respond naturally to participant-sized obstacles required significant shader tuning. The EHI calculation is deceptively simple; the complexity lives in calibrating density, duration, and accumulation weightings so the installation feels responsive but not chaotic."}),e.jsx("h3",{className:"reveal",children:"On the Learning Outcomes"}),e.jsx("p",{className:"reveal",children:"The assignment asked us to determine relevant tools for specific interactive effects. TouchDesigner, OpenCV, and GLSL emerged naturally from the problem rather than being selected from a list. Storyboarding forced sequential thinking about the participant's emotional arc, not just the technical system. The most valuable realisation: the storyboard and the flowchart describe the same system from different angles, one human, one computational."})]}),e.jsx("div",{className:"reveal",children:[{label:"On Collective Impact",body:"The work makes visible what is normally invisible: ecological damage is not caused by villains but by everyone doing ordinary things. Standing in a room together is not harmful, unless the room is alive."},{label:"On Fragility",body:"When recovery is slower than damage, participants intuitively perceive ecosystems as fragile. This is more effective than any statistics-based communication."},{label:"On Behaviour Change",body:"Observing that harm is linked to crowding, participants naturally begin to self-regulate: spreading out, stepping back. The installation produces the behaviour it depicts."},{label:"SDG Alignment",body:"The work directly addresses SDG 13, 14, and 15, not by describing them, but by producing a miniature version of them at human scale, in a room, in real time."}].map(({label:r,body:t})=>e.jsxs("div",{className:"reflection-note",children:[e.jsx("div",{className:"reflection-note-label",children:r}),e.jsx("p",{children:t})]},r))})]})]})}),e.jsxs("footer",{className:"ee-footer",children:[e.jsxs("div",{className:"footer-brand",children:["Embodied ",e.jsx("span",{children:"Earth"})]}),e.jsxs("div",{className:"footer-info",children:["CS6042 · Assignment 1",e.jsx("br",{}),"Interactive Installation · UN SDGs 13, 14, 15",e.jsx("br",{}),"Thaddeus · 2026"]})]})]})}export{j as default};
