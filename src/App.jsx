import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative text-foreground min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 mt-12">
        <p>© {new Date().getFullYear()} Lavanya Gunje. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
