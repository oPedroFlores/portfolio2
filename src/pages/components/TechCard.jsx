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
import { motion } from 'framer-motion';
const TechCard = ({ tech, index, largura }) => {
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

  const fadeInAnimationText = {
    initial: {
      opacity: 0,
    },
    animate: (index) => ({
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: index > 4 ? 0.2 : index * 0.2,
      },
    }),
  };

  return (
    <motion.div
      className={`${styles.techCard}`}
      key={index}
      variants={fadeInAnimationText}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
    >
      <span className={styles.techIcon}>{iconMapping[tech.icon]}</span>
      <p className={styles.techTitle}>{tech.tec}</p>
      <p className={styles.techTime}>{tech.time}</p>
    </motion.div>
  );
};

export default TechCard;
