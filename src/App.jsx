import React from 'react';
import './index.css';
import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import TechStrip from './sections/TechStrip.jsx';
import Projects from './sections/Projects.jsx';
import Expertise from './sections/Expertise.jsx';
import About from './sections/About.jsx';
import Milestones from './sections/Milestones.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

const App = () => (
  <>
    <ScrollProgress />
    <Navbar />
    <main>
      <Hero />
      <TechStrip />
      <Projects />
      <Expertise />
      <About />
      <Milestones />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
