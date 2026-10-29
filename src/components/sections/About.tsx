import { Code2, HeartHandshake, Rocket, Trophy } from "lucide-react";
import { SectionHeading, Card } from "@/components/ui/Primitives";

const pillars = [
  {
    icon: Code2,
    title: "What I enjoy building",
    body: "Responsive interfaces, genuinely useful web apps, and well-structured frontend systems — the kind of UI that feels calm because the code underneath is tidy.",
  },
  {
    icon: HeartHandshake,
    title: "My development philosophy",
    body: "Clean, maintainable code. Intuitive, accessible experiences. Learn continuously, solve problems systematically, and never trade design quality for speed — or vice versa.",
  },
  {
    icon: Rocket,
    title: "How I'm learning",
    body: "Through Programming Hero: TypeScript, React, and Node.js — shipping a real project every module, reviewing code, and practicing AI-assisted workflows deliberately.",
  },
  {
    icon: Trophy,
    title: "Beyond the screen",
    body: "I follow football, enjoy time with family in Jessore, and care about technology that makes everyday life in Bangladesh a little easier — like checking bazar prices.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div id="about-heading">
        <SectionHeading
          eyebrow="About me"
          title="Project manager turning builder"
          description="After 8+ years managing software products and working alongside developers, I decided to learn to build from the inside. Here's what drives me."
        />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="p-7">
          <h3 className="font-display text-lg font-bold text-white">My programming journey</h3>
          <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-mist-300">
            <p>
              For years I sat on the delivery side of the table — planning sprints, unblocking
              developers, and shipping products with Jira, Notion, and Figma. I understood what
              good software <em>management</em> looked like, but I wanted to understand what
              good software <em>felt like to build</em>.
            </p>
            <p>
              So I joined Programming Hero and started from the foundations: HTML, CSS,
              JavaScript — then TypeScript, React, and Node.js. Every module ends with a
              shipped project, and each one teaches me something the tutorials never could:
              how to debug at midnight, how to read an error message properly, how to break a
              big feature into small committable steps.
            </p>
            <p>
              My PM background turns out to be a superpower: I plan before I code, I write
              commits like status updates, and I genuinely enjoy the unglamorous work —
              accessibility checks, empty states, honest error handling.
            </p>
          </div>
        </Card>

        <div className="grid gap-6 sm:grid-cols-1">
          {pillars.slice(0, 2).map((p) => (
            <Card key={p.title} className="p-6 transition-colors hover:border-accent-400/40">
              <p.icon size={22} aria-hidden="true" className="text-accent-400" />
              <h3 className="mt-3 font-display text-base font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-300">{p.body}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {pillars.slice(2).map((p) => (
          <Card key={p.title} className="p-6 transition-colors hover:border-accent-400/40">
            <p.icon size={22} aria-hidden="true" className="text-accent-400" />
            <h3 className="mt-3 font-display text-base font-bold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-300">{p.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
