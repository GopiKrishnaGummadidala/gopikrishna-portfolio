"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#highlights", label: "Highlights" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-lg">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-foreground">
          GG<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  );
}
