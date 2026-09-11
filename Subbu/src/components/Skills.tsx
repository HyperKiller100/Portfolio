import { motion } from "framer-motion";
import { skills } from "../data/content";

const groups = [
  { title: "Programming & Data", items: skills.programming },
  { title: "Machine Learning & AI", items: skills.ai },
  { title: "Cloud & Tools", items: skills.cloud },
  { title: "Other", items: skills.other },
];

export default function Skills() {
  return (
    <section className="section section-skills" id="skills">
      <div className="section-head">
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I build with</h2>
        <p className="section-desc">
          A focused stack across data, models, cloud, and delivery.
        </p>
      </div>

      <div className="skills-grid">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            className="skill-group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
