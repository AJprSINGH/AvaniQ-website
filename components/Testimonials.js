const TESTIMONIALS = [
  {
    initials: "AM",
    photoClass: "",
    name: "Alex Morgan",
    role: "Founder · Nova Labs",
    ratingLabel: "5 out of 5 stars",
    rating: "5.0",
    project: "PROJECT: DIGITAL PLATFORM",
    quote:
      "Avaniq took a complicated idea and turned it into a product that felt clear from the first interaction. The attention to detail really stood out.",
  },
  {
    initials: "SR",
    photoClass: "photo-two",
    name: "Sarah Rossi",
    role: "Director · Vela Group",
    ratingLabel: "5 out of 5 stars",
    rating: "5.0",
    project: "PROJECT: BUSINESS SOFTWARE",
    quote:
      "What we liked most was the combination of design thinking and engineering. We weren't handed a template — the solution was built around us.",
  },
  {
    initials: "DK",
    photoClass: "photo-three",
    name: "Daniel Klein",
    role: "Product Lead · Orbit",
    ratingLabel: "5 out of 5 stars",
    rating: "5.0",
    project: "PROJECT: PRODUCT DESIGN",
    quote:
      "The team communicated clearly, moved quickly and cared about the outcome. The final experience was much better than what we initially imagined.",
  },
  {
    initials: "JM",
    photoClass: "photo-four",
    name: "James Miller",
    role: "CEO · Northstar",
    ratingLabel: "4.9 out of 5 stars",
    rating: "4.9",
    project: "PROJECT: WEB DEVELOPMENT",
    quote:
      "From the first call to launch, the process felt structured without becoming rigid. We always knew what was happening and why.",
  },
  {
    initials: "LP",
    photoClass: "photo-five",
    name: "Laura Pereira",
    role: "COO · Flux Systems",
    ratingLabel: "5 out of 5 stars",
    rating: "5.0",
    project: "PROJECT: AUTOMATION",
    quote:
      "They understood both the technical requirements and the business goals. That made the entire project much easier to move forward.",
  },
  {
    initials: "RM",
    photoClass: "photo-six",
    name: "Ryan Mitchell",
    role: "Founder · Elevate",
    ratingLabel: "5 out of 5 stars",
    rating: "5.0",
    project: "PROJECT: CUSTOMER PORTAL",
    quote:
      "We came with a rough concept and Avaniq helped shape it into something people could actually use. The result felt modern, fast and polished.",
  },
];

export default function Testimonials() {
  return (
    <>
      <div className="section-signal">
        <span>TRUST</span>
        <i></i>
        <b>AVQ / 2026</b>
      </div>
      <section className="testimonials section" id="testimonials">
        <div className="index">08 / CLIENT EXPERIENCE</div>
        <div className="testimonial-heading">
          <h2>
            Good technology.
            <br />
            <span>Better partnership.</span>
          </h2>
          <p>
            Example testimonial cards — replace the names, photos, companies and
            quotes with verified client feedback before launch.
          </p>
        </div>

        <div className="testimonial-grid testimonial-showcase">
          {TESTIMONIALS.map((t) => (
            <article className="testimonial testimonial-card reveal" key={t.name}>
              <div className="testimonial-top">
                <div className="testimonial-person">
                  <div className={`testimonial-photo ${t.photoClass}`.trim()}>
                    {t.initials}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </div>
                </div>
                <div className="stars" aria-label={t.ratingLabel}>
                  ★★★★★
                </div>
              </div>
              <div className="testimonial-quote">“</div>
              <p>{t.quote}</p>
              <div className="testimonial-meta">
                <span>{t.project}</span>
                <span>★★★★★ {t.rating}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonial-note">
          <span>DEMO CONTENT</span>
          <i></i>
          <p>
            Names, photos, companies, ratings and quotes above are placeholders
            for the website design. Replace them with real client testimonials
            before publishing.
          </p>
        </div>
      </section>
    </>
  );
}
