export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="space-core" aria-hidden="true">
        <div className="core-halo"></div>
        <div className="core-sphere"></div>
        <div className="orbit orbit-a"></div>
        <div className="orbit orbit-b"></div>
        <div className="orbit orbit-c"></div>
      </div>
      <div className="hero-hud hud-left">
        AVQ / 001 <span>CREATIVE TECHNOLOGY</span>
      </div>
      <div className="hero-hud hud-right">
        <span className="pulse"></span> DIGITAL CORE / ONLINE
      </div>

      <div className="hero-content">
        <div className="eyebrow">
          <span className="live"></span> SOFTWARE • DESIGN • DIGITAL PRODUCTS
        </div>
        <h1>
          IDEAS ARE
          <br />
          <span>MESSY.</span>
          <br />
          WE MAKE
          <br />
          THEM WORK<span className="dot">.</span>
        </h1>
        <p>
          Avaniq Softwares builds websites, custom software and digital
          experiences for ambitious businesses ready to move beyond ordinary.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="button primary magnetic">
            Start a project <b>↗</b>
          </a>
          <a href="#services" className="button ghost">
            Explore what we do <b>↓</b>
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <i></i>
        <span>01 / 08</span>
      </div>
    </section>
  );
}
