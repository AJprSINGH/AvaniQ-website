import Arrow from "./Arrow";

export default function Header() {
  return (
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
      <button className="menu" aria-label="Open menu">
        <i></i>
        <i></i>
      </button>
    </header>
  );
}
