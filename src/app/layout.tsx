import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divergence — One Desktop. Every Branch. All Your Agents.",
  description:
    "A native desktop app for managing multiple projects and branches with embedded terminals, AI agent automation, and cross-repo PR-triggered workflows. Built with Tauri, React, and Rust.",
  openGraph: {
    title: "Divergence — One Desktop. Every Branch. All Your Agents.",
    description:
      "A native desktop app for managing multiple projects and branches with embedded terminals, AI agent automation, and cross-repo workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
