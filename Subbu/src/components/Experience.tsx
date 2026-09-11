import { motion } from "framer-motion";
import { experience } from "../data/content";

type ExperienceItem = (typeof experience)[number];

export default function Experience() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Roles I&apos;ve shaped</h2>
        <p className="section-desc">
          From founding Zenovia at SRayudu NextGen to leading ML systems and shipping full-pipeline data science work.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((job, index) => (
          <ExperienceCard key={`${job.company}-${job.role}`} job={job} index={index} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ job, index }: { job: ExperienceItem; index: number }) {
  const product = "product" in job ? job.product : undefined;
  const productUrl = "productUrl" in job ? job.productUrl : undefined;
  const companyLogo = "companyLogo" in job ? job.companyLogo : undefined;

  return (
    <motion.article
      className={`experience-item${companyLogo ? " experience-item--with-logo" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="experience-meta">
        <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
        <p className="experience-period">{job.period}</p>
        <p className="experience-location">{job.location}</p>
      </div>
      <div className="experience-body">
        <h3>
          {job.role}
          <span className="experience-company"> · {job.company}</span>
        </h3>
        <p className="experience-type">{job.type}</p>
        {product && productUrl && (
          <a className="experience-product" href={productUrl} target="_blank" rel="noreferrer">
            Product · {product}
          </a>
        )}
        <ul>
          {job.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {companyLogo && (
        <div className="experience-logo-side">
          <img
            className="experience-company-logo"
            src={companyLogo}
            alt={`${job.company} logo`}
          />
        </div>
      )}
    </motion.article>
  );
}
