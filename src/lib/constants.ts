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
      "Full PTY-backed terminals with tabs, draggable split-pane resizing up to 4 panes, and fast tmux attach with timeout-guarded discovery. Send prompts and Linear issues directly to the focused pane — routing stays correct even after closing and re-adding splits. Tabs persist across restarts and highlight when a background command goes idle. Kill sessions reliably from the sidebar Tmux Panel — actions target the correct tmux server, the panel updates instantly, and cleanly exited sessions stay closed instead of auto-reconnecting.",
  },
  {
    icon: Cpu,
    title: "Multi-Provider Agent Runtime",
    description:
      "A unified provider registry runs Claude, Codex, Cursor, and Gemini side by side — each through its own adapter that normalizes output into a canonical event contract. Sessions persist across restarts and render as structured chat and work-log UI with a virtualized timeline for smooth performance across long sessions. Session titles are generated automatically from the first message and can be renamed manually at any time. Switch to Plan Mode per-turn so agents reason before acting. Codex sessions display a real-time context window indicator in the session header — a live progress bar showing how much of the context has been used, color-coded green (under 75%), yellow (75–90%), and red (90%+) so you always know when you're approaching limits. Attachments are provider-gated: Claude and Codex accept images; Gemini accepts images and PDFs; Cursor has no attachment support. Attach files via file picker, clipboard paste, or drag-and-drop. Choose from a range of Claude model tiers — default (tier-based), Haiku, or Opus — with pinned version options for reproducibility. Composer drafts are debounced and persisted automatically. Sticky follow-scroll keeps the conversation anchored to new messages without jarring jumps. Real-time session telemetry tracks the current execution phase, elapsed turn time, and last event — with a slow-turn warning when the agent goes quiet for 10+ seconds. An expandable runtime debug panel surfaces all captured events with phase labels, relative timing, and details. Provider auth stays inside each official CLI process; Divergence never touches credentials.",
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
      "Track run status, output tails, retries, and inspect phases in real time. Agent session timelines surface structured turns, tool activity, and pending approval requests directly in the UI. Queue prompts per project and send them straight to the active terminal or agent session.",
  },
  {
    icon: GitPullRequest,
    title: "GitHub PR Hub",
    description:
      "Review, merge, and talk to your pull requests without leaving the app. Merge conflict detection surfaces a red badge on any PR with conflicts and disables the merge button with a clear explanation. The built-in chat sidebar lets you ask Claude, Codex, Cursor, or Gemini about code changes, risks, and intent with full PR-aware context — including metadata, descriptions, and patches. Send with Cmd+Enter.",
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

export const TERMINAL_LINES = [
  { prompt: true, text: "divergence start --project myapp" },
  { prompt: false, text: "Scanning branches..." },
  { prompt: false, text: "Found 4 branches, 2 active divergences" },
  { prompt: false, text: "Discovering tmux sessions (smart binary resolve)..." },
  {
    prompt: false,
    text: "  \u2713 4 sessions attached in 0.4s (cached init, tabs persisted)",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 Killed session fix/old-branch — panel updated, no reconnect",
    color: "green",
  },
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
  { prompt: true, text: "divergence create feat/api-v2 --agent claude --mode plan" },
  { prompt: false, text: "Queued divergence creation for feat/api-v2..." },
  {
    prompt: false,
    text: "  \u2713 Creation queued — UI ready, clone preparing in background",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 Clone ready, Claude agent started, port 3143 assigned",
    color: "green",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u2713 Agent runtime: providers ready — claude codex cursor gemini",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 Agent session feat/api-v2 persisted — session.started event received",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 Plan mode active — agent will reason before acting (Shift+Tab to toggle)",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 Image attached: screenshot.png (drag-drop) — staged for claude",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 PDF attached: spec.pdf (file picker) — staged for gemini (provider-gated)",
    color: "green",
  },
  {
    prompt: false,
    text: "  turn.started \u2192 content.delta \u00d7 14 \u2192 activity.started \u2192 activity.completed \u2192 turn.completed",
    color: "blue",
  },
  {
    prompt: false,
    text: "  \u2713 Codex context: 42% used — [████████░░░░░░░░░░░░] 58% left",
    color: "green",
  },
  {
    prompt: false,
    text: "  thread/tokenUsage/updated — context window indicator updated",
    color: "blue",
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
    text: "  \u2713 PR #146 chat: asked Claude — \"What are the risky changes?\"",
    color: "green",
  },
  {
    prompt: false,
    text: "  Response received (1.4s) — 3 risks identified across 4 files",
    color: "blue",
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
    text: "  \u2713 PR Hub: 6 open PRs across 3 repos",
    color: "green",
  },
  {
    prompt: false,
    text: "  #142 checks passed — squash-merged via PR Hub",
    color: "blue",
  },
  {
    prompt: false,
    text: "  \u26A0 #139 has merge conflicts — merge blocked until resolved",
    color: "yellow",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u2713 Prompt queue: 2 items queued for feat/api-v2",
    color: "green",
  },
  {
    prompt: false,
    text: "  Sent queued prompt to active terminal session",
    color: "blue",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u2713 Linear: 12 issues loaded for project DIV",
    color: "green",
  },
  {
    prompt: false,
    text: "  Filter: In Progress \u2014 3 of 12 issues",
    color: "blue",
  },
  {
    prompt: false,
    text: '  Search: "auth" \u2014 2 matching issues',
    color: "blue",
  },
  {
    prompt: false,
    text: "  Sent DIV-47 to terminal as structured prompt",
    color: "blue",
  },
  {
    prompt: false,
    text: "  \u2713 DIV-47 \u2192 In Progress (state updated)",
    color: "green",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u2713 Mobile: device paired via mDNS, WebSocket server on :9347",
    color: "green",
  },
  {
    prompt: false,
    text: "  Push notification sent: automation feat/api-v2 finished",
    color: "blue",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "  \u2713 Data layer: Drizzle ORM, all queries type-safe, raw SQL linted",
    color: "green",
  },
  {
    prompt: false,
    text: "  \u2713 Architecture: 40 modular hooks, 398 tests passing, 0 lint errors",
    color: "green",
  },
  { prompt: false, text: "" },
  {
    prompt: false,
    text: "Ready. 3 divergences active, 2 agent sessions persisted, 4 providers registered, 3 URLs routed, 1 mobile device.",
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
