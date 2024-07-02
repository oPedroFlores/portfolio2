import React from "react";
import styles from "../css/Certificates.module.css";
import { motion } from "framer-motion";
const Certificates = ({ certificates }) => {
  return (
    <section className={styles.certificatesSection} id="certificates">
      {certificates.map((certificate) => (
        <div className={styles.certificate}>
          <h3>{certificate.name}</h3>
          <p>{certificate.desc}</p>
          <span>{certificate.time}</span>
          <a href={certificate.link} target="_blank" rel="noreferrer">
            Certificado
          </a>
        </div>
      ))}
    </section>
  );
};

export default Certificates;
