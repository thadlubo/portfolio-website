import { useEffect } from "react";
import type { CSSProperties } from "react";
import MediaCarousel, { type MediaItem } from "./Mediacarousel";

const SECTION_MEDIA: Record<string, MediaItem[]> = {
    concept: [
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/CosmicSlot.png", alt: "The Cosmic Slot Machine installation" },
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/cuboidCopperPad.jpg", alt: "Cuboid with Copper Pad" },
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/FlyingCreatures.jpeg", alt: "Laser cut cuboid, one piece" },
    ],
    build: [
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/VectorCuboid.png", alt: "Cuboid vector design and engravings" },
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/Kerf.jpeg", alt: "Kerf on Cuboid" },
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/TinkerCad.png", alt: "TinkerCAD circuit diagram and schematic" },
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/BandValues.jpg", alt: "Testing Resistor Values for Cuboid" },
    ],
    demo: [
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/TouchDesigner.png", alt: "TouchDesigner node network and cosmos states" },
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/Frank.png", alt: "Frank watching over the pads" },
    ],
    reflection: [
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/Group 4.png", alt: "Visually cohesive numerology styling (post-demo)" },
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/AnimeSlot.jpg", alt: "Manga-style slot machine (pre-demo)" },
        { type: "image", src: "/portfolio-website/images/InteractiveSculpture/FinalSlot.jpg", alt: "Visually cohesive slot styling (post-demo)" },
    ],
};


function SectionNumber({ n }: { n: number }) {
    return <div style={s.sectionNumber}>0{n}</div>;
}

function Label({ children }: { children: React.ReactNode }) {
    return <p style={s.label}>{children}</p>;
}

function PullQuote({ children }: { children: React.ReactNode }) {
    return (
        <blockquote style={s.pullQuote}>
            <p style={s.pullQuoteText}>{children}</p>
        </blockquote>
    );
}

function Tags({ items }: { items: string[] }) {
    return (
        <div style={s.tags}>
            {items.map((t) => <span key={t} style={s.tag}>{t}</span>)}
        </div>
    );
}

function SectionMedia({ items }: { items: MediaItem[] }) {
    if (!items || items.length === 0) return null;
    return (
        <div style={s.carouselWrap}>
            <MediaCarousel items={items} aspectRatio="16 / 9" borderRadius={10} />
        </div>
    );
}


