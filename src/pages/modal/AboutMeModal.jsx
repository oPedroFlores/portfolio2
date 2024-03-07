import React from 'react';
import styles from '../../css/modal/AboutMeModal.module.css';
import TibiaImage1 from '../../img/aboutme/tibia1.png';
import TibiaImage2 from '../../img/aboutme/tibia2.png';
import Udemy1 from '../../img/aboutme/udemy1.png';
import Udemy2 from '../../img/aboutme/udemy2.png';
import Fatec1 from '../../img/aboutme/fatec1.png';
import Fatec2 from '../../img/aboutme/fatec2.png';
import Fiap1 from '../../img/aboutme/fiap1.png';
import Fiap2 from '../../img/aboutme/fiap2.png';
import { motion } from 'framer-motion';

const AboutMeModal = ({ language }) => {
  console.log(language);
  return (
    <div className={styles.AboutMeModal}>
      <motion.div
        className={styles.aboutMeDiv}
        variants={{
          hidden: { y: 180 },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <span>2015</span>
        <p>{language.homePageModal.firstText}</p>
        <div className={styles.imagesContainer}>
          <motion.img
            src={TibiaImage2}
            alt="Imagem Login do Tibia 8.6"
            variants={{
              hidden: { x: 180 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={TibiaImage1}
            alt="Imagem De Código em LUA"
            variants={{
              hidden: { x: 180 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.aboutMeDiv}
        variants={{
          hidden: { y: 180 },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <span>2018</span>
        <p>{language.homePageModal.secondText}</p>
        <div className={styles.imagesContainer}>
          <motion.img
            src={Udemy1}
            alt="Imagem do curso de C# na Udemy"
            variants={{
              hidden: { x: 180 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={Udemy2}
            alt="Imagem da UI da Udemy em 2018"
            variants={{
              hidden: { x: 180 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.aboutMeDiv}
        variants={{
          hidden: { y: 180 },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <span>2020</span>
        <p>{language.homePageModal.thirdText}</p>
        <div className={styles.imagesContainer}>
          <motion.img
            src={Fatec1}
            alt="Imagem da FATEC"
            variants={{
              hidden: { x: 180 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={Fatec2}
            alt="Imagem da UI da Udemy em 2018"
            variants={{
              hidden: { x: 180 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.aboutMeDiv}
        variants={{
          hidden: { y: 180 },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <span>2024</span>
        <p>{language.homePageModal.fourthText}</p>
        <div className={styles.imagesContainer}>
          <motion.img
            src={Fiap1}
            alt="Imagem da FATEC"
            variants={{
              hidden: { x: 180 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={Fiap2}
            alt="Imagem da UI da Udemy em 2018"
            variants={{
              hidden: { x: 180 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeModal;
