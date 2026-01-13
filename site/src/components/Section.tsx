import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 pt-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 text-2xl font-semibold tracking-tight">{children}</h2>
  );
}

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 mt-8 text-lg font-medium text-foreground">
      {children}
    </h3>
  );
}

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="font-medium text-foreground">{children}</span>;
}

export function Quote({
  children,
  author,
}: {
  children: ReactNode;
  author?: ReactNode;
}) {
  return (
    <blockquote className="my-6 border-l-2 border-primary pl-4">
      <p className="italic text-muted-foreground">{children}</p>
      {author && (
        <cite className="mt-2 block text-sm text-muted-foreground/70">
          — {author}
        </cite>
      )}
    </blockquote>
  );
}
