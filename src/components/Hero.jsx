import React from 'react';
import { ArrowRight, Download, User, Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';
import photo from '../assets/photo.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10 animate-fade-in">

        <div className="flex-1 text-center md:text-left">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-green-100 text-sm font-semibold text-primary">
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
            Hi, I'm <br className="hidden md:block" />
            <span className="inline-block cursor-default">
              {"Lavanya Gunje".split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block text-primary transition-all duration-700 ease-in-out hover:text-green-300 hover:-translate-y-2 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.9)] z-10 hover:z-20 relative"
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            React Developer & Frontend Engineer specializing in Responsive Web Development, Performance Optimization, and scalable UI Component Development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
              <Download size={20} />
              Download Resume
            </a>
            <a href="#projects" className="group flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Right Content - Image with concentric circles from design */}
        <div className="flex-1 flex justify-center md:justify-end w-full relative h-[400px] md:h-[500px] items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>

          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">

            {/* Outer dashed circle */}
            <div className="absolute w-full h-full rounded-full border-[1.5px] border-dashed border-[#489a95] opacity-50 z-0"></div>

            {/* Middle light solid circle */}
            <div className="absolute w-[90%] h-[90%] rounded-full bg-[#ccece6] opacity-30 z-0"></div>

            {/* Dark teal offset circle behind image */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-[#19555c] z-10 -ml-4 mt-6"></div>

            {/* Image container */}
            <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden z-20 border-[6px] border-[#f8fafc]">
              <img
                src={photo}
                alt="Lavanya Gunje"
                className="w-full h-full object-cover scale-110"
              />
            </div>

            {/* Small dotted matrix decorative behind the image */}
            <div className="absolute top-10 right-4 opacity-30 z-0 animate-float" style={{ animationDelay: '1s' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="1.5" fill="#19555c" />
                <circle cx="10" cy="2" r="1.5" fill="#19555c" />
                <circle cx="18" cy="2" r="1.5" fill="#19555c" />
                <circle cx="2" cy="10" r="1.5" fill="#19555c" />
                <circle cx="10" cy="10" r="1.5" fill="#19555c" />
                <circle cx="18" cy="10" r="1.5" fill="#19555c" />
                <circle cx="2" cy="18" r="1.5" fill="#19555c" />
                <circle cx="10" cy="18" r="1.5" fill="#19555c" />
                <circle cx="18" cy="18" r="1.5" fill="#19555c" />
              </svg>
            </div>

            {/* Squiggly line decorative element */}
            <div className="absolute bottom-10 -left-6 opacity-40 z-0 animate-float" style={{ animationDelay: '2s' }}>
              <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q 15 0, 25 10 T 45 10" stroke="#489a95" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
