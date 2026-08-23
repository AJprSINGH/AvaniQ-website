export default function Contact() {
  return (
    <>
      <div className="section-signal">
        <span>CONNECT</span>
        <i></i>
        <b>AVQ / 2026</b>
      </div>
      <section className="contact section" id="contact">
        <div className="contact-orb"></div>
        <div className="contact-copy">
          <div className="index">10 / START A CONVERSATION</div>
          <h2>
            GOT A WILD
            <br />
            IDEA?
            <br />
            <span>LET&apos;S BUILD IT.</span>
          </h2>
          <p>
            Tell us what you&apos;re building. Big idea, tiny idea, weird idea
            — all welcome.
          </p>
          <a className="contact-email magnetic" href="mailto:hello@avaniqsoftwares.com">
            hello@avaniqsoftwares.com <b>↗</b>
          </a>
        </div>
        <form className="contact-form" id="contact-form">
          <label>
            Name
            <input required name="name" placeholder="Your name" />
          </label>
          <label>
            Work email
            <input required type="email" name="email" placeholder="you@company.com" />
          </label>
          <label>
            What are you building?
            <textarea required name="message" rows={5} placeholder="Tell us about the project..."></textarea>
          </label>
          <button className="submit magnetic" type="submit">
            Send project brief <b>↗</b>
          </button>
          <div className="form-status" aria-live="polite"></div>
        </form>
      </section>
    </>
  );
}
