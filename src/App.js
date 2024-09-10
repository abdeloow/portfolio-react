import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div id="hero"><Hero /></div>
        <div id="skills"><Skills /></div>
        <div id="work-experience"><WorkExperience /></div>
        <div id="project-showcase"><ProjectShowcase /></div>
        <div id="contact-me"><ContactMe /></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
