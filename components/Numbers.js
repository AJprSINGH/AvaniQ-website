const CARDS = [
  { target: 25, suffix: "+", label: "Projects delivered" },
  { target: 12, suffix: "+", label: "Technology capabilities" },
  { target: 4, suffix: "", label: "Founders building together" },
  { target: 24, suffix: "/7", label: "Ideas don't keep office hours" },
];

export default function Numbers() {
  return (
    <section className="numbers section" id="numbers">
      <div className="index">05 / DELIVERY</div>
      <div className="number-grid">
        {CARDS.map((c) => (
          <div className="number-card" key={c.label}>
            <strong className="counter" data-target={c.target}>
              0
            </strong>
            <span>{c.suffix}</span>
            <p>{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
