import {
  GitBranch,
  Terminal,
  Sparkles,
  LayoutDashboard,
  Inbox,
  Command,
  GitMerge,
  Code,
} from "lucide-react";

export const REPO_URL = "https://github.com/marckraw/divergence";
export const RELEASES_URL =
  "https://github.com/marckraw/divergence/releases/latest";
export const LICENSE_URL =
  "https://github.com/marckraw/divergence/blob/master/LICENSE";

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
      "Create isolated git worktrees for every branch. Each workspace gets its own terminal sessions, file tree, and environment — fully independent.",
  },
  {
    icon: Terminal,
    title: "Embedded Terminals",
    description:
      "Full PTY-backed terminals with up to 3 split panes, tabs, and TMUX session discovery. Attach to existing sessions or start fresh.",
  },
  {
    icon: Sparkles,
    title: "AI Agent Automation",
    description:
      "Run Claude Code, Codex, or any CLI agent inside isolated workspaces. Queue tasks across branches and let agents work in parallel.",
  },
  {
    icon: LayoutDashboard,
    title: "Task Center",
    description:
      "Monitor all running agents in real-time. Track output, status, Claude usage limits, and results at a glance.",
  },
  {
    icon: Inbox,
    title: "GitHub PR Inbox",
    description:
      "See all open pull requests for your repos in one place. Review, filter, and jump straight to diffs without leaving the app.",
  },
  {
    icon: Command,
    title: "Quick Switcher",
    description:
      "Cmd+K to jump between projects and branches. Cmd+Shift+O to quick-switch files. Context-switch in milliseconds.",
  },
  {
    icon: GitMerge,
    title: "Merge Detection",
    description:
      "Automatically detects when branches have been merged upstream. Prompts you to clean up stale divergences and stay organized.",
  },
  {
    icon: Code,
    title: "Built-in Code Viewer",
    description:
      "CodeMirror-powered syntax highlighting for browsing files directly inside Divergence. Read code without opening a separate editor.",
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Add Your Projects",
    description:
      "Point Divergence at your local repos. It indexes your branches, discovers TMUX sessions, and sets up the workspace.",
  },
  {
    number: "02",
    title: "Create Divergences",
    description:
      "Spin up isolated worktrees for any branch. Each gets its own terminal sessions with up to 3 split panes.",
  },
  {
    number: "03",
    title: "Run Agents & Build",
    description:
      "Launch AI agents, review PRs in the GitHub inbox, and manage tasks. Everything stays organized per branch.",
  },
] as const;

export const KEYBOARD_SHORTCUTS = [
  { keys: ["Cmd", "K"], action: "Quick Switcher" },
  { keys: ["Cmd", "Shift", "O"], action: "File Quick Switcher" },
  { keys: ["Cmd", "T"], action: "New Divergence" },
  { keys: ["Cmd", "D"], action: "Split Vertical" },
  { keys: ["Cmd", "Shift", "D"], action: "Split Horizontal" },
  { keys: ["Cmd", "B"], action: "Toggle Sidebar" },
  { keys: ["Cmd", ","], action: "Settings" },
  { keys: ["Cmd", "W"], action: "Close Terminal" },
  { keys: ["Cmd", "["], action: "Previous Tab" },
  { keys: ["Cmd", "]"], action: "Next Tab" },
  { keys: ["Cmd", "1-9"], action: "Switch to Tab" },
] as const;

export const TECH_STACK = [
  "Tauri 2.0",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Rust",
  "SQLite",
  "xterm.js",
  "CodeMirror",
  "Drizzle ORM",
] as const;

export const TERMINAL_LINES = [
  { prompt: true, text: "divergence start --project myapp" },
  { prompt: false, text: "Scanning branches..." },
  { prompt: false, text: "Found 4 branches, 2 active divergences" },
  { prompt: false, text: "Loading TMUX sessions..." },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u2713 feat/auth-flow — 3 terminals attached",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 fix/dashboard-layout — agent running",
    color: "green",
  },
  { prompt: false, text: "" },
  { prompt: true, text: "divergence create feat/api-v2 --agent claude" },
  { prompt: false, text: "Creating divergence for feat/api-v2..." },
  {
    prompt: false,
    text: "  \u2713 Worktree created, Claude Code agent started",
    color: "green",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u26A0 fix/login-redirect has been merged — clean up?",
    color: "yellow",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "Ready. 3 divergences active, 1 agent running.",
    color: "blue",
  },
  { prompt: true, text: "" },
] as const;

export function getInstallGithub(aarch64Url: string | null, x64Url: string | null) {
  const aarch64 = aarch64Url ?? `${RELEASES_URL}/download/Divergence_aarch64.dmg`;
  const x64 = x64Url ?? `${RELEASES_URL}/download/Divergence_x64.dmg`;

  return `# Download the latest release

# Apple Silicon (M1/M2/M3/M4)
curl -L -o Divergence.dmg \\
  "${aarch64}"

# Intel Mac
curl -L -o Divergence.dmg \\
  "${x64}"

# Install
open Divergence.dmg`;
}

export const INSTALL_SOURCE = `# Clone the repository
git clone ${REPO_URL}.git
cd divergence

# Install dependencies
npm install

# Run in development mode
npm run tauri dev

# Or build for production
npm run tauri build`;
