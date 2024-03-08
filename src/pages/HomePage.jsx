import React from 'react';
import styles from '../css/Home.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ReactComponent as Curriculo } from '../img/svg/cv2.svg';
import { motion } from 'framer-motion';
import curriculo from '../cv/portuguesecv.pdf';
import Modal from './modal/Modal';
import Button from '../components/Button';
import AboutMeModal from './modal/AboutMeModal';

const HomePage = ({ language }) => {
  const [modal, setModal] = React.useState(false);
  const textAprRef = React.useRef(null);
  function ModalTrue() {
    setModal(true);
  }
  React.useEffect(() => {
    if (modal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Limpeza ao desmontar o componente
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [modal]);
  // Efeito typewriter

  return (
    <section className={`${styles.homeSection} section`} id="homePage">
      {modal && (
        <Modal
          setModal={setModal}
          theModal={AboutMeModal}
          language={language}
        />
      )}

      <div className={styles.homeInfo}>
        <div className={styles.aboutMeText}>
          <div className={styles.aboutMeName}>
            <motion.h1
              className="hoverText"
              variants={{
                hidden: { x: -130 },
                visible: { x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              Pedro Flores
            </motion.h1>
            <span class="waveHand">👋</span>
          </div>
          <motion.p
            variants={{
              hidden: { x: -115 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            ref={textAprRef}
          >
            {language.homePage.text}
          </motion.p>
          <motion.div
            variants={{
              hidden: { x: -90 },
              visible: { x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            <div className={styles.openModalMenu}>
              <Button
                text={language.homePage.buttonText}
                theFunction={ModalTrue}
              />
            </div>
          </motion.div>
        </div>
        <div className={styles.aboutMePhoto}>
          <div className={styles.imgLinks}>
            <motion.a
              href="https://github.com/oPedroFlores"
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { x: 90 },
                visible: { x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pedrolpflores/"
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { x: 90 },
                visible: { x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={curriculo}
              download="pedroflores.pdf"
              variants={{
                hidden: { x: 90 },
                visible: { x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Curriculo />
            </motion.a>
          </div>
          <div className={styles.profImage}>
            <motion.img
              src="https://avatars.githubusercontent.com/u/100242638?v=4"
              alt="Foto - Pedro Flores"
              variants={{
                hidden: { x: 90 },
                visible: { x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className={styles.photoBorder}
              variants={{
                hidden: { x: 90 },
                visible: { x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.div
              className={styles.photoBorderGradient}
              variants={{
                hidden: { x: 90 },
                visible: { x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
