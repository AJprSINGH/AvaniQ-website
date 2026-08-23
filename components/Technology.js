const FAMILIES = [
  ["FRONTEND", ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue"]],
  ["BACKEND", ["Node.js", "Python", "PHP", "Laravel", "Java", ".NET", "REST APIs"]],
  ["DATABASES", ["PostgreSQL", "MySQL", "MongoDB", "Redis"]],
  ["CLOUD & DEVOPS", ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD", "Linux"]],
  ["AI & DATA", ["Python AI", "LLM Integrations", "Automation", "Analytics"]],
  ["DESIGN", ["Figma", "Design Systems", "Prototyping", "Responsive UX"]],
];

export default function Technology() {
  return (
    <>
      <div className="section-signal">
        <span>STACK</span>
        <i></i>
        <b>AVQ / 2026</b>
      </div>
      <section className="technology section" id="technology">
        <div className="index">04 / TECHNOLOGY</div>
        <div className="tech-heading">
          <h2>
            Modern stack.
            <br />
            <span>Serious engineering.</span>
          </h2>
          <p>We choose technology around the product — not the other way around.</p>
        </div>
        <div className="tech-cloud">
          {FAMILIES.map(([label, items]) => (
            <div className="tech-family" key={label}>
              <small>{label}</small>
              <div>
                {items.map((item) => (
                  <b key={item}>{item}</b>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
