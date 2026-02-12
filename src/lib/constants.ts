import {
  GitBranch,
  Terminal,
  Sparkles,
  LayoutDashboard,
  GitPullRequest,
  Command,
} from "lucide-react";

export const REPO_URL = "https://github.com/marckraw/divergence";
export const RELEASES_URL =
  "https://github.com/marckraw/divergence/releases/latest";
export const LICENSE_URL =
  "https://github.com/marckraw/divergence/blob/master/LICENSE";
export const VERSION = "0.9.0";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Install", href: "#install" },
  { label: "GitHub", href: REPO_URL, external: true },
] as const;

export const FEATURES = [
  {
    icon: GitBranch,
    title: "Divergent Workspaces",
    description:
      "Create isolated git clones for every branch. Each workspace gets its own terminal, file tree, and environment.",
  },
  {
    icon: Terminal,
    title: "Embedded Terminals",
    description:
      "Full PTY-backed terminals with split panes, tabs, and session persistence. No more juggling iTerm windows.",
  },
  {
    icon: Sparkles,
    title: "AI Agent Automation",
    description:
      "Run Claude Code, Codex, or any CLI agent in the background. Queue tasks and let AI work across branches.",
  },
  {
    icon: LayoutDashboard,
    title: "Task Center",
    description:
      "Monitor all running agents and automations in real-time. See output, status, and results at a glance.",
  },
  {
    icon: GitPullRequest,
    title: "Diff Review",
    description:
      "AI-powered code review built in. Review changes across divergences before merging back.",
  },
  {
    icon: Command,
    title: "Quick Switcher",
    description:
      "Cmd+K to instantly jump between projects, branches, and terminals. Context-switch in milliseconds.",
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Add Your Projects",
    description:
      "Point Divergence at your local repos. It indexes your branches and sets up the workspace.",
  },
  {
    number: "02",
    title: "Create Divergences",
    description:
      "Spin up isolated clones for any branch. Each gets its own terminal session and working directory.",
  },
  {
    number: "03",
    title: "Run Agents & Build",
    description:
      "Launch AI agents, run builds, and manage tasks. Everything stays organized per branch.",
  },
] as const;

export const KEYBOARD_SHORTCUTS = [
  { keys: ["Cmd", "K"], action: "Quick Switcher" },
  { keys: ["Cmd", "D"], action: "Split Terminal" },
  { keys: ["Cmd", "B"], action: "Toggle Sidebar" },
  { keys: ["Cmd", ","], action: "Settings" },
  { keys: ["Cmd", "W"], action: "Close Terminal" },
  { keys: ["Cmd", "Shift", "B"], action: "Toggle Panel" },
] as const;

export const TECH_STACK = [
  "Tauri 2.0",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Rust",
  "SQLite",
  "xterm.js",
] as const;

export const TERMINAL_LINES = [
  { prompt: true, text: "divergence run claude-code --branch feat/auth" },
  { prompt: false, text: "Creating divergence for feat/auth..." },
  { prompt: false, text: "Cloning repository → ~/.divergence/repos/myapp-feat-auth-a7b3c1/" },
  { prompt: false, text: "Starting Claude Code agent..." },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  ✓ Analyzed 23 files in src/auth/",
    color: "green",
  },
  {
    prompt: false,
    text: "  ✓ Generated JWT middleware",
    color: "green",
  },
  {
    prompt: false,
    text: "  ✓ Added 12 unit tests",
    color: "green",
  },
  {
    prompt: false,
    text: "  ✓ All tests passing",
    color: "green",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "Agent completed. 4 files modified, 12 tests added.",
    color: "blue",
  },
  { prompt: true, text: "" },
] as const;

export const INSTALL_GITHUB = `# Download the latest release
# Visit the releases page and download the .dmg for your architecture

# Apple Silicon (M1/M2/M3/M4)
curl -L -o Divergence.dmg \\
  "${RELEASES_URL}/download/Divergence_aarch64.dmg"

# Intel Mac
curl -L -o Divergence.dmg \\
  "${RELEASES_URL}/download/Divergence_x64.dmg"

# Install
open Divergence.dmg`;

export const INSTALL_SOURCE = `# Clone the repository
git clone ${REPO_URL}.git
cd divergence

# Install dependencies
npm install

# Run in development mode
npm run tauri dev

# Or build for production
npm run tauri build`;
