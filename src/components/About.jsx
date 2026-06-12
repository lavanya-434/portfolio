import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const skills = {
    Frontend: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Web Design", "Component-Based Architecture", "State Management"],
    Tools: ["Git", "GitHub", "VS Code", "Figma", "vercel"],
    Concepts: ["REST API Integration", "API Consumption", "JSON", "Async JavaScript", "Lazy Loading", "Code Splitting", "Accessibility (WCAG)", "Cross-Browser Compatibility", "Performance Optimization", "Mobile-First Design"]
  };

  const whatIDo = [
    "Build responsive React applications",
    "Develop reusable UI components",
    "Integrate REST APIs",
    "Optimize website performance",
    "Create accessible and mobile-friendly interfaces",
    "Convert Figma designs into production-ready code"
  ];

  const education = [
    {
      degree: "Bachelor of Technology (ECE)",
      institution: "Krishna Chaitanya Institute of Technology and Sciences",
      year: "2021-2025",
      score: "CGPA: 7.55"
    },
    {
      degree: "Intermediate Education",
      institution: "Kamala Junior College, Markapur",
      year: "2019-2021",
      score: "Marks: 765"
    },
    {
      degree: "Secondary Education",
      institution: "ZPHS Girls, Markapur",
      year: "2018-2019",
      score: "CGPA: 9.2"
    }
  ];

  const certifications = [
    "Full Stack Java Development - CareerIT Institute",
    "HTML, CSS and JavaScript Certified Associate - CareerIT, 2025",
    "JAVA Certification Associate - CareerIT, 2025"
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-slate-800">
          About Me
        </h2>

        {/* Strong Professional Summary */}
        <div className="glass-card p-8 mb-16 bg-white border-l-4 border-l-primary animate-slide-up">
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            Frontend Developer with experience building responsive and accessible web applications using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and REST APIs. Skilled in creating high-performance user interfaces, optimizing web performance, and delivering user-centered digital experiences. Passionate about modern frontend development and scalable UI architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
            
            <div className="space-y-6 mb-12">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.Frontend.map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-md text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.Tools.map((skill, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-md text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.Concepts.map((skill, index) => (
                    <span key={index} className="bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-md text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-primary">What I Do</h3>
            <ul className="space-y-3">
              {whatIDo.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <div key={index} className="glass-card p-6 border-l-4 border-l-primary bg-white">
                  <h4 className="text-xl font-semibold text-slate-800">{edu.degree}</h4>
                  <p className="text-slate-600 font-medium mt-1">{edu.institution}</p>
                  <div className="flex justify-between mt-2 text-sm text-slate-500">
                    <span>{edu.year}</span>
                    <span className="font-semibold text-primary">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 text-primary">Certifications</h3>
            <ul className="space-y-3 glass-card p-6 bg-white">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="text-primary font-bold mt-1">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
