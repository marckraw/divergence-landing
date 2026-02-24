import {
  GitBranch,
  Terminal,
  Sparkles,
  LayoutDashboard,
  Inbox,
  Command,
  Globe,
  Bug,
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
    title: "Isolated Divergences",
    description:
      "Create branch-isolated git clones without touching your base repo. Use per-project divergences or workspace-level divergences across repos.",
  },
  {
    icon: Terminal,
    title: "Embedded Terminals",
    description:
      "Full PTY-backed terminals with tabs, tmux discovery, and up to 3 split panes. Reconnect stalled sessions in one click.",
  },
  {
    icon: Sparkles,
    title: "Agent Automations",
    description:
      "Run Claude Code or Codex in branch-isolated environments. Trigger runs manually, on a schedule, or automatically when a GitHub PR merges — even across repositories.",
  },
  {
    icon: LayoutDashboard,
    title: "Task Center + Usage Limits",
    description:
      "Track run status, output tails, retries, and inspect phases in real time. Monitor Claude and Codex usage windows from the same workflow.",
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
    icon: Globe,
    title: "Port Routing + Local URLs",
    description:
      "Auto-allocate dev ports, detect frameworks, and expose local hostnames like branch.project.divergence.localhost.",
  },
  {
    icon: Bug,
    title: "Debug Console",
    description:
      "In-app diagnostics with filters, failure-focused views, and an event inspection modal. Drill into automation events, errors, and metadata in full detail.",
  },
] as const;

export const STEPS = [
  {
    number: "01",
    title: "Add Your Projects",
    description:
      "Point Divergence at your local repos. It indexes branches, discovers tmux sessions, and loads project settings.",
  },
  {
    number: "02",
    title: "Create Divergences",
    description:
      "Create branch-isolated clones with automatic port allocation and framework-aware environment variables.",
  },
  {
    number: "03",
    title: "Run Agents & Build",
    description:
      "Run agents manually, on a schedule, or via cross-repo PR merge triggers. Review GitHub updates in the inbox and track everything in Task Center.",
  },
] as const;

export const KEYBOARD_SHORTCUTS = [
  { keys: ["Cmd", "K"], action: "Quick Switcher" },
  { keys: ["Cmd", "Shift", "O"], action: "File Quick Switcher" },
  { keys: ["Cmd", "I"], action: "Open Inbox" },
  { keys: ["Cmd", "T"], action: "New Divergence" },
  { keys: ["Cmd", "D"], action: "Split Vertical" },
  { keys: ["Cmd", "Shift", "D"], action: "Split Horizontal" },
  { keys: ["Cmd", "Shift", "R"], action: "Reconnect Terminal" },
  { keys: ["Cmd", "B"], action: "Toggle Sidebar" },
  { keys: ["Cmd", "Shift", "B"], action: "Toggle Right Panel" },
  { keys: ["Cmd", ","], action: "Settings" },
  { keys: ["Cmd", "W"], action: "Close Active Session" },
  { keys: ["Cmd", "["], action: "Focus Previous Pane" },
  { keys: ["Cmd", "]"], action: "Focus Next Pane" },
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
  "Caddy",
] as const;

export const TERMINAL_LINES = [
  { prompt: true, text: "divergence start --project myapp" },
  { prompt: false, text: "Scanning branches..." },
  { prompt: false, text: "Found 4 branches, 2 active divergences" },
  { prompt: false, text: "Loading TMUX sessions..." },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u2713 feat/auth-flow - port 3142 (nextjs)",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 fix/dashboard-layout - agent running",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 fix-dashboard-layout.myapp.divergence.localhost",
    color: "blue",
  },
  { prompt: false, text: "" },
  { prompt: true, text: "divergence create feat/api-v2 --agent claude" },
  { prompt: false, text: "Creating divergence clone for feat/api-v2..." },
  {
    prompt: false,
    text: "  \u2713 Clone ready, Claude Code agent started, port 3143 assigned",
    color: "green",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u26A0 fix/login-redirect has been merged - clean up?",
    color: "yellow",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u2713 PR #126 merged on marckraw/divergence → triggered automation on divergence-landing",
    color: "green",
  },
  {
    prompt: false,
    text: "  Queued cloud events: 1",
    color: "blue",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "Ready. 3 divergences active, 2 agents running, 3 URLs routed.",
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
