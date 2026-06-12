import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import GithubIcon from './GithubIcon';

const Projects = () => {
  const projects = [
    {
      title: "Stage Dashboard - Nature's True Harvest",
      role: "Individual Project",
      description: [
        "Built a responsive dashboard application using React, Tailwind CSS, and Firebase, supporting real-time data management and user authentication with optimized component architecture.",
        "✔ Reduced page load time by 30% through optimized state management.",
        "✔ Achieved 100% responsive design compatibility across devices."
      ],
      tech: ["React.js", "Firebase", "Tailwind CSS", "REST API", "GitHub"],
      link: "https://stagedashboard.naturestrueharvest.in",
      github: "https://github.com/lavanya-434"
    },
    {
      title: "Nature's True Harvest Website",
      role: "Individual Project",
      description: [
        "Built a responsive e-commerce agriculture website using JavaScript and Bootstrap, supporting product filtering and dynamic layouts with optimized component architecture.",
        "✔ Improved Lighthouse Performance Score to 95+ through image optimization.",
        "✔ Enhanced user experience with modern UI components and smooth transitions."
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      link: "https://naturestrueharvest.in",
      github: "https://github.com/lavanya-434"
    },
    {
      title: "FarmVest Website",
      role: "Team Project",
      description: [
        "Built a responsive agriculture investment platform using JavaScript and Bootstrap, integrating REST APIs for real-time data fetching with optimized component architecture.",
        "✔ Developed responsive layouts for mobile, tablet, and desktop devices.",
        "✔ Streamlined cross-browser compatibility resolving CSS inconsistencies."
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "REST API"],
      link: "https://farmvest.in",
      github: "https://github.com/lavanya-434"
    },
    {
      title: "Landify Website",
      role: "Team Project",
      description: [
        "Built dynamic, responsive landing pages and interactive UI sections optimizing for lead generation and accessibility (WCAG) with scalable component architecture.",
        "✔ Increased overall page accessibility scores to 100 on Chrome DevTools.",
        "✔ Integrated scalable CSS architecture for easy maintenance."
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      link: "https://landify.in",
      github: "https://github.com/lavanya-434"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-slate-800">
          Projects
        </h2>
        <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
          A selection of personal and team projects showcasing my frontend development skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card group overflow-hidden flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 flex-grow flex flex-col bg-slate-50 group-hover:bg-white transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <GithubIcon size={24} />
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                <span className="text-sm font-semibold text-primary mb-4">{project.role}</span>

                <div className="mb-6 flex-grow">
                  <ul className="space-y-2 text-slate-600 leading-relaxed text-sm">
                    {project.description.map((item, i) => (
                      <li key={i} className={item.startsWith('✔') ? 'font-medium text-slate-700' : 'list-disc ml-4'}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold text-slate-700 bg-slate-200 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;
