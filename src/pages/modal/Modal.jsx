import React, { useEffect, useRef } from 'react';
import styles from '../../css/modal/Modal.module.css';
import Button from '../../components/Button';
import { motion } from 'framer-motion';

const Modal = ({ setModal, theModal, language }) => {
  const aboutMeSectionRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      aboutMeSectionRef.current &&
      !aboutMeSectionRef.current.contains(event.target)
    ) {
      setModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.section
      className={styles.Modal}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.modalSection}
        ref={aboutMeSectionRef}
        variants={{
          hidden: { opacity: 0, x: 125 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className={styles.modalButtons}>
          <Button
            text={language.homePageModal.closeButtonText}
            theFunction={() => setModal(false)}
          />
        </div>
        {React.createElement(theModal, { language })}
      </motion.div>
    </motion.section>
  );
};

export default Modal;
