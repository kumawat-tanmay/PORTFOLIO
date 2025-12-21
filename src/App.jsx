import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 font-sans min-h-screen">
      <Navbar />
      <main>
        {/* IDs must be on the <section> tags for the Scroll Spy to work perfectly */}
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="experience" className="py-20">
          <Experience />
        </section>

        <section id="education" className="py-20">
          <Education />
        </section>

        <section id="contact" className="py-20 pb-40">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;