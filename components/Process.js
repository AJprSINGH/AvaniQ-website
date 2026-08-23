const STEPS = [
  ["01", "Discover", "Understand the business, users, constraints and the real problem."],
  ["02", "Design", "Turn ideas into flows, interfaces, prototypes and a clear product direction."],
  ["03", "Engineer", "Build clean, scalable software with testing and measurable quality."],
  ["04", "Launch & evolve", "Ship, learn from real usage and keep improving the product."],
];

export default function Process() {
  return (
    <section className="process section">
      <div className="index">09 / HOW WE WORK</div>
      <h2>
        Listen. Design.
        <br />
        <span>Build. Improve.</span>
      </h2>
      <div className="process-list">
        {STEPS.map(([num, title, desc]) => (
          <div className="process-item reveal" key={num}>
            <b>{num}</b>
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
