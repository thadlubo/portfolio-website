import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Music,
  Activity,
  Guitar,
  Brush,
  Coffee,
  Braces,
  FileCode,
  Component,
  Boxes,
  Layers,
  Paintbrush,
  Database,
  Server,
  Workflow,
  GitBranch,
  Figma,
  ImageIcon,
  Terminal,
  Mic2,
  Hand,
  Dribbble,
  Camera,
  Video,
} from "lucide-react";

export default function TechStack() {
  return (
    <main className="z-0 min-h-screen">
      <motion.section className="min-h-screen flex items-center relative py-10">
        <div className="z-0 absolute inset-0 bg-gradient-to-b from-transparent to-pistachio-mint" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6 text-pistachio-dark font-bold">
              Tech Stack & Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The tools and technologies that power my creative development
              journey
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* FRONTEND */}
            <TechColumn
              title="FRONTEND"
              delay={0.1}
              items={[
                { name: "JavaScript", color: "bg-cream", text: "text-foreground", icon: Braces },
                { name: "TypeScript", color: "bg-pistachio-mint", text: "text-foreground", icon: FileCode },
                { name: "React", color: "bg-pistachio-medium", text: "text-foreground", icon: Component },
                { name: "Next.Js", color: "bg-cream-soft", text: "text-foreground", icon: Layers },
                { name: "Redux", color: "bg-pistachio-saturated", text: "text-foreground", icon: Boxes },
                { name: "Tailwind CSS", color: "bg-pistachio-light", text: "text-foreground", icon: Paintbrush },
                { name: "Framer Motion", color: "bg-pistachio-dark", text: "text-primary-foreground", icon: Activity },
                { name: "Sass", color: "bg-cream", text: "text-foreground", icon: Palette },
                { name: "Bootstrap", color: "bg-pistachio-shell", text: "text-white", icon: Code },
              ]}
            />

            {/* BACKEND */}
            <TechColumn
              title="BACKEND"
              delay={0.2}
              items={[
                { name: "Node.Js", color: "bg-pistachio-dark", text: "text-primary-foreground", icon: Server },
                { name: "NestJS", color: "bg-cream", text: "text-foreground", icon: Boxes },
                { name: "Express.Js", color: "bg-pistachio-shell", text: "text-white", icon: Workflow },
              ]}
            />

            {/* DATABASE */}
            <TechColumn
              title="DATABASE"
              delay={0.3}
              items={[
                { name: "MySQL", color: "bg-pistachio-medium", text: "text-foreground", icon: Database },
                { name: "PostgreSQL", color: "bg-pistachio-dark", text: "text-primary-foreground", icon: Database },
                { name: "MongoDB", color: "bg-pistachio-saturated", text: "text-foreground", icon: Database },
              ]}
            />

            {/* TOOLS */}
            <TechColumn
              title="TOOLS"
              delay={0.4}
              items={[
                { name: "Git", color: "bg-cream", text: "text-foreground", icon: GitBranch },
                { name: "Figma", color: "bg-pistachio-soft", text: "text-foreground", icon: Figma },
                { name: "Photoshop", color: "bg-cream-soft", text: "text-foreground", icon: ImageIcon },
                { name: "GIMP", color: "bg-pistachio-shell", text: "text-white", icon: Palette },
                { name: "VS Code", color: "bg-pistachio-dark", text: "text-primary-foreground", icon: Terminal },
              ]}
            />

            {/* LIFE */}
            <TechColumn
              title="LIFE"
              delay={0.5}
              items={[
                { name: "Guitar", color: "bg-pistachio-saturated", text: "text-foreground", icon: Guitar },
                { name: "Singing", color: "bg-cream", text: "text-foreground", icon: Mic2 },
                { name: "Skateboarding", color: "bg-pistachio-shell", text: "text-white", icon: Activity },
                { name: "Drawing", color: "bg-pistachio-light", text: "text-foreground", icon: Brush },
                { name: "Boxing", color: "bg-pistachio-dark", text: "text-primary-foreground", icon: Hand },
                { name: "Basketball", color: "bg-cream", text: "text-foreground", icon: Dribbble },
                { name: "Dancing", color: "bg-pistachio-soft", text: "text-foreground", icon: Music },
                { name: "Photography", color: "bg-pistachio-medium", text: "text-foreground", icon: Camera },
                { name: "Videography", color: "bg-cream-soft", text: "text-foreground", icon: Video },
              ]}
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function TechColumn({
  title,
  items,
  delay,
}: {
  title: string;
  items: { name: string; color: string; text: string; icon: any }[];
  delay: number;
}) {
  return (
    <motion.div
      className="space-y-8"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl text-muted-foreground tracking-tight font-semibold">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`inline-flex items-center gap-3 px-4 py-2 ${tech.color} ${tech.text} font-medium text-sm rounded-lg shadow-lg`}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: delay + index * 0.05,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <tech.icon className="w-4 h-4" />
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
