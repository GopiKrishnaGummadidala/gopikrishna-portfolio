import { Award, Bot, Clock, User, Zap, type LucideIcon } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

const statIcons: LucideIcon[] = [Clock, Bot, Zap, Award];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <SectionHeading icon={User} className="mb-6">
          About
        </SectionHeading>
        <p className="text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
          {profile.summary}
        </p>
      </ScrollReveal>

      <ScrollRevealGroup className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = statIcons[i] ?? Award;
          return (
            <ScrollRevealItem
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/30"
            >
              <Icon className="h-5 w-5 text-accent" strokeWidth={2} />
              <div className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </ScrollRevealItem>
          );
        })}
      </ScrollRevealGroup>
    </section>
  );
}
