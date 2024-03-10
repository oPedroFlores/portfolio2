import React from 'react';
import styles from '../css/Tecnologies.module.css';
import tecImg from '../img/tecimage.png';
import { motion } from 'framer-motion';
import TechCard from './components/TechCard';

const Tecnologies = ({ language, techs }) => {
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

  // Scroll no desktop,
  const [width, setWidth] = React.useState(0);
  const slider_wrapper = React.useRef();

  React.useEffect(() => {
    setWidth(
      slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth,
    );
  }, []);

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
      <div className={styles.tecResume}>{language.techPage.tecResume}</div>
      <motion.div ref={slider_wrapper} className={styles.techsDiv}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.techsDivWrapper}
          whileTap={{ cursor: 'grabbing' }}
        >
          {techs
            .sort((a, b) => b.level - a.level)
            .map((tech, index) => (
              <TechCard tech={tech} />
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Tecnologies;
