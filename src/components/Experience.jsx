import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-slate-800">
          Experience
        </h2>

        <div className="glass-card p-8 md:p-10 relative animate-slide-up">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary">
            <Briefcase size={32} />
          </div>

          <div className="ml-8 md:ml-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Frontend Developer Employee</h3>
                <h4 className="text-xl text-primary font-medium mt-1">Markwave.ai</h4>
              </div>
              <span className="text-slate-500 font-medium mt-2 md:mt-0 bg-white px-4 py-1 rounded-full shadow-sm">
                June 2026
              </span>
            </div>

            <ul className="space-y-3 mt-6 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <span>Developing responsive and user-friendly web applications using HTML, CSS, JavaScript, Bootstrap, and React.js.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <span>Working on real-time projects involving frontend UI development and responsive web design.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <span>Collaborating with team members to improve website performance, accessibility, and user experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <span>Implementing reusable React.js components and integrating Firebase services for authentication and database management.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <span>Gaining hands-on experience in debugging, version control, API integration, and cross-browser compatibility.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
