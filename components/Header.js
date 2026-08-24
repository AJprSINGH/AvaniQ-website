import Arrow from "./Arrow";

export default function Header() {
  return (
    <>
      <header className="nav">
        <a className="logo" href="#home" aria-label="Avaniq Softwares home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Avaniq Softwares"
            className="logo-img"
            width="1280"
            height="427"
          />
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#technology">Technology</a>
          <a href="#work">Projects</a>
          <a href="#founders">Founders</a>
          <a href="#contact" className="nav-cta">
            Start a project <b><Arrow /></b>
          </a>
        </nav>
        <button className="menu" aria-label="Toggle menu" aria-expanded="false">
          <i></i>
          <i></i>
        </button>
      </header>

      <div className="mobile-nav-backdrop" aria-hidden="true"></div>
      <aside className="mobile-nav" aria-label="Mobile navigation">
        <div className="mobile-nav-head">
          <span>AVQ / MENU</span>
        </div>
        <nav>
          <a href="#services">
            <small>01</small>Services
          </a>
          <a href="#technology">
            <small>02</small>Technology
          </a>
          <a href="#work">
            <small>03</small>Projects
          </a>
          <a href="#founders">
            <small>04</small>Founders
          </a>
          <a href="#contact" className="mobile-nav-cta">
            Start a project <Arrow />
          </a>
        </nav>
        <div className="mobile-nav-foot">
          <span>AVANIQ SOFTWARES</span>
          <span>Ideas, engineered into reality.</span>
        </div>
      </aside>
    </>
  );
}
