import React from 'react';
import styles from '../../css/Tecnologies.module.css';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaWordpress,
  FaBootstrap,
} from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
const TechCard = ({ tech }) => {
  const iconMapping = {
    js: <FaJs />,
    jsx: <FaReact />,
    node: <FaNodeJs />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    mysql: <TbBrandMysql />,
    php: <FaPhp />,
    wordpress: <FaWordpress />,
    bootstrap: <FaBootstrap />,
    express: <SiExpress />,
  };

  console.log(tech);
  return (
    <div className={styles.techCard}>
      <p className={styles.techTitle}>{tech.tec}</p>
      <p className={styles.techDesc}>{tech.desc}</p>
      <span className={styles.techIcon}>{iconMapping[tech.icon]}</span>
    </div>
  );
};

export default TechCard;
