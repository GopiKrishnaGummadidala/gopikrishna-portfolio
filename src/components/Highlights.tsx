import { highlights } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

export function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-accent">Highlights</h2>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {highlights.map((highlight, i) => (
          <ScrollReveal key={highlight.title} delay={i * 0.06}>
            <TiltCard className="h-full p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                <span className="shrink-0 text-xs text-muted">{highlight.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{highlight.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {highlight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
