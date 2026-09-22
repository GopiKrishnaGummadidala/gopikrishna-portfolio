import { Briefcase } from "lucide-react";
import { experience } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <SectionHeading icon={Briefcase}>Experience</SectionHeading>
      </ScrollReveal>

      <div className="relative space-y-12 border-l border-white/10 pl-8">
        {experience.map((job, i) => (
          <ScrollReveal key={job.company} delay={i * 0.05} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
              <span className="text-sm text-muted">{job.period}</span>
            </div>
            <div className="mt-0.5 text-sm font-medium text-accent">{job.company}</div>
            <div className="text-sm text-muted">
              {job.location}
              {job.context && ` · ${job.context}`}
            </div>
            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
