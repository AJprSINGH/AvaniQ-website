import Arrow from "./Arrow";

const PRODUCTS = [
  {
    visualClass: "visual-a",
    visual: (
      <div className="mock-window">
        <small>AVQ / FINANCE</small>
        <strong>
          RUN THE
          <br />
          NUMBERS.
        </strong>
        <div className="mock-lines"></div>
      </div>
    ),
    tag: "COMPANY-OWNED PRODUCT",
    title: (
      <>
        Finance
        <br />
        Industry Solution
      </>
    ),
    ambition:
      "Our ambition is to build a company-owned product purpose-built for the finance industry — one dependable platform that brings together the tools institutions need to run their daily operations: reporting, compliance, workflows and real-time insight, designed around how finance teams actually work.",
    points: ["DAILY OPERATIONS", "REPORTING & COMPLIANCE", "REAL-TIME INSIGHT"],
  },
  {
    visualClass: "visual-b",
    visual: <div className="sphere-mark">↯</div>,
    tag: "COMPANY-OWNED PRODUCT",
    title: (
      <>
        Energy
        <br />
        Industry Solution
      </>
    ),
    ambition:
      "Our ambition is to build a company-owned product purpose-built for the energy industry — a single platform that supports the systems energy companies rely on every day: monitoring, forecasting, asset operations and data-driven decisions, engineered for reliability at scale.",
    points: ["DAILY OPERATIONS", "MONITORING & FORECASTING", "RELIABILITY AT SCALE"],
  },
];

export default function Work() {
  return (
    <>
      <div className="section-signal">
        <span>WORK</span>
        <i></i>
        <b>AVQ / 2026</b>
      </div>
      <section className="work section" id="work">
        <div className="section-head">
          <div>
            <div className="index">06 / SELECTED PROJECTS</div>
            <h2>
              Built for
              <br />
              <span>real impact.</span>
            </h2>
          </div>
          <p>
            Two company-owned products in the making — purpose-built platforms
            for the industries we know best. Click a card to see what drives us.
          </p>
        </div>
        <div className="project-grid">
          {PRODUCTS.map((p) => (
            <article
              className="project flip-card reveal"
              key={p.visualClass}
              tabIndex={0}
              role="button"
              aria-label="Company-owned product card — activate to flip for details"
            >
              <div className="flip-inner">
                <div className="flip-front">
                  <div className={`project-visual ${p.visualClass}`}>
                    {p.visual}
                  </div>
                  <div className="project-info">
                    <small>{p.tag}</small>
                    <h3>{p.title}</h3>
                    <span>Click to flip <Arrow dir="refresh" /></span>
                  </div>
                </div>
                <div className="flip-back">
                  <small>{p.tag}</small>
                  <h3>{p.title}</h3>
                  <p>{p.ambition}</p>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <span className="flip-hint">Click to flip back <Arrow dir="refresh" /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
