import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import styles from '../../css/Projects.module.css';

const ProjectsCarousel = ({ projects }) => {
  const sliderRef = useRef(null);
  const slidesRef = useRef(null);

  const [sliderWidth, setSliderWidths] = useState(0);
  const [slidesWidth, setSlidesWidths] = useState(0);
  const slideMarginRight = 15;
  const totalSlidesMarginRight = slideMarginRight * projects.length;

  useEffect(() => {
    const measureSliderWidth = () => {
      setSliderWidths(sliderRef.current.clientWidth);
    };

    const measureSlidesWidth = () => {
      const slidesNode = slidesRef.current.childNodes;
      const slidesArr = Array.from(slidesNode);
      const slidesSumWidth = slidesArr.reduce(
        (acc, node) => acc + node.clientWidth,
        0,
      );
      setSlidesWidths(slidesSumWidth);
    };

    measureSliderWidth();
    measureSlidesWidth();

    window.addEventListener('resize', measureSliderWidth);
    window.addEventListener('resize', measureSlidesWidth);

    return () => {
      window.removeEventListener('resize', measureSliderWidth);
      window.removeEventListener('resize', measureSlidesWidth);
    };
  }, [sliderWidth, slidesWidth, projects]);

  return (
    <div ref={sliderRef} className={styles.slider}>
      <motion.ul
        ref={slidesRef}
        drag="x"
        dragConstraints={{
          left: -(slidesWidth - sliderWidth + totalSlidesMarginRight),
          right: 0,
        }}
        dragElastic={0.2}
        dragTransition={{ bounceDamping: 18 }}
        className={styles.slides}
      >
        <ProjectCard projects={projects} styles={styles} />
      </motion.ul>
    </div>
  );
};

export default ProjectsCarousel;
