import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";

const sections = [
  { id: "problem", label: "The Problem" },
  { id: "patterns", label: "Patterns" },
  { id: "amp", label: "Why Amp" },
  { id: "workflow", label: "Workflow" },
  { id: "layup", label: "Why Layup" },
  { id: "technical", label: "Technical" },
  { id: "about", label: "About" },
];

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    // <nav className="fixed left-[calc(50%-384px)] top-1/2 z-50 hidden w-56 -translate-y-1/2 flex-col bg-background/80 p-6 backdrop-blur-sm lg:flex">
    <nav className="fixed left-[calc(50%-448px)] top-1/2 z-50 hidden w-56 -translate-y-1/2 flex-col bg-background/80 p-6 backdrop-blur-sm lg:flex">
      <div className="flex flex-col gap-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {activeId === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 rounded-md bg-secondary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{section.label}</span>
          </a>
        ))}
      </div>

      <button
        onClick={toggleTheme}
        className="mt-4 rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground w-max"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </nav>
  );
}

export function MobileNav() {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(sections.map((s) => s.id));

  return (
    <nav className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-background/80 px-4 py-2 backdrop-blur-sm lg:hidden ring-1 ring-foreground/5 shadow-xs">
      <div className="flex gap-2 overflow-x-auto">
        {sections.slice(0, 4).map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`relative whitespace-nowrap rounded-full px-3 py-1 text-xs transition-colors ${
              activeId === section.id
                ? "bg-secondary text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
      <button
        onClick={toggleTheme}
        className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </nav>
  );
}
