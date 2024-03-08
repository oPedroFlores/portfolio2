import React from 'react';
import styles from '../css/Tecnologies.module.css';
import tecImg from '../img/tecimage.png';
import { motion } from 'framer-motion';

const Tecnologies = ({ language }) => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(
    window.innerWidth < 500,
  );
  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const animationDuration = 6;
  const animation = {
    y: [0, -20, 0],
    transition: {
      duration: animationDuration,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 3,
    },
  };
  const firstTextAnimation = {
    y: isSmallScreen ? [-30, -110, -30] : [-60, -160, -60],
    transition: {
      duration: animationDuration,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 3,
    },
  };
  const secondtextAnimation = {
    y: isSmallScreen ? [-30, 0, -30] : [-60, 0, -60],
    transition: {
      duration: animationDuration,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 3,
    },
  };

  return (
    <section className={`${styles.tecnologies} section`} id="tecnologies">
      <div className={styles.animateTag}>
        <motion.img
          src={tecImg}
          alt="Tecnologias"
          animate={animation}
        ></motion.img>
        <motion.p
          className={`${styles.firstTecTitle} ${styles.tecTitle}`}
          animate={firstTextAnimation}
        >
          {language.techPage.title}
        </motion.p>
        <motion.p
          className={`${styles.secondTecTitle} ${styles.tecTitle}`}
          animate={secondtextAnimation}
        >
          {language.techPage.title}
        </motion.p>
      </div>
      <div className={styles.tecResume}></div>
      <div className={styles.techsDiv}></div>
    </section>
  );
};

export default Tecnologies;
