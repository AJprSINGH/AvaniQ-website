import Arrow from "./Arrow";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <strong>AVANIQ SOFTWARES</strong>
        <span>Ideas, engineered into reality.</span>
      </div>
      <div className="footer-socials">
        <a href="#" aria-label="LinkedIn">
          LinkedIn <Arrow />
        </a>
        <a href="#" aria-label="Instagram">
          Instagram <Arrow />
        </a>
        <a href="#" aria-label="X">
          X <Arrow />
        </a>
        <a href="mailto:hello@avaniqsoftwares.com">
          Email <Arrow />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Avaniq Softwares</span>
        <a href="#home">
          Back to top <Arrow dir="up" />
        </a>
      </div>
    </footer>
  );
}
