export default function Header() {
  return (
    <header className="nav">
      <a className="logo" href="#home" aria-label="Avaniq Softwares home">
        <span className="mark">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span>
          AVANIQ<small>SOFTWARES</small>
        </span>
      </a>
      <nav>
        <a href="#services">Services</a>
        <a href="#technology">Technology</a>
        <a href="#work">Projects</a>
        <a href="#founders">Founders</a>
        <a href="#contact" className="nav-cta">
          Start a project <b>↗</b>
        </a>
      </nav>
      <button className="menu" aria-label="Open menu">
        <i></i>
        <i></i>
      </button>
    </header>
  );
}
