import type { LucideIcon } from "lucide-react";

export function SectionHeading({
  icon: Icon,
  children,
  className = "mb-12",
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent ${className}`}
    >
      <Icon className="h-4 w-4" strokeWidth={2} />
      {children}
    </h2>
  );
}
