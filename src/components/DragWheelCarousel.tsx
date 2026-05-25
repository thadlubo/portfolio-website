import { motion, useMotionValue, animate, AnimatePresence, PanInfo } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const ITEMS = [
  { name: "Claddagh AI",    num: "01", img: "images/CladdaghAI/CAI1.jpg" },
  { name: "Warsaw",   num: "02", img: "https://assets.website-files.com/6433cc883030fd3b3ee10b0b/6433ce555d665f716054c3b2_2.jpeg" },
  { name: "Madrid",   num: "03", img: "https://assets.website-files.com/6433cc883030fd3b3ee10b0b/6433ce8872548ff00206f68b_3.jpeg" },
  { name: "Sydney",   num: "04", img: "https://assets.website-files.com/6433cc883030fd3b3ee10b0b/6433ceb8e9cbf06def4a6b4c_4.jpeg" },
  { name: "Istanbul", num: "05", img: "https://assets.website-files.com/6433cc883030fd3b3ee10b0b/6433cee7a50b9c4253738d93_5.jpeg" },
  { name: "Prague",   num: "06", img: "https://assets.website-files.com/6433cc883030fd3b3ee10b0b/6433cf1a92ccec6b033ec82d_6.jpeg" },
  { name: "Munich",   num: "07", img: "https://assets.website-files.com/6433cc883030fd3b3ee10b0b/6433cf4f1b653321afbd1ffd_7.jpeg" },
  { name: "Venice",   num: "08", img: "https://assets.website-files.com/6433cc883030fd3b3ee10b0b/6433cf772bb6b44ba4aec28f_8.jpeg" },
  { name: "Oslo",     num: "09", img: "https://assets.website-files.com/6433cc883030fd3b3ee10b0b/6433cfa9d579304786467ec7_9.jpeg" },
  { name: "London",   num: "10", img: "https://assets.website-files.com/6433cc883030fd3b3ee10b0b/6433ce0d3f44a779fe769b89_1.jpeg" },
] as const;

// ─── Layout constants ──────────────────────────────────────────────────────────
const CARD_W   = 360;
const CARD_H   = 300;
const CARD_GAP = 24;
const STRIDE   = CARD_W + CARD_GAP;

// ─── Spring presets ────────────────────────────────────────────────────────────
const SNAP_SPRING = { type: "spring" as const, stiffness: 320, damping: 36, mass: 0.5 };
const TEXT_EASE   = [0.23, 1, 0.32, 1] as const;

// Velocity threshold for an intentional "fling past edge" on mobile drag
const EDGE_VELOCITY = 300;

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

