import { profile } from "../data/content";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-inner">
        <p className="section-label">Contact</p>
        <h2 className="contact-title">Let&apos;s build something intelligent.</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
        </div>
        <p className="contact-copy">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
