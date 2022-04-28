import { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';
import Skills from './components/skills/Skills';
import Nav from './components/nav/Nav';
import { ThemeContext } from './context';

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white",
        }}
        >
            <Nav />
            <Intro />
            <About />
            <ProjectList />
            <Skills />
            <Contact />
        </div>

    );
};

export default App;