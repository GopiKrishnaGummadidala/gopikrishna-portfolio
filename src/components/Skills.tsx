import { skillGroups } from "@/data/profile";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-accent">Skills</h2>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <ScrollReveal key={group.label} delay={i * 0.05}>
            <h3 className="mb-3 text-sm font-medium text-foreground">{group.label}</h3>
            <ScrollRevealGroup className="flex flex-wrap gap-2" stagger={0.03}>
              {group.skills.map((skill) => (
                <ScrollRevealItem key={skill}>
                  <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground">
                    {skill}
                  </span>
                </ScrollRevealItem>
              ))}
            </ScrollRevealGroup>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
