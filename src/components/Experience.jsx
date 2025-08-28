import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer 1",
      company: "FYND",
      location: "Mumbai, Maharashtra",
      period: "Oct 2024 - Present",
      duration: "Current",
      type: "Full-time",
      achievements: [
        "Contributed as Core Frontend engineer to Fynix, an AI-powered VS Code extension that became #1 Product of the Day on Product Hunt",
        "Built performant, scalable UIs using React.js, TypeScript, Mantine, Zustand, and CSS-in-JS",
        "Engineered frontend systems capable of handling streaming data and dynamic input for live code analysis",
        "Developed real-time AI-driven features like /fix, /refactor, and code translation",
        "Collaborated with backend, product, and design teams to drive key architectural decisions and improve platform adoption",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Mantine",
        "Zustand",
        "CSS-in-JS",
        "VS Code Extension API",
      ],
      highlight: true,
      link: "https://www.fynd.com/",
    },
    {
      title: "Software Development Engineer 1",
      company: "Innovaccer",
      location: "Noida, Uttar Pradesh",
      period: "Jan 2022 - Apr 2024",
      duration: "2 years 4 months",
      type: "Full-time",
      achievements: [
        "Engineered GenAI-based Real-Time Q&A Response System UI with React.js, Redux, integrating microfrontend modules for live calls",
        "Led development of CRM Workqueue with highly responsive UI, dynamically rendering web forms for 200+ agents",
        "Identified and resolved code bottlenecks, significantly improving frontend performance across projects",
        "Created FHIR-based FastAPI microservice for converting custom API data to FHIR format with dynamic query generation",
        "Implemented robust unit testing with Jest and React Testing Library, achieving over 85% code coverage",
      ],
      technologies: [
        "React.js",
        "Redux",
        "JavaScript",
        "TypeScript",
        "CSS-in-JS",
        "FastAPI",
        "FHIR",
        "Jest",
        "React Testing Library",
      ],
      highlight: true,
      link: "https://innovaccer.com/",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional journey at FYND and Innovaccer, building AI-powered
            solutions
          </p>
        </div>

        <div className="experiences-list">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card"
              style={{
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
                animation: `fadeInUp 0.6s ease forwards ${index * 0.2}s`,
              }}
            >
              <div className="experience-number">#{index + 1}</div>
              <div className="experience-main">
                <div className="experience-header">
                  <div className="experience-title-row">
                    <h3 className="job-title">{exp.title}</h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                      >
                        <FaChevronRight />
                      </a>
                    )}
                  </div>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="job-type">{exp.type}</span>
                  </div>
                  <div className="date-location">
                    <div className="date-info">
                      <FaCalendarAlt />
                      <span>
                        {exp.period} ({exp.duration})
                      </span>
                    </div>
                    <div className="location-info">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="achievements-section">
                  <h4>Key Achievements</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies-section">
                  <h4>Technologies</h4>
                  <div className="tech-tags-list">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-grid">
            <div className="summary-item">
              <h4>Total Experience</h4>
              <p>3.5+ years of professional development</p>
            </div>
            <div className="summary-item">
              <h4>Specialization</h4>
              <p>Frontend Engineering & GenAI Systems</p>
            </div>
            <div className="summary-item">
              <h4>Current Focus</h4>
              <p>AI-Powered Developer Tools & UX Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
