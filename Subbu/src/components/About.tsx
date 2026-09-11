import { motion } from "framer-motion";
import { education, profile } from "../data/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about-layout">
        <div className="section-head about-head">
          <p className="section-label">About</p>
          <motion.div
            className="about-photo-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              className="about-photo"
              src="/images/portrait.png"
              alt={profile.name}
              width={640}
              height={640}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>
          <h2 className="section-title">Design thinking for intelligent systems</h2>
          <p className="about-bio">{profile.bio}</p>
          <p className="about-location">{profile.location}</p>
        </div>

        <div className="education-list">
          <p className="section-label">Education</p>
          {education.map((ed, index) => (
            <motion.article
              key={ed.school}
              className="education-item"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <h3>{ed.degree}</h3>
              <p className="education-school">{ed.school}</p>
              <div className="education-meta">
                <span>{ed.period}</span>
                <span>GPA {ed.gpa}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
