type IconName =
  | "dot"
  | "square-dot"
  | "neuro"
  | "ems"
  | "eeg"
  | "bed"
  | "handheld"
  | "boot";

export default function MedicalIcon({
  icon,
  size = 22,
}: {
  icon: IconName;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "dot":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "square-dot":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "neuro":
      return (
        <svg {...common}>
          <path d="M3 12c0-4 4-7 9-7s9 3 9 7" />
          <path d="M7 13l-1 5M17 13l1 5" />
        </svg>
      );
    case "ems":
      return (
        <svg {...common}>
          <rect x="4" y="9" width="6" height="6" rx="1" />
          <rect x="14" y="9" width="6" height="6" rx="1" />
          <line x1="10" y1="12" x2="14" y2="12" strokeDasharray="2 2" />
        </svg>
      );
    case "eeg":
      return (
        <svg {...common}>
          <path d="M4 12c0-3 2-6 8-6s8 3 8 6" />
          <circle cx="8" cy="14" r="1" fill="currentColor" />
          <circle cx="16" cy="14" r="1" fill="currentColor" />
          <circle cx="12" cy="13" r="1" fill="currentColor" />
        </svg>
      );
    case "bed":
      return (
        <svg {...common}>
          <path d="M3 14h18M3 14v5M21 14v5M5 14V9c0-1 1-2 2-2h10c1 0 2 1 2 2v5" />
        </svg>
      );
    case "handheld":
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </svg>
      );
    case "boot":
      return (
        <svg {...common}>
          <rect x="6" y="10" width="12" height="8" rx="2" />
          <path d="M9 10V6c0-1 1-2 3-2s3 1 3 2v4" />
        </svg>
      );
    default:
      return null;
  }
}
