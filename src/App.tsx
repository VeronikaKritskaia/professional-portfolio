import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Contact,
  Navigation,
  Footer,
} from "./components";
import Publication from "./components/Publication";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <AboutMe/>
            <Expertise/>
            <Projects/>
            <Timeline/>
            <Publication/>
            <Contact/>
        </FadeIn>
        <Footer/>
    </div>
    );
}

export default App;