export default function CosmicSlotBlog() {
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = GLOBAL_CSS;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    return (
        <div style={s.root}>
            <div style={s.starfield} aria-hidden />

            {/* Hero */}
            <section style={s.hero}>
                <div style={s.heroGlow} aria-hidden />
                <p style={s.heroEyebrow}>CS6042 · Interactive Media · MSc IXD · University of Limerick</p>
                <h1 style={s.heroTitle}>
                    The<br />
                    <span style={s.heroTitleRed}>Cosmic</span><br />
                    Slot<br />
                    <span style={s.heroTitleRed}>Machine</span>
                </h1>
                <p style={s.heroSubtitle}>
                    A project reflection. Four laser-cut cuboids, one snake oracle, and about forty afternoons of absolute notions.
                </p>
            </section>

            <main style={s.main}>

                {/* 01 */}
                <article style={s.section}>
                    <SectionNumber n={1} />
                    <Label>The Concept</Label>
                    <h2 style={s.h2}>A Slot Machine With Its Soul Rewritten</h2>

                    <SectionMedia items={SECTION_MEDIA.concept} />

                    <p style={s.p}>
                        The brief asked for a modular sculpture where meaning shifts as you rearrange the pieces. Fair enough. The obvious approach would have been a colour-changing yoke that reacts when you move a box. Lovely. Grand. Deeply uninspiring. We wanted actual stakes, and the slot machine gave us that without requiring anyone to lose money or their dignity.
                    </p>
                    <p style={s.p}>
                        The logic was Dunne and Raby all the way: critique a thing by inhabiting its exact form and quietly rewiring it from the inside. Strip the slots down to resistors and a probability table, hand the mechanism to the audience, and suddenly the most psychologically manipulative machine in existence becomes something you operate yourself. The compulsion loop is still there (we were honest enough in the write-up to flag that) but you're now the one steering it rather than being steered.
                    </p>
                    <PullQuote>
                        "The cosmos is the visible world. The slot machine is what waits underneath it."
                    </PullQuote>
                    <p style={s.p}>
                        Four cuboids, Clouds, Fish, Birds, Sea, each with a resistor inside, each with Yuki's Japanese brushwork on the outside. Place three on the copper pads and you compose a circuit. Frank, the half-snake half-humanoid resin oracle lording over the whole setup, blinks red to let you know the machine is awake. No button. No instructions. Gas, isn't it.
                    </p>
                    <Tags items={["Critical Design", "Dunne & Raby", "Generative Art", "Angel Numbers", "Pure Notions"]} />
                </article>

                <hr style={s.divider} />

                {/* 02 */}
                <article style={s.section}>
                    <SectionNumber n={2} />
                    <Label>The Build</Label>
                    <h2 style={s.h2}>Kerf Will Humble You Every Single Time</h2>

                    <SectionMedia items={SECTION_MEDIA.build} />

                    <p style={s.p}>
                        Here's what nobody tells you before your first laser cut: the blade removes material. Not a lot. About 0.15mm per side, in our case. But joints that look perfect on screen simply will not close if you haven't accounted for that. The first test cuts came out a whisker too wide and we spent a fun afternoon filing every edge by hand until the boxes pulled flush without glue. Slow, slightly tedious, and weirdly worth it. A cuboid held together by pure tolerance feels different in the hand. Deliberate. People noticed without being told.
                    </p>
                    <p style={s.p}>
                        Tinkercad was a fierce help before anything touched real copper. Every wiring mistake, every misread voltage divider, every resistor on the wrong rail caught in simulation for free rather than in the actual circuit for your nerves. The shift to physical still threw surprises: finger oils, rotational misalignment, inconsistent readings under real handling. That's where the band-grouping decision came from. The system needed to be robust to actual human hands, not lab conditions.
                    </p>
                    <PullQuote>
                        "Eight resistor values. Three analogue pins. One anxiety-inducing test run with a multimeter at 11pm."
                    </PullQuote>
                    <p style={s.p}>
                        TouchDesigner was approached through structured messing rather than direct implementation. Particle systems, feedback loops, audio-reactive parameters, all tested against the project logic until something felt proportional rather than just visually busy. Plenty of afternoons went into calibrating that line. Plenty of tea consumed.
                    </p>
                    <Tags items={["Laser Cutting", "Arduino", "TouchDesigner", "Voltage Divider", "Kerf Compensation"]} />
                </article>

                <hr style={s.divider} />

                {/* 03 */}
                <article style={s.section}>
                    <SectionNumber n={3} />
                    <Label>The Demo</Label>
                    <h2 style={s.h2}>The Reveal Happened Exactly As Designed. Sound Out.</h2>

                    <SectionMedia items={SECTION_MEDIA.demo} />

                    <p style={s.p}>
                        The class demo was the piece's best moment and most instructive lesson in the same breath. The lecturer spent the full session exploring the cosmos layer, swapping cuboids, rearranging, listening to the sound shift, watching the nebula respond, without once finding the hidden slot machine. Which was exactly the point. The slot machine isn't announced. It waits.
                    </p>
                    <p style={s.p}>
                        Then she noticed an opaque image sitting in the TouchDesigner output and asked what it was. Lights up on Frank. Eyes full red. Machine awake. The reveal was earned through sustained attention rather than stumbled into by accident. Torre's definition of genuine interactivity as something closer to dialogue than response landed right there in practice. You needed Frank's permission first, then you had to act on a hypothesis. Deadly stuff altogether.
                    </p>
                    <PullQuote>
                        "You can't stumble into the slot machine. You have to want to find it."
                    </PullQuote>
                    <p style={s.p}>
                        Frank performed brilliantly as a status indicator and only fairly as a first point of contact. Participants who noticed him immediately understood his eyes as meaningful. Those who skipped him couldn't work out why the system wasn't fully responding. A clearer ambient signal in his dormant state, something barely-there that reads as <em>waiting</em> rather than <em>off</em>, would fix that without touching the quality of the reveal. Classic Ihnatowicz problem, that.
                    </p>
                    <Tags items={["Class Demo", "Frank The Oracle", "Hidden Reveal", "Interactivity", "She Found It"]} />
                </article>

                <hr style={s.divider} />

                {/* 04 */}
                <article style={s.section}>
                    <SectionNumber n={4} />
                    <Label>The Reflection</Label>
                    <h2 style={s.h2}>The Critique That Needed To Happen</h2>

                    <SectionMedia items={SECTION_MEDIA.reflection} />

                    <p style={s.p}>
                        The most useful feedback stung a bit at the time: the original slot machine imagery, drawn in manga style, sat in a completely different aesthetic world from Yuki's Japanese brushwork. On screen it read as two separate projects sharing a display. Fair slagging, and we took it seriously. The slot machine visuals were rebuilt using the Clouds, Fish, Birds, and Sea imagery from the engravings. That one iteration was the most significant design improvement across the whole project, and it came from someone telling us it wasn't working rather than us noticing ourselves.
                    </p>
                    <p style={s.p}>
                        The Fish sound deserves a mention. Rather than sourcing a conventional aquatic recording, we recorded a straw being dragged through a frappe cup. Processed and pitched, it became immediately unfamiliar and identifiably organic without pointing to a single source. Found material, transformed, made strange enough to feel right. It gave the Fish cuboid a textural specificity that synthesised patches genuinely couldn't match.
                    </p>
                    <PullQuote>
                        "The system is not an oracle. It is a mirror with variable opacity."
                    </PullQuote>
                    <p style={s.p}>
                        The question the project leaves behind is how much of a system's logic should actually be visible to the people inside it. The probability structure was entirely invisible during the demo. Making it perceptible might have deepened engagement without explaining the system away. Galanter's edge between order and chaos is easier to write about than to find in practice. That one stays open. Which feels right, really.
                    </p>
                    <Tags items={["Visual Coherence", "Musique Concrete", "Generative Systems", "Galanter", "Still Thinking About It"]} />
                </article>

            </main>

            <footer style={s.footer}>
                <p>THE COSMIC SLOT MACHINE · CS6042 Interactive Media · MSc Interaction &amp; Experience Design</p>
                <p style={s.footerNames}>Thaddeus Lubo · Baoxian Zhang · Yushan Zhang · Janhavi Koparkar</p>
            </footer>
        </div>
    );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const COLORS = {
    bg: "#0a0a0f",
    card: "#16161f",
    red: "#c0392b",
    redGlow: "#e74c3c",
    cream: "#f0e8d8",
    muted: "#888890",
    border: "rgba(192,57,43,0.25)",
    text: "#c8bfb0",
};

const MONO = "'Space Mono', monospace";
const SERIF = "'Lora', Georgia, serif";
const BEBAS = "'Bebas Neue', sans-serif";

const s: Record<string, CSSProperties> = {
    root: {
        background: COLORS.bg,
        color: COLORS.cream,
        fontFamily: SERIF,
        lineHeight: 1.75,
        overflowX: "hidden",
        minHeight: "100vh",
    },

    starfield: {
        position: "fixed",
        inset: 0,
        backgroundImage: [
            "radial-gradient(1px 1px at 20% 15%, rgba(255,255,255,0.6) 0%, transparent 100%)",
            "radial-gradient(1px 1px at 75% 30%, rgba(255,255,255,0.4) 0%, transparent 100%)",
            "radial-gradient(1px 1px at 45% 60%, rgba(255,255,255,0.5) 0%, transparent 100%)",
            "radial-gradient(1px 1px at 88% 75%, rgba(255,255,255,0.3) 0%, transparent 100%)",
            "radial-gradient(1px 1px at 10% 85%, rgba(255,255,255,0.4) 0%, transparent 100%)",
            "radial-gradient(1px 1px at 62% 10%, rgba(255,255,255,0.5) 0%, transparent 100%)",
        ].join(", "),
        pointerEvents: "none",
        zIndex: 0,
    },

    hero: {
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 2rem",
        overflow: "hidden",
        zIndex: 1,
    },
    heroGlow: {
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(192,57,43,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
    },
    heroEyebrow: {
        fontFamily: MONO,
        fontSize: "0.7rem",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: COLORS.redGlow,
        marginBottom: "1.5rem",
    },
    heroTitle: {
        fontFamily: BEBAS,
        fontSize: "clamp(4rem, 12vw, 10rem)",
        lineHeight: 0.9,
        letterSpacing: "0.02em",
        color: COLORS.cream,
        textShadow: "0 0 80px rgba(192,57,43,0.5), 0 0 20px rgba(192,57,43,0.3)",
        margin: 0,
    },
    heroTitleRed: { color: COLORS.redGlow },
    heroSubtitle: {
        marginTop: "2rem",
        fontStyle: "italic",
        fontSize: "1.1rem",
        color: COLORS.muted,
        maxWidth: "520px",
    },
    heroMeta: {
        marginTop: "2.5rem",
        fontFamily: MONO,
        fontSize: "0.65rem",
        letterSpacing: "0.15em",
        color: COLORS.muted,
    },
    scrollHint: {
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
    },

    // Layout
    main: {
        position: "relative",
        zIndex: 1,
        maxWidth: "780px",
        margin: "0 auto",
        padding: "0 2rem 6rem",
    },

    // Each section is now a single column
    section: {
        marginBottom: "5rem",
    },

    // Carousel wrapper sits between h2 and body copy
    carouselWrap: {
        margin: "1.5rem 0 2rem",
    },

    sectionNumber: {
        fontFamily: BEBAS,
        fontSize: "6rem",
        lineHeight: 1,
        color: "rgba(192,57,43,0.08)",
        letterSpacing: "-0.02em",
        userSelect: "none",
        marginBottom: "-1.2rem",
    },
    label: {
        fontFamily: MONO,
        fontSize: "0.65rem",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: COLORS.redGlow,
        marginBottom: "0.75rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    h2: {
        fontFamily: BEBAS,
        fontSize: "clamp(1.8rem, 4vw, 3rem)",
        lineHeight: 1.05,
        letterSpacing: "0.03em",
        color: COLORS.cream,
        marginBottom: 0,
        marginTop: 0,
    },
    p: {
        color: COLORS.text,
        marginBottom: "1.1rem",
        fontSize: "1rem",
        marginTop: 0,
    },
    pullQuote: {
        borderLeft: `3px solid ${COLORS.red}`,
        padding: "1rem 1.25rem",
        margin: "1.5rem 0",
        background: "rgba(192,57,43,0.05)",
        borderRadius: "0 4px 4px 0",
    },
    pullQuoteText: {
        fontStyle: "italic",
        fontSize: "1.05rem",
        color: COLORS.cream,
        margin: 0,
        lineHeight: 1.6,
    },
    tags: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.4rem",
        marginTop: "1.5rem",
    },
    tag: {
        fontFamily: MONO,
        fontSize: "0.58rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "0.25rem 0.65rem",
        border: `1px solid ${COLORS.border}`,
        borderRadius: "2px",
        color: COLORS.muted,
        background: COLORS.card,
    },

    frankEyes: {
        display: "inline-flex",
        gap: "5px",
        verticalAlign: "middle",
        margin: "0 3px",
    },
    frankEye: {
        width: "7px",
        height: "7px",
        borderRadius: "50%",
        background: COLORS.redGlow,
        boxShadow: `0 0 6px ${COLORS.redGlow}`,
    },

    divider: {
        width: "100%",
        height: "1px",
        background: `linear-gradient(to right, transparent, ${COLORS.border}, transparent)`,
        border: "none",
        margin: "0 0 5rem",
    },

    footer: {
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        padding: "3rem 2rem",
        borderTop: `1px solid ${COLORS.border}`,
        fontFamily: MONO,
        fontSize: "0.65rem",
        letterSpacing: "0.15em",
        color: COLORS.muted,
    },
    footerNames: {
        marginTop: "0.75rem",
        color: "rgba(192,57,43,0.6)",
    },
};

// ─── Global CSS ───────────────────────────────────────────────────────────────

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:ital,wght@0,400;0,600;1,400&family=Space+Mono:wght@400;700&display=swap');

  .scroll-hint-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: #888890;
  }

  .scroll-hint-label::after {
    content: '';
    display: block;
    width: 1px;
    height: 40px;
    margin: 0.5rem auto 0;
    background: linear-gradient(to bottom, #c0392b, transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }

  @keyframes frankBlink {
    0%, 90%, 100% { opacity: 1; }
    95%           { opacity: 0.1; }
  }

  span[style*="7px"][style*="border-radius: 50%"] {
    animation: frankBlink 2.5s ease-in-out infinite;
  }
`;