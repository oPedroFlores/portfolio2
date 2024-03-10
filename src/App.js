import React, { useState } from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import HomePage from './pages/HomePage';
import Tecnologies from './pages/Tecnologies';
import translations from './translations.json';
import techs from './techs.json';

function App() {
  const [language, setLanguage] = useState(0);

  const currentLanguage = language === 0 ? translations.pt : translations.en;

  return (
    <>
      <NavBar language={currentLanguage} setLanguage={setLanguage} />
      <main>
        <HomePage language={currentLanguage} />
        <Tecnologies
          language={currentLanguage}
          techs={language ? techs.en : techs.pt}
        />
      </main>
    </>
  );
}

export default App;
