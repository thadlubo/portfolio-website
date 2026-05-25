import {
  motion,
  useMotionValue,
  animate,
  AnimatePresence,
  type PanInfo,
} from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type MediaItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string };

interface MediaCarouselProps {
  items: MediaItem[];
  aspectRatio?: string;
  borderRadius?: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SNAP_SPRING = { type: "spring" as const, stiffness: 340, damping: 38, mass: 0.45 };
const FLING_VEL   = 450;

// ─── Component ────────────────────────────────────────────────────────────────

export default function MediaCarousel({
  items,
  aspectRatio   = "16 / 9",
  borderRadius  = 16,
}: MediaCarouselProps) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const videoRefs     = useRef<Map<number, HTMLVideoElement>>(new Map());
  const dragMovedRef  = useRef(false);

  const [width,      setWidth]      = useState(0);
  const [activeIdx,  setActiveIdx]  = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [interacted, setInteracted] = useState(false);

  const x = useMotionValue(0);

  // ── Measure ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Sync active index ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!width) return;
    return x.on("change", (v) => {
      const idx = Math.max(0, Math.min(items.length - 1, Math.round(-v / width)));
      setActiveIdx(idx);
    });
  }, [x, width, items.length]);

  // ── Pause inactive videos ──────────────────────────────────────────────────
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (i !== activeIdx && !vid.paused) {
        vid.pause();
        setPlayingIdx((p) => (p === i ? null : p));
      }
    });
  }, [activeIdx]);

  // ── Snap ───────────────────────────────────────────────────────────────────
  const snapTo = useCallback((idx: number) => {
    if (!width) return;
    setInteracted(true);
    animate(x, -idx * width, SNAP_SPRING);
  }, [x, width]);

  // ── Drag end ───────────────────────────────────────────────────────────────
  const handleDragEnd = useCallback((_: PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    if (!width) return;

    const raw = -x.get() / width;
    const vx  = info.velocity.x;
    let next  = Math.round(raw);

    if (vx < -FLING_VEL) next = Math.min(Math.floor(raw) + 1, items.length - 1);
    if (vx >  FLING_VEL) next = Math.max(Math.ceil(raw)  - 1, 0);

    snapTo(Math.max(0, Math.min(items.length - 1, next)));
  }, [x, width, items.length, snapTo]);

  // ── Video toggle ───────────────────────────────────────────────────────────
  const toggleVideo = (idx: number) => {
    if (dragMovedRef.current) return;
    const vid = videoRefs.current.get(idx);
    if (!vid) return;
    if (vid.paused) { vid.play(); setPlayingIdx(idx); }
    else            { vid.pause(); setPlayingIdx(null); }
  };

  if (!items.length) return null;

  const minX = -(items.length - 1) * width;

  return (
    <div
      ref={containerRef}
      style={{
        position:     "relative",
        width:        "100%",
        aspectRatio,
        borderRadius: `${borderRadius}px`,
        overflow:     "hidden",
        background:   "#0c0c0c",
        cursor:       isDragging ? "grabbing" : items.length > 1 ? "grab" : "default",
        userSelect:   "none",
        touchAction:  "pan-y",
      }}
    >

      {/* ── Track ── */}
      {width > 0 && (
        <motion.div
          drag={items.length > 1 ? "x" : false}
          dragDirectionLock
          dragConstraints={{ left: minX, right: 0 }}
          dragElastic={0.1}
          dragTransition={{
            power:        0.28,
            timeConstant: 180,
            modifyTarget: (t) => {
              const idx = Math.max(0, Math.min(items.length - 1, Math.round(-t / width)));
              return -idx * width;
            },
          }}
          onDragStart={() => {
            setIsDragging(true);
            setInteracted(true);
            dragMovedRef.current = false;
          }}
          onDrag={() => { dragMovedRef.current = true; }}
          onDragEnd={handleDragEnd}
          style={{
            x,
            display: "flex",
            width:   `${items.length * width}px`,
            height:  "100%",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{ width: `${width}px`, height: "100%", flexShrink: 0, position: "relative" }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt ?? ""}
                  draggable={false}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
                />
              ) : (
                <>
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current.set(i, el);
                      else    videoRefs.current.delete(i);
                    }}
                    src={item.src}
                    poster={item.poster}
                    playsInline
                    loop
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
                    onEnded={() => setPlayingIdx(null)}
                  />

                  {/* Play / pause overlay */}
                  <motion.div
                    onClick={() => toggleVideo(i)}
                    animate={{ opacity: playingIdx === i ? 0 : 1 }}
                    whileHover={{ opacity: playingIdx === i ? 0.6 : 1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position:       "absolute",
                      inset:          0,
                      display:        "flex",
                      alignItems:     "center",
                      justifyContent: "center",
                      cursor:         "pointer",
                      background:     playingIdx === i ? "transparent" : "rgba(0,0,0,0.18)",
                    }}
                  >
                    <div style={{
                      width:           "52px",
                      height:          "52px",
                      borderRadius:    "50%",
                      background:      "rgba(255,255,255,0.14)",
                      backdropFilter:  "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border:          "1px solid rgba(255,255,255,0.22)",
                      display:         "flex",
                      alignItems:      "center",
                      justifyContent:  "center",
                    }}>
                      <span style={{ color: "white", fontSize: "17px", marginLeft: "3px" }}>▶</span>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </motion.div>
      )}

      {/* ── Counter ── */}
      {items.length > 1 && (
        <div style={{
          position:      "absolute",
          top:           "12px",
          right:         "14px",
          zIndex:        10,
          pointerEvents: "none",
          overflow:      "hidden",
          height:        "16px",
        }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIdx}
              initial={{ y: 8,  opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              exit={{   y: -8,  opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                display:       "block",
                fontSize:      "10px",
                color:         "rgba(255,255,255,0.45)",
                letterSpacing: "0.14em",
                fontFamily:    "monospace",
              }}
            >
              {String(activeIdx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </div>
      )}

      {/* ── Dot indicators ── */}
      {items.length > 1 && (
        <div style={{
          position:       "absolute",
          bottom:         "14px",
          left:           0,
          right:          0,
          display:        "flex",
          justifyContent: "center",
          alignItems:     "center",
          gap:            "6px",
          zIndex:         10,
        }}>
          {items.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => snapTo(i)}
              animate={{
                width:   i === activeIdx ? 22 : 5,
                opacity: i === activeIdx ? 1  : 0.28,
              }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              style={{
                height:       "3px",
                borderRadius: "2px",
                background:   "white",
                border:       "none",
                padding:      0,
                cursor:       "pointer",
                flexShrink:   0,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Drag hint ── */}
      {items.length > 1 && (
        <AnimatePresence>
          {!interacted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.6, times: [0, 0.2, 0.8, 1], repeat: Infinity, repeatDelay: 0.8 }}
              style={{
                position:       "absolute",
                bottom:         "40px",
                left:           0,
                right:          0,
                display:        "flex",
                justifyContent: "center",
                alignItems:     "center",
                gap:            "12px",
                color:          "rgba(255,255,255,0.4)",
                fontSize:       "9px",
                letterSpacing:  "0.2em",
                pointerEvents:  "none",
                zIndex:         10,
              }}
            >
              <motion.span animate={{ x: [-4, 0, -4] }} transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}>←</motion.span>
              <span>DRAG</span>
              <motion.span animate={{ x: [4, 0, 4] }}  transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      )}

    </div>
  );
}