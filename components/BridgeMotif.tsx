type BridgeMotifProps = {
  className?: string;
  strokeColor?: string;
  labelLeft?: string;
  labelRight?: string;
};

/**
 * Signature element: a schematic suspension-bridge line drawing.
 * Reads as a financial "blueprint" — two towers, a deck, and cables —
 * standing in for the two sides Bridge Capital connects: the business
 * and the capital. Used sparingly as a section divider / hero mark.
 */
export default function BridgeMotif({
  className = "",
  strokeColor = "var(--color-yellow)",
  labelLeft,
  labelRight,
}: BridgeMotifProps) {
  return (
    <svg
      viewBox="0 0 1200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* deck */}
      <line x1="40" y1="160" x2="1160" y2="160" stroke={strokeColor} strokeWidth="2" />
      {/* towers */}
      <line x1="300" y1="30" x2="300" y2="170" stroke={strokeColor} strokeWidth="2" />
      <line x1="900" y1="30" x2="900" y2="170" stroke={strokeColor} strokeWidth="2" />
      {/* main cables */}
      <path
        d="M 40 160 Q 300 40 560 160"
        stroke={strokeColor}
        strokeWidth="1.5"
        opacity="0.7"
      />
      <path
        d="M 640 160 Q 900 40 1160 160"
        stroke={strokeColor}
        strokeWidth="1.5"
        opacity="0.7"
      />
      <path
        d="M 40 160 Q 300 260 560 160"
        stroke={strokeColor}
        strokeWidth="1"
        opacity="0.25"
      />
      <path
        d="M 640 160 Q 900 260 1160 160"
        stroke={strokeColor}
        strokeWidth="1"
        opacity="0.25"
      />
      {/* suspender cables */}
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 60 + i * 42;
        if (x > 540) return null;
        const t = (x - 40) / 520;
        const y = 160 - Math.sin(t * Math.PI) * 118;
        return (
          <line
            key={`l-${i}`}
            x1={x}
            y1={160}
            x2={x}
            y2={y}
            stroke={strokeColor}
            strokeWidth="0.75"
            opacity="0.5"
          />
        );
      })}
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 660 + i * 42;
        if (x > 1140) return null;
        const t = (x - 640) / 520;
        const y = 160 - Math.sin(t * Math.PI) * 118;
        return (
          <line
            key={`r-${i}`}
            x1={x}
            y1={160}
            x2={x}
            y2={y}
            stroke={strokeColor}
            strokeWidth="0.75"
            opacity="0.5"
          />
        );
      })}
      {/* center span marker */}
      <circle cx="600" cy="160" r="4" fill={strokeColor} />

      {labelLeft && (
        <text
          x="40"
          y="200"
          fill={strokeColor}
          fontSize="14"
          fontFamily="var(--font-mono)"
          opacity="0.8"
        >
          {labelLeft}
        </text>
      )}
      {labelRight && (
        <text
          x="1160"
          y="200"
          textAnchor="end"
          fill={strokeColor}
          fontSize="14"
          fontFamily="var(--font-mono)"
          opacity="0.8"
        >
          {labelRight}
        </text>
      )}
    </svg>
  );
}