// ── Finds the nearest scrollable ancestor and nudges it one viewport ──────────
// This is what makes the component fully self-contained — no props or callbacks
// needed from the parent.
function scrollNearestParent(el: HTMLElement | null, dir: 1 | -1) {
  let node = el?.parentElement ?? null;
  while (node) {
    const { overflow, overflowY } = window.getComputedStyle(node);
    if (/(auto|scroll)/.test(overflow + overflowY)) {
      node.scrollBy({ top: dir * node.clientHeight, behavior: "smooth" });
      return;
    }
    node = node.parentElement;
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function DragWheelCarousel() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const initOffsetRef = useRef(0);

  const [ready,      setReady]      = useState(false);
  const [initOffset, setInitOffset] = useState(0);
  const [activeIdx,  setActiveIdx]  = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const x = useMotionValue(0);

  const minX = initOffset - (ITEMS.length - 1) * STRIDE;
  const maxX = initOffset;

  // ── Font injection ─────────────────────────────────────────────────────────
  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400&display=swap";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  // ── Measure container, set initial x ──────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w      = el.offsetWidth;
      const offset = (w - CARD_W) / 2;
      initOffsetRef.current = offset;
      setInitOffset(offset);
      x.set(offset);
      setReady(true);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [x]);

  // ── Sync active index from x ───────────────────────────────────────────────
  useEffect(() => {
    const unsub = x.on("change", (v) => {
      const rel = initOffsetRef.current - v;
      setActiveIdx(clamp(Math.round(rel / STRIDE), 0, ITEMS.length - 1));
    });
    return unsub;
  }, [x]);

  // ── Snap to index ──────────────────────────────────────────────────────────
  const snapTo = useCallback((idx: number) => {
    animate(x, initOffsetRef.current - idx * STRIDE, SNAP_SPRING);
  }, [x]);

  // ── Wheel handler ──────────────────────────────────────────────────────────
  // KEY RULE: only call preventDefault() when in the middle of the carousel.
  // At the first/last card, do NOT prevent — the event bubbles up to the
  // parent snap container which scrolls to the previous/next section naturally.
  const handleWheel = useCallback((e: WheelEvent) => {
    const rel = initOffsetRef.current - x.get();
    const cur = clamp(Math.round(rel / STRIDE), 0, ITEMS.length - 1);
    const dir = e.deltaY > 20 ? 1 : e.deltaY < -20 ? -1 : 0;
    if (dir === 0) return;

    const atStart = cur === 0                 && dir === -1;
    const atEnd   = cur === ITEMS.length - 1  && dir ===  1;

    if (atStart || atEnd) {
      // ← no preventDefault here: event bubbles to the snap container
      return;
    }

    e.preventDefault();
    setInteracted(true);
    snapTo(clamp(cur + dir, 0, ITEMS.length - 1));
  }, [x, snapTo]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  // ── Drag end ───────────────────────────────────────────────────────────────
  // For mobile: if the user flings past the first or last card, scroll the
  // nearest scrollable parent (the Hero snap container) one viewport.
  const handleDragEnd = useCallback((_: PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const rel = initOffsetRef.current - x.get();
    const cur = clamp(Math.round(rel / STRIDE), 0, ITEMS.length - 1);
    const vx  = info.velocity.x;

    if (cur === 0                && vx >  EDGE_VELOCITY) {
      scrollNearestParent(containerRef.current, -1); // scroll parent up
    } else if (cur === ITEMS.length - 1 && vx < -EDGE_VELOCITY) {
      scrollNearestParent(containerRef.current,  1); // scroll parent down
    }
  }, [x]);

  return (
    <div
      ref={containerRef}
      style={{
        position:   "relative",
        width:      "100%",
        height:     "100vh",
        overflow:   "hidden",
        background: "",
        userSelect: "none",
        cursor:     isDragging ? "grabbing" : "grab",
        fontFamily: "'DM Mono', monospace",
      }}
    >

      {/* ── Giant ghost city name ── */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.055, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.55, ease: TEXT_EASE }}
            style={{
              fontFamily:    "'Bebas Neue', sans-serif",
              fontSize:      "clamp(90px, 22vw, 320px)",
              color:         "white",
              letterSpacing: "-0.01em",
              whiteSpace:    "nowrap",
              lineHeight:    1,
            }}
          >
            {ITEMS[activeIdx].name}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Top bar ── */}
      <div style={{
        position:       "absolute",
        top:            40,
        left:           0,
        right:          0,
        padding:        "0 48px",
        display:        "flex",
        justifyContent: "space-between",
        alignItems:     "flex-start",
        zIndex:         10,
        pointerEvents:  "none",
      }}>
        <div>
          <div style={{ color: "rgba(255,255,255,0.28)", fontSize: "10px", letterSpacing: "0.22em", marginBottom: "10px" }}>
            EXPLORE THE WORLD
          </div>
          <div style={{ overflow: "hidden", height: "58px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0,  opacity: 1 }}
                exit={{   y: -18, opacity: 0 }}
                transition={{ duration: 0.32, ease: TEXT_EASE }}
                style={{
                  fontFamily:    "'Bebas Neue', sans-serif",
                  fontSize:      "58px",
                  color:         "white",
                  letterSpacing: "0.04em",
                  lineHeight:    "58px",
                }}
              >
                {ITEMS[activeIdx].name}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div style={{ textAlign: "right", paddingTop: "30px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{   opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
              style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "0.18em" }}
            >
              {String(activeIdx + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Carousel track ── */}
      {ready && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
          <motion.div
            drag="x"
            dragDirectionLock               // detects horizontal vs vertical; lets vertical pass through to snap container
            dragConstraints={{ left: minX, right: maxX }}
            dragTransition={{
              power:        0.3,
              timeConstant: 200,
              modifyTarget: (target) => {
                const rel = initOffsetRef.current - target;
                const idx = clamp(Math.round(rel / STRIDE), 0, ITEMS.length - 1);
                return initOffsetRef.current - idx * STRIDE;
              },
            }}
            onDragStart={() => { setIsDragging(true); setInteracted(true); }}
            onDragEnd={handleDragEnd}
            style={{ x, display: "flex", alignItems: "center", gap: `${CARD_GAP}px` }}
          >
            {ITEMS.map((item, i) => {
              const dist = Math.abs(i - activeIdx);
              return (
                <motion.div
                  key={item.name}
                  onClick={() => { snapTo(i); setInteracted(true); }}
                  animate={{
                    scale:  dist === 0 ? 1     : dist === 1 ? 0.88  : 0.78,
                    opacity: dist === 0 ? 1    : dist === 1 ? 0.55  : 0.28,
                    filter: dist === 0
                      ? "blur(0px) brightness(1)"
                      : dist === 1
                        ? "blur(0.5px) brightness(0.7)"
                        : "blur(1.5px) brightness(0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  style={{
                    width:        `${CARD_W}px`,
                    height:       `${CARD_H}px`,
                    flexShrink:   0,
                    borderRadius: "16px",
                    overflow:     "hidden",
                    position:     "relative",
                    cursor:       dist === 0 ? (isDragging ? "grabbing" : "grab") : "pointer",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    draggable={false}
                    style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }}
                  />
                  <div style={{
                    position:   "absolute",
                    inset:      0,
                    background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.88) 100%)",
                  }} />
                  <div style={{
                    position:        "absolute",
                    bottom:          "20px",
                    left:            "20px",
                    right:           "20px",
                    display:         "flex",
                    justifyContent:  "space-between",
                    alignItems:      "flex-end",
                  }}>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "26px", color: "white", letterSpacing: "0.06em" }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em" }}>
                      {item.num}
                    </span>
                  </div>
                  {dist === 0 && (
                    <motion.div
                      layoutId="card-ring"
                      style={{
                        position:      "absolute",
                        inset:         0,
                        borderRadius:  "16px",
                        border:        "1px solid rgba(255,255,255,0.18)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}

      {/* ── Dot indicators ── */}
      <div style={{
        position:       "absolute",
        bottom:         36,
        left:           0,
        right:          0,
        display:        "flex",
        justifyContent: "center",
        alignItems:     "center",
        gap:            "8px",
        zIndex:         10,
      }}>
        {ITEMS.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => { snapTo(i); setInteracted(true); }}
            animate={{
              width:   i === activeIdx ? 24 : 5,
              opacity: i === activeIdx ? 1  : 0.22,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ height: "3px", borderRadius: "2px", background: "white", border: "none", padding: 0, cursor: "pointer", flexShrink: 0 }}
          />
        ))}
      </div>

      {/* ── Drag hint ── */}
      <AnimatePresence>
        {!interacted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0.55, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.8, times: [0, 0.2, 0.8, 1], repeat: Infinity, repeatDelay: 0.6 }}
            style={{
              position:       "absolute",
              bottom:         76,
              left:           0,
              right:          0,
              display:        "flex",
              justifyContent: "center",
              alignItems:     "center",
              gap:            "14px",
              color:          "rgba(255,255,255,0.4)",
              fontSize:       "9px",
              letterSpacing:  "0.22em",
              zIndex:         10,
              pointerEvents:  "none",
            }}
          >
            <motion.span animate={{ x: [-5, 0, -5] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>←</motion.span>
            <span>DRAG OR SCROLL</span>
            <motion.span animate={{ x: [5, 0, 5] }}  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}