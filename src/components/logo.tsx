export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#89b4fa", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#cba6f7", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#1e1e2e" />
      <path
        d="M30 70 L50 30 L70 70"
        stroke="url(#logo-grad)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 50 L50 70"
        stroke="url(#logo-grad)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="30" cy="70" r="6" fill="#a6e3a1" />
      <circle cx="70" cy="70" r="6" fill="#f9e2af" />
      <circle cx="50" cy="30" r="6" fill="#89b4fa" />
    </svg>
  );
}
