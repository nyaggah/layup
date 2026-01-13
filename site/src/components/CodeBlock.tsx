interface CodeBlockProps {
  children: string;
  title?: string;
}

export function CodeBlock({ children, title }: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="border-b border-border bg-secondary/50 px-4 py-2">
          <span className="font-mono text-xs text-muted-foreground">
            {title}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm text-muted-foreground">
          {children}
        </code>
      </pre>
    </div>
  );
}
