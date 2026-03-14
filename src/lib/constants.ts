import {
  GitBranch,
  Terminal,
  Sparkles,
  Cpu,
  LayoutDashboard,
  GitPullRequest,
  Command,
  Globe,
  Bug,
  ListOrdered,
  ListChecks,
  Smartphone,
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
      "Create branch-isolated git clones without touching your base repo. Creation is queued instantly so the UI never blocks — keep working while clones prepare in the background. Use per-project divergences or workspace-level divergences across repos.",
  },
  {
    icon: Terminal,
    title: "Embedded Terminals",
    description:
      "Full PTY-backed terminals with tabs, draggable split-pane resizing up to 4 panes, and fast tmux attach with timeout-guarded discovery. Send prompts and Linear issues directly to the focused pane — routing stays correct even after closing and re-adding splits. Split pane identities are stable across hydration cycles: tmux session targeting stays accurate even when agent sessions are lazily loaded, so the correct pane is always targeted regardless of app restarts. Tabs persist across restarts and highlight when a background command goes idle. Kill sessions reliably from the sidebar Tmux Panel — actions target the correct tmux server, the panel updates instantly, and cleanly exited sessions stay closed instead of auto-reconnecting.",
  },
  {
    icon: Cpu,
    title: "Multi-Provider Agent Runtime",
    description:
      "A unified provider registry runs Claude, Codex, Cursor, and Gemini side by side — each through its own adapter that normalizes output into a canonical event contract. Sessions load lazily on startup: only lightweight metadata is fetched initially for fast app initialization, with full transcripts hydrated on demand the moment you open a session. Sessions that were open when you last closed the app are pre-hydrated automatically. Sessions persist across restarts and render as structured chat and work-log UI with a virtualized timeline for smooth performance across long sessions. Adjacent tool activities are automatically grouped and summarized in the timeline — consecutive reads, edits, or commands collapse into groups like 'Read 3 files' or 'Ran 5 commands', keeping long sessions scannable without losing any detail. Expand any group to inspect individual steps with kind badge, subject, and status. Session titles are generated automatically from the first message and can be renamed manually at any time. Switch to Plan Mode per-turn so agents reason before acting. Session attention indicators give instant visual feedback — pulsing badges surface approval-required, awaiting-input, and working states; static badges surface error, plan-ready, and completed states — so you always know what every session needs at a glance. Attention states are preserved faithfully during lazy hydration: sessions that were in a plan-ready state when you closed the app re-surface with the correct badge immediately on startup, before the full transcript loads — so approval-required moments are never silently dropped. Codex sessions display a real-time context window indicator in the session header — a live progress bar showing how much of the context has been used, color-coded green (under 75%), yellow (75–90%), and red (90%+) so you always know when you're approaching limits. Attachments are provider-gated: Claude and Codex accept images; Gemini accepts images and PDFs; Cursor has no attachment support. Attach files via file picker, clipboard paste, or drag-and-drop. Choose from a range of Claude model tiers — default (tier-based), Haiku, or Opus — with pinned version options for reproducibility. Add custom model slugs per provider in Settings to use any model alongside the built-in options; custom and detected models are merged and deduplicated automatically. Composer drafts are debounced and persisted automatically. Sticky follow-scroll keeps the conversation anchored to new messages without jarring jumps. Real-time session telemetry tracks the current execution phase, elapsed turn time, and last event — with a slow-turn warning when the agent goes quiet for 10+ seconds. An expandable runtime debug panel surfaces all captured events with phase labels, relative timing, and details. Provider auth stays inside each official CLI process; Divergence never touches credentials.",
  },
  {
    icon: Sparkles,
    title: "Agent Automations",
    description:
      "Trigger any registered provider — Claude, Codex, Cursor, or Gemini — manually, on a schedule, or automatically when a GitHub PR merges, even across repositories. Each automation run links back to a persisted agent session so Task Center and restart reconciliation can reattach to the same structured session.",
  },
  {
    icon: LayoutDashboard,
    title: "Task Center",
    description:
      "Track run status, output tails, retries, and inspect phases in real time. Completed automation runs are restored from the database on startup — your full history is visible across app reloads without re-running anything. Agent session timelines surface structured turns, tool activity, and pending approval requests directly in the UI. Consecutive tool activities are intelligently grouped by type — reads, edits, commands, searches — and shown as compact summaries ('Read 3 files', 'Ran 5 commands') that expand to reveal individual steps with kind badges and subjects. Queue prompts per project and send them straight to the active terminal or agent session.",
  },
  {
    icon: GitPullRequest,
    title: "GitHub PR Hub",
    description:
      "Review, merge, and talk to your pull requests without leaving the app. Open any PR in a dedicated Review Divergence — a one-click flow that creates an isolated git clone of the PR branch, launches an agent session pre-loaded with PR context, and auto-starts a structured review prompt covering correctness, potential regressions, edge cases, and test coverage — so the agent gets to work immediately. Merge conflict detection surfaces a red badge on any PR with conflicts and disables the merge button with a clear explanation. The built-in chat sidebar lets you ask Claude, Codex, Cursor, or Gemini about code changes, risks, and intent with full PR-aware context — including metadata, descriptions, and patches. A structured diff tree groups changed files by directory with per-file and per-directory addition and deletion counts. Send with Cmd+Enter.",
  },
  {
    icon: Command,
    title: "Quick Switcher",
    description:
      "Cmd+K to jump between projects, branches, and agent sessions. Cmd+Shift+O to quick-switch files. Context-switch in milliseconds.",
  },
  {
    icon: Globe,
    title: "Port Routing + Local URLs",
    description:
      "Auto-allocate dev ports with real availability checks, detect frameworks, and expose local hostnames like branch.project.divergence.localhost. Configure port ranges per workspace.",
  },
  {
    icon: Bug,
    title: "Debug Console",
    description:
      "In-app diagnostics with filters, failure-focused views, and an event inspection modal. Drill into agent session events, automation run phases, errors, and metadata in full detail.",
  },
  {
    icon: ListOrdered,
    title: "Prompt Queue",
    description:
      "Queue prompts per project or workspace and send them to the active terminal with one click. Persisted via Drizzle ORM in SQLite with type-safe queries — your queue survives restarts.",
  },
  {
    icon: ListChecks,
    title: "Linear Task Queue",
    description:
      "Browse your Linear project issues in a dedicated panel. Filter by seven status categories — open, todo, in progress, completed, and more. Search across identifier, title, description, assignee, and state. Update issue states directly without leaving Divergence. Color-coded badges give instant visual status with deterministic sort order. Issues load once per context with manual refresh — no distracting re-fetches from terminal activity. Send any issue as a structured prompt straight to the active terminal.",
  },
  {
    icon: Smartphone,
    title: "Mobile Companion",
    description:
      "Pair your phone over the local network with automatic mDNS discovery and a 6-digit pairing code. Sessions use parameterized queries and audited storage. Browse projects, monitor automations, capture terminal output, send commands, and manage the prompt queue — all from your mobile device. Push notifications alert you when automation runs finish.",
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
      "Queue branch-isolated clones instantly — the dialog closes and you keep working while clones set up with automatic port allocation and framework-aware environment variables.",
  },
  {
    number: "03",
    title: "Run Agents & Build",
    description:
      "Run agents manually, on a schedule, or via cross-repo PR merge triggers. Choose from Claude, Codex, Cursor, or Gemini — sessions persist across restarts with structured timeline UI. Chat with your PRs, review and merge from the PR Hub, and track everything in Task Center.",
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
  { keys: ["Shift", "Tab"], action: "Toggle Plan Mode in Composer" },
  { keys: ["Cmd", "Enter"], action: "Send in PR Chat" },
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
  "WebSocket",
  "mDNS",
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

# Use the repo-pinned Node.js version (Node 24.14.0 — see .nvmrc)
fnm use

# Install dependencies
npm install

# Run in development mode
npm run tauri dev

# Or build for production
npm run tauri build`;
