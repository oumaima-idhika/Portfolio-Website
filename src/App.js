
import './App.css';
import Navbarfinal from './components/navbar/Navbarfinal';
import Info from './components/about/Info';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
   <Navbarfinal />
   
  
   <Info />
   <Education />
   <Skills />
   <Projects />
   <Contact />
    </div>
  );
}

export default App;
