import { motion } from "framer-motion";
import { products } from "../data/content";

export default function Product() {
  const product = products[0];

  return (
    <section className="section" id="product">
      <div className="section-head">
        <p className="section-label">Product</p>
        <h2 className="section-title">{product.name}</h2>
        <p className="section-desc">{product.tagline}</p>
      </div>

      <motion.article
        className="product-panel"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="product-media">
          <img
            src="/images/zenovia-logo.png"
            alt={`${product.name} logo`}
            className="product-photo"
            width={512}
            height={512}
          />
        </div>

        <div className="product-body">
          <p className="product-company">{product.company}</p>
          <p className="product-summary">{product.summary}</p>

          <ul className="product-audiences">
            {product.audiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <ul className="product-features">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <a
            className="btn btn-primary"
            href={product.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit zenovia.co.in
          </a>
        </div>
      </motion.article>
    </section>
  );
}
