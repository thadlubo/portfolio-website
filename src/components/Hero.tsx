import "../style.css";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxText({
    children,
    speed,
    className,
    style = {},
}: {
    children: string;
    speed: number;
    className: string;
    style?: React.CSSProperties | any;
}) {
    const { scrollY } = useScroll();
    const x = useTransform(scrollY, [0, 1000], [0, speed]);
    return (
        <motion.div className={className} style={{ ...style, x }}>
            {children}
        </motion.div>
    );
}

export default function Parallax() {

    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "100%"]);

    return (
        <section className="parallax-container relative" id="parallax">

            {/* Foreground top text */}
            <ParallaxText speed={-1100} className="parallax-text top-text-dev absolute"
                style={{
                    width: "750px", // Set your desired width
                    height: "750px", // Set your desired height
                    y: backgroundY, // If you want to animate, make sure backgroundY is defined
                }}>
                FRONTEND
            </ParallaxText>

            {/* Foreground top text */}
            <ParallaxText speed={-1100} className="parallax-text top-text-designer absolute top-10"
                style={{
                    width: "750px", // Set your desired width
                    height: "750px", // Set your desired height
                    y: backgroundY, // If you want to animate, make sure backgroundY is defined
                }}>
                UI/UX
            </ParallaxText>

            {/* Parallax Image */}
            <motion.div
                className="absolute bottom-0 z-0"
                style={{
                    width: "900px", // Set your desired width
                    height: "900px", // Set your desired height
                    transform: "translateX(-50%)", // Center horizontally
                    backgroundImage: `url(${import.meta.env.BASE_URL}noBgProfilePic.png)`,
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain", // Make image fit inside box
                    y: backgroundY, // If you want to animate, make sure backgroundY is defined
                }}
                aria-hidden="true"
            />

            {/* Background bottom text */}
            <ParallaxText speed={1100} className="parallax-text bottom-text-designer absolute bottom-10"
                style={{
                    width: "750px", // Set your desired width
                    height: "750px", // Set your desired height
                    y: backgroundY, // If you want to animate, make sure backgroundY is defined
                }}>
                DESIGNER
            </ParallaxText>

            {/* Background bottom text */}
            <ParallaxText speed={1100} className="parallax-text bottom-text-dev absolute bottom-10"
                style={{
                    width: "750px", // Set your desired width
                    height: "750px", // Set your desired height
                    y: backgroundY, // If you want to animate, make sure backgroundY is defined
                }}>
                DEV
            </ParallaxText>
        </section>
    );
}