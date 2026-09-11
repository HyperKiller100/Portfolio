import { profile, services } from "../data/content";

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-brand">
        {profile.shortName}
      </a>
      <nav className="nav-links" aria-label="Primary">
        <a href="#product">Product</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact" className="nav-cta">
          Contact
        </a>
      </nav>
      <ul className="nav-services" aria-hidden="true">
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </header>
  );
}
