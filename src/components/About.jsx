import React from 'react';

const About = () => {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js",
    "Bootstrap", "Firebase", "Java", "Oracle SQL", "Git", "VS Code"
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
        <h2 className="text-4xl font-bold mb-16 text-center text-slate-800">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card p-6 border-l-4 border-l-primary">
                  <h4 className="text-xl font-semibold text-slate-800">{edu.degree}</h4>
                  <p className="text-slate-600 font-medium mt-1">{edu.institution}</p>
                  <div className="flex justify-between mt-2 text-sm text-slate-500">
                    <span>{edu.year}</span>
                    <span className="font-semibold text-primary">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-primary">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="text-primary font-bold mt-1">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 text-primary">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-700 border border-green-100 px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="glass-card p-8 bg-slate-50 border border-slate-200">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Career Objective</h3>
              <p className="text-slate-600 leading-relaxed">
                Results-driven Frontend Developer with a strong foundation in web development and practical experience in creating responsive applications using HTML, CSS, JavaScript, React.js, Bootstrap, Firebase, and SQL. Skilled in developing user-centric interfaces, optimizing performance, and collaborating with teams to deliver scalable web solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
