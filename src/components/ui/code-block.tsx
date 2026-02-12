"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-xl border border-surface bg-base overflow-hidden">
      <div className="flex items-center justify-between border-b border-surface px-4 py-2">
        <span className="text-xs font-mono text-subtext">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-subtext hover:text-text transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green" />
              <span className="text-green">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm font-mono leading-relaxed">
        <code>
          {code.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line.startsWith("#") ? (
                <span className="text-subtext">{line}</span>
              ) : line.startsWith("curl") || line.startsWith("git") || line.startsWith("npm") || line.startsWith("cd") || line.startsWith("open") ? (
                <span className="text-green">{line}</span>
              ) : (
                <span className="text-text">{line}</span>
              )}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
