import React, { useState } from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import HomePage from './pages/HomePage';
import Tecnologies from './pages/Tecnologies';
import translations from './translations.json';
import techs from './techs.json';
import History from './pages/History';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import GetInTouch from './pages/GetInTouch';

import curriculopt from '../src/cv/portuguesecv.pdf';
import curriculoen from '../src/cv/englishcv.pdf';

function App() {
  const [language, setLanguage] = useState(0);

  const currentLanguage = language === 0 ? translations.pt : translations.en;
  const curriculo = language === 1 ? curriculoen : curriculopt;
  return (
    <>
      <NavBar
        translation={currentLanguage}
        setLanguage={setLanguage}
        language={language}
      />
      <main>
        <HomePage language={currentLanguage} curriculo={curriculo} />
        <Tecnologies
          language={currentLanguage}
          techs={language ? techs.en : techs.pt}
        />
        <History language={currentLanguage} />
        <Projects projects={currentLanguage.projects} language={language} />
        <Certificates certificates={currentLanguage.certificates} />
        <GetInTouch language={currentLanguage.getInTouch} />
      </main>
    </>
  );
}

export default App;
