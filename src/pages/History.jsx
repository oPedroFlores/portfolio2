import { React, useState } from 'react';
import styles from '../css/History.module.css';
import { motion } from 'framer-motion';

const History = ({ language }) => {
  const [career, setCareer] = useState(language.history.professions.length - 1);

  const fadeInAnimationText = {
    initial: (index) => ({
      opacity: 0,
    }),
    animate: (index) => ({
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.4,
      },
    }),
  };

  const transformUpText = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const fadeUpText = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
      },
    },
  };

  const fadeUpText2 = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="history" className={styles.history}>
      <div className={styles.historyContainer}>
        <h4>{language.history.title}</h4>
        <div className={styles.careerInfoWrapper}>
          <div className={styles.careerOptions}>
            {language.history.professions.map((profession, index) => (
              <motion.div
                key={index}
                onClick={() => setCareer(profession.id)}
                className={`${
                  career === profession.id ? styles.careerOptionSelected : ''
                } ${styles.careerOption}`}
                variants={fadeInAnimationText}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
              >
                <h5>{profession.title}</h5>
              </motion.div>
            ))}
          </div>
          <div>
            {language.history.professions
              .filter((profession) => profession.id === career)
              .map((profession) => (
                <div key={profession.id} className={styles.careerItemResume}>
                  <div>
                    <motion.h5
                      variants={fadeUpText2}
                      initial="initial"
                      whileInView="animate"
                    >
                      {profession.role}
                    </motion.h5>
                    <motion.p
                      variants={fadeUpText}
                      initial="initial"
                      whileInView="animate"
                    >
                      {profession.duration}
                    </motion.p>
                  </div>
                  <motion.p
                    variants={transformUpText}
                    initial="initial"
                    whileInView="animate"
                  >
                    {profession.resume}
                  </motion.p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
