"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import headshot from "@/assets/headshot.jpg";
import { profile } from "@/data/profile";
import { GradientBackdrop } from "./GradientBackdrop";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <GradientBackdrop />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col items-start gap-6"
      >
        <motion.div variants={item}>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-white/15 shadow-[0_0_50px_rgba(45,212,191,0.2)]"
          >
            <Image
              src={headshot}
              alt={profile.name}
              fill
              sizes="112px"
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to new opportunities · {profile.location}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted">
            {profile.workAuthorization} · {profile.availability}
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="text-xl font-medium text-accent sm:text-2xl">
          {profile.title}
        </motion.p>

        <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Get in touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
