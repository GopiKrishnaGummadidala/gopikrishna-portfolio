import {
  Cloud,
  Database,
  FlaskConical,
  Layers,
  MonitorSmartphone,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/profile";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

const groupIcons: Record<string, LucideIcon> = {
  Frontend: MonitorSmartphone,
  Backend: Server,
  Data: Database,
  "Cloud & DevOps": Cloud,
  "AI & Integration": Sparkles,
  Testing: FlaskConical,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-28">
      <ScrollReveal>
        <SectionHeading icon={Layers}>Skills</SectionHeading>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const GroupIcon = groupIcons[group.label] ?? Layers;
          return (
            <ScrollReveal key={group.label} delay={i * 0.05}>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                <GroupIcon className="h-4 w-4 text-accent" strokeWidth={2} />
                {group.label}
              </h3>
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
          );
        })}
      </div>
    </section>
  );
}
