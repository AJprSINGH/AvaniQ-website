import Arrow from "./Arrow";

const SERVICES = [
  {
    n: "01",
    icon: "◈",
    title: "Web Development",
    desc: "High-performance websites, landing pages and web platforms designed to convert attention into action.",
    link: "Build a website",
  },
  {
    n: "02",
    icon: "⌘",
    title: "Custom Software",
    desc: "Business applications, dashboards, portals and internal systems built around your workflows.",
    link: "Build software",
  },
  {
    n: "03",
    icon: "✦",
    title: "UI / UX Design",
    desc: "Clear interfaces, product flows and design systems that make complicated products feel simple.",
    link: "Design a product",
  },
  {
    n: "04",
    icon: "⌁",
    title: "AI & Automation",
    desc: "AI-assisted workflows, intelligent features and automation that remove repetitive work.",
    link: "Automate work",
  },
  {
    n: "05",
    icon: "⟐",
    title: "Cloud & DevOps",
    desc: "Cloud-ready architectures, deployment pipelines, environments and scalable infrastructure.",
    link: "Scale securely",
  },
  {
    n: "06",
    icon: "⌁",
    title: "Integration & APIs",
    desc: "Connect platforms, data and services so the systems behind your business work together.",
    link: "Connect systems",
  },
];

export default function Services() {
  return (
    <>
      <div className="section-signal">
        <span>CAPABILITIES</span>
        <i></i>
        <b>AVQ / 2026</b>
      </div>
      <section className="services section" id="services">
        <div className="section-head">
          <div>
            <div className="index">03 / WHAT WE DO</div>
            <h2>
              Built around
              <br />
              <span>your ambition.</span>
            </h2>
          </div>
          <p>One team across product thinking, design, development and delivery.</p>
        </div>
        <div className="service-grid">
          {SERVICES.map((s) => (
            <article className="service reveal" key={s.n}>
              <span>{s.n}</span>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact">{s.link} <Arrow /></a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
