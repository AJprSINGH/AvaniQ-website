const FOUNDERS = [
  {
    initial: "T",
    num: "FOUNDER / 01",
    name: "Taufiq",
    role: "Technology & Product",
    bio: "Product-minded technologist focused on turning ambitious ideas into clear, useful digital products.",
  },
  {
    initial: "D",
    num: "FOUNDER / 02",
    name: "Domenico",
    role: "Business & Partnerships",
    bio: "Focused on partnerships, international growth and connecting strong ideas with the right opportunities.",
  },
  {
    initial: "A",
    num: "FOUNDER / 03",
    name: "Ajit",
    role: "Technology & Delivery",
    bio: "Focused on engineering, delivery and building dependable systems that work beyond the prototype.",
  },
  {
    initial: "Y",
    num: "FOUNDER / 04",
    name: "Yash",
    role: "Product & Technology",
    bio: "Bridging product thinking and technology to create experiences that feel simple, fast and memorable.",
  },
];

export default function Founders() {
  return (
    <>
      <div className="section-signal">
        <span>THE PEOPLE</span>
        <i></i>
        <b>AVQ / 2026</b>
      </div>
      <section className="founders section" id="founders">
        <div className="index">07 / MEET THE FOUNDERS</div>
        <div className="founder-heading">
          <h2>
            Four people.
            <br />
            <span>One direction.</span>
          </h2>
          <p>
            Avaniq is being built by a founding team bringing different
            perspectives together around one goal: building technology that
            matters.
          </p>
        </div>
        <div className="founder-grid">
          {FOUNDERS.map((f) => (
            <article className="founder founder-card reveal" key={f.num}>
              <div className="founder-photo">
                <div className="photo-placeholder">{f.initial}</div>
                <span>{f.num}</span>
              </div>
              <div className="founder-copy">
                <small>CO-FOUNDER</small>
                <h3>{f.name}</h3>
                <p>{f.role}</p>
                <div className="founder-bio">{f.bio}</div>
                <div className="founder-social">LINKEDIN ↗</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
