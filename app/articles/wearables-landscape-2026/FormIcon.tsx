import type { FormFactor } from "./data";

export default function FormIcon({
  form,
  size = 22,
  className = "",
}: {
  form: FormFactor;
  size?: number;
  className?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    className,
    "aria-hidden": true as const,
  };

  switch (form) {
    case "watch":
      return (
        <svg {...common} strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="6" width="12" height="12" rx="3" />
          <path d="M8 6V3h8v3M8 18v3h8v-3" />
          <circle cx="12" cy="12" r="2.5" strokeWidth="1.2" />
        </svg>
      );
    case "ring":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case "band":
      return (
        <svg {...common} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="9" width="18" height="6" rx="2" />
          <rect
            x="9"
            y="10.5"
            width="6"
            height="3"
            rx="0.5"
            fill="currentColor"
            opacity="0.2"
          />
        </svg>
      );
    case "pebble":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="12" rx="6.5" ry="3.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="2"
            ry="1.2"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      );
    case "earbud":
      return (
        <svg {...common}>
          <path
            d="M7 7c-1 2-1 5 0 7l2-1V8L7 7z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M17 7c1 2 1 5 0 7l-2-1V8l2-1z"
            fill="currentColor"
            opacity="0.15"
          />
          <path d="M7 7c-1 2-1 5 0 7l2-1V8L7 7z" />
          <path d="M17 7c1 2 1 5 0 7l-2-1V8l2-1z" />
        </svg>
      );
    case "glasses":
      return (
        <svg {...common}>
          <circle cx="6.5" cy="13" r="3.5" />
          <circle cx="17.5" cy="13" r="3.5" />
          <path d="M10 13h4M2 10l2 1M22 10l-2 1" />
        </svg>
      );
    case "bed":
      return (
        <svg {...common} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5" />
          <path d="M3 17h18v3M7 10V8a1 1 0 0 1 1-1h3v3" />
        </svg>
      );
    case "headband":
      return (
        <svg {...common}>
          <path d="M4 14c0-5 3-9 8-9s8 4 8 9" />
          <path d="M3 14h18" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
}
