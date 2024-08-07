import React, { useState, useEffect } from 'react';
import styles from '../css/NavBar.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TfiMenu } from 'react-icons/tfi';

const NavBar = ({ translation, setLanguage, language }) => {
  const [navBackground, setNavBackground] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('homePage');
  const flyerMenu = React.useRef(null);
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }

      // Determinar a seção atual baseado no scroll
      const sections = [
        'homePage',
        'tecnologies',
        'history',
        'projects',
        'certificates',
        'contact',
      ];
      let currentSection = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  // Função para aplicar classe condicionalmente
  const linkClassName = (section) => {
    return `${styles.navButton} hoverText ${
      activeSection === section ? 'activeLink' : ''
    }`;
  };
  // Função para adicionar < /> ao nome da seção
  const renderLinkText = (section, text) => {
    return (
      <span className={activeSection === section ? styles.activeLinkText : ''}>
        {activeSection === section ? `< ${text} />` : text}
      </span>
    );
  };
  // Detectar clique fora do FlyerMenu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        flyerMenu.current &&
        !flyerMenu.current.contains(event.target) &&
        toggleMenu
      ) {
        setToggleMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggleMenu]);

  return (
    <nav className={navBackground ? styles.navScroll : ''}>
      <div className={styles.navLinks}>
        <a
          href="https://github.com/oPedroFlores"
          className="hoverText"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> <span>Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/pedrolpflores/"
          className="hoverText"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          <span>Linkedin</span>
        </a>
      </div>
      <div
        ref={flyerMenu}
        className={`${styles.navOptions} ${toggleMenu ? styles.FlyerMenu : ''}`}
      >
        <div className={styles.navButtons}>
          <a className={linkClassName('homePage')} href="#homePage">
            {renderLinkText('homePage', translation.navBar.aboutMe)}
          </a>
          <a className={linkClassName('tecnologies')} href="#tecnologies">
            {renderLinkText('tecnologies', translation.navBar.tecnologies)}
          </a>
          <a className={linkClassName('history')} href="#history">
            {renderLinkText('history', translation.navBar.history)}
          </a>
          <a className={linkClassName('projects')} href="#projects">
            {renderLinkText('projects', translation.navBar.projects)}
          </a>
          <a className={linkClassName('certificates')} href="#certificates">
            {renderLinkText('certificates', translation.navBar.certificates)}
          </a>
          <a className={linkClassName('contact')} href="#contact">
            {renderLinkText('contact', translation.navBar.contact)}
          </a>
        </div>
        <div className={styles.navLanguage}>
          <button
            onClick={() => setLanguage(0)}
            className={language ? '' : styles.activeLinkLanguage}
          >
            PT-BR
          </button>
          <button
            onClick={() => setLanguage(1)}
            className={language ? styles.activeLinkLanguage : ''}
          >
            EN-US
          </button>
        </div>
      </div>
      <button
        className={styles.navMenuButton}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <TfiMenu />
      </button>
    </nav>
  );
};

export default NavBar;
