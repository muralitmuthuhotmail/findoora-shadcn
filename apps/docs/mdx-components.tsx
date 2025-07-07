import type { MDXComponents } from 'mdx/types';
import { ReactNode } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="text-4xl font-bold mb-6 mt-0 border-b border-border pb-4">{children}</h1>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-8 border-b border-border/60 pb-2">{children}</h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6">{children}</h3>
    ),
    h4: ({ children }: { children: ReactNode }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4">{children}</h4>
    ),
    p: ({ children }: { children: ReactNode }) => (
      <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="mb-4 ml-6 list-disc space-y-1">{children}</ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-1">{children}</ol>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <li className="text-muted-foreground">{children}</li>
    ),
    code: ({ children }: { children: ReactNode }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    pre: ({ children }: { children: ReactNode }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 border">{children}</pre>
    ),
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="border-l-4 border-border pl-4 italic my-4 text-muted-foreground">{children}</blockquote>
    ),
    a: ({ children, href }: { children: ReactNode; href?: string }) => (
      <a href={href} className="text-primary hover:text-primary/80 underline underline-offset-4">
        {children}
      </a>
    ),
    ...components,
  };
}
