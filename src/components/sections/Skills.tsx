import { SectionHeading, Card } from "@/components/ui/Primitives";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-y border-ink-700 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div id="skills-heading">
          <SectionHeading
            eyebrow="Skills"
            title="What I work with"
            description="Technologies I'm actively learning and using — grouped by how I use them, and backed by real coursework and shipped projects."
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((category) => (
            <Card key={category.title} className="p-7">
              <h3 className="font-display text-lg font-bold text-white">{category.title}</h3>
              <p className="mt-1 text-sm text-mist-500">{category.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    title={item.description}
                    className="rounded-full border border-ink-600 bg-ink-800 px-3.5 py-1.5 text-sm font-medium text-mist-100 transition-colors hover:border-accent-400/60 hover:text-accent-300"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
