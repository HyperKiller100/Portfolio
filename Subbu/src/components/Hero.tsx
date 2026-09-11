import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.title}
        </motion.p>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="hero-lede"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          {profile.summary}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
        >
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            How can I help?
          </a>
          <a className="btn btn-ghost" href="#work">
            View work
          </a>
        </motion.div>
        <ul className="hero-tags">
          {profile.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
