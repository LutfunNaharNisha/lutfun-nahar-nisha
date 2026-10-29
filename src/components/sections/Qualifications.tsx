import { GraduationCap, Briefcase } from "lucide-react";
import { SectionHeading, Card, TechBadge } from "@/components/ui/Primitives";
import { education, experience } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div id="education-heading">
        <SectionHeading
          eyebrow="Education"
          title="Learning, structured"
          description="Formal learning and the focused full-stack program I'm completing now."
        />
      </div>
      <ol className="relative mt-10 space-y-6 before:absolute before:bottom-4 before:left-[27px] before:top-4 before:w-px before:bg-ink-700">
        {education.map((entry) => (
          <li key={`${entry.institution}-${entry.qualification}`} className="relative pl-16">
            <span
              aria-hidden="true"
              className="absolute left-4 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-accent-400/40 bg-ink-900"
            >
              <GraduationCap size={15} className="text-accent-400" />
            </span>
            <Card className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-bold text-white">{entry.institution}</h3>
                <span className="text-xs font-semibold text-accent-300">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-mist-100">{entry.qualification}</p>
              {entry.subject ? <p className="mt-1 text-sm text-mist-500">{entry.subject}</p> : null}
              <p className="mt-3 inline-block rounded-full bg-accent-400/10 px-3 py-1 text-xs font-semibold text-accent-300">
                {entry.status}
              </p>
              {entry.achievements && entry.achievements.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-mist-300">
                  {entry.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              ) : null}
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-y border-ink-700 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div id="experience-heading">
          <SectionHeading
            eyebrow="Experience"
            title="Eight years shipping software — now from the code side"
            description="My professional background is delivery leadership; my engineering journey is documented through shipped coursework and personal projects."
          />
        </div>
        <ol className="relative mt-10 space-y-6 before:absolute before:bottom-4 before:left-[27px] before:top-4 before:w-px before:bg-ink-700">
          {experience.map((entry) => (
            <li key={`${entry.organization}-${entry.title}`} className="relative pl-16">
              <span
                aria-hidden="true"
                className="absolute left-4 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-accent-400/40 bg-ink-950"
              >
                <Briefcase size={15} className="text-accent-400" />
              </span>
              <Card className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-white">
                    {entry.title} · {entry.organization}
                  </h3>
                  <span className="text-xs font-semibold text-accent-300">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm text-mist-500">
                  {entry.employmentType}
                  {entry.location ? ` · ${entry.location}` : ""}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mist-300">{entry.summary}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-mist-300">
                  {entry.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.technologies.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
