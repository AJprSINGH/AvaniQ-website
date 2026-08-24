const PATHS = {
  // ↗ up-right
  "up-right": "M6 18L18 6M18 6H8M18 6v10",
  // ↓ down
  down: "M12 5v14M12 19l-6-6M12 19l6-6",
  // ↑ up
  up: "M12 19V5M12 5l-6 6M12 5l6 6",
  // ↻ clockwise refresh
  refresh:
    "M20 12a8 8 0 1 1-2.34-5.66M20 3v5h-5",
};

export default function Arrow({ dir = "up-right", className = "" }) {
  return (
    <svg
      className={`icon-arrow ${className}`}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[dir] || PATHS["up-right"]} />
    </svg>
  );
}
