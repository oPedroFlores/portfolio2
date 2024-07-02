import React, { useState } from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import Tecnologies from "./pages/Tecnologies";
import translations from "./translations.json";
import techs from "./techs.json";
import History from "./pages/History";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import GetInTouch from "./pages/GetInTouch";

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
        <History language={currentLanguage} />
        <Projects projects={currentLanguage.projects} />
        <Certificates certificates={currentLanguage.certificates} />
        <GetInTouch />
      </main>
    </>
  );
}

export default App;
