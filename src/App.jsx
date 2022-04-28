import { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';
import Skills from './components/skills/Skills';
import Nav from './components/nav/Nav';
import { ThemeContext } from './context';

const App = () => {
    // THIS PART OF THE BODY BEFORE THE RETURN STATEMNTS IS USED FOR DECLARING ANY VARIABLES/FUNCTIONS AND SETTING UP STATE USED IN THE RETURN BLOCK
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        // THIS IS WHAT GETS RENDERED ON THE UI
        // TERNARY OPERATOR IS ACONDTIONAL STATEMENT: CONDITION ? TRUE RENDER THIS ; FALSE RENDER THIS
        <div style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white",
        }}
        >
            <Nav />
            {/* <Intro />
            <About />
            <ProjectList />
            <Skills />
            <Contact /> */}
        </div>

    );
};

export default App;