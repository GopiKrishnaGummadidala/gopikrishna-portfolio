import { profile, stats } from "@/data/profile";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">About</h2>
        <p className="text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
          {profile.summary}
        </p>
      </ScrollReveal>

      <ScrollRevealGroup className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <ScrollRevealItem
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/30"
          >
            <div className="text-2xl font-semibold text-foreground sm:text-3xl">{stat.value}</div>
            <div className="mt-1 text-sm text-muted">{stat.label}</div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealGroup>
    </section>
  );
}
