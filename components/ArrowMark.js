export default function ArrowMark() {
  return (
    <svg
      className="arrow-mark"
      viewBox="0 0 240 240"
      aria-hidden="true"
      fill="none"
    >
      {/* Outer tether ring */}
      <circle
        className="am-ring"
        cx="120"
        cy="120"
        r="110"
        stroke="rgba(38,230,255,.14)"
        strokeWidth="1"
        strokeDasharray="692"
        strokeDashoffset="692"
        transform="rotate(-90 120 120)"
      />

      {/* Left leg: base -> apex (arrow direction) */}
      <path
        className="am-stroke am-left"
        d="M36 200 L120 44"
        stroke="#26e6ff"
        strokeWidth="8"
        strokeLinecap="square"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      />
      {/* Right leg: apex -> base (return sweep) */}
      <path
        className="am-stroke am-right"
        d="M120 44 L204 200"
        stroke="#c9f9ff"
        strokeWidth="8"
        strokeLinecap="square"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      />
      {/* Crossbar: left -> right, slightly angled up toward apex */}
      <path
        className="am-stroke am-bar"
        d="M72 142 L168 142"
        stroke="#26e6ff"
        strokeWidth="8"
        strokeLinecap="square"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      />

      {/* Sharp arrowhead at the apex, like the Avengers emblem tip */}
      <path
        className="am-stroke am-head"
        d="M120 10 L146 52 L120 42 L94 52 Z"
        fill="#26e6ff"
        stroke="#eaffff"
        strokeWidth="2.5"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
      />

      {/* Spark burst at apex once formed */}
      <circle
        className="am-spark"
        cx="120"
        cy="34"
        r="5"
        fill="#eaffff"
      />
    </svg>
  );
}
