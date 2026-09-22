import { Download, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-28 text-center">
      <ScrollReveal>
        <SectionHeading icon={MessageCircle} className="mb-4 justify-center">
          Contact
        </SectionHeading>
        <h3 className="text-3xl font-semibold text-foreground sm:text-4xl">Let&apos;s build something.</h3>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Open to full-stack and AI-engineering roles. The fastest way to reach me is email.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
            {profile.email}
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a href={profile.resumeUrl} download className="flex items-center gap-1.5 hover:text-foreground">
            <Download className="h-4 w-4" strokeWidth={2} />
            Download CV
          </a>
        </div>
      </ScrollReveal>

      <footer className="mt-24 border-t border-white/10 pt-8 text-xs text-muted">
        © {year} {profile.name}. Built with Next.js, Tailwind, and Framer Motion.
      </footer>
    </section>
  );
}
