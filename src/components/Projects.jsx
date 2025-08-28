import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaStar,
  FaEye,
} from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiNodedotjs,
} from "react-icons/si";
import { github } from "../utils/constant";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Fynix AI Coding Assistant",
      description:
        "AI-powered development tool that adapts to your coding style by learning preferences. Features natural language commands, customizable AI workflows, and seamless IDE integration.",
      image: "/api/placeholder/400/300",
      technologies: ["AI/ML", "React", "Node.js", "Python", "API Integration"],
      category: "ai",
      live: "https://www.producthunt.com/products/fynix-2",
      featured: true,
      status: "Featured on Product Hunt",
      achievements: ["890+ followers", "4.9/5 rating", "10+ reviews"],
    },
    {
      title: "DevConnector",
      description:
        "Professional developer networking platform with profile management, post sharing, and real-time messaging capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      category: "web",
      github: `${github}/devConnector`,
      live: "#",
      featured: true,
      status: "Completed",
    },
    {
      title: "Snakes & Ladders Game",
      description:
        "Python-based game implementation with both automatic and manual modes, demonstrating algorithmic thinking.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "Jupyter Notebook", "Game Logic"],
      category: "game",
      github: `${github}/Snakes-and-ladders`,
      live: "#",
      featured: false,
      status: "Educational",
    },
    {
      title: "Ticketing System",
      description:
        "Comprehensive ticketing platform built with TypeScript, featuring real-time updates, user authentication, and scalable microservices architecture.",
      image: "/api/placeholder/400/300",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
      category: "web",
      github: `${github}/ticketing`,
      live: "#",
      featured: false,
      status: "On Hold",
    },
    {
      title: "VantageDev",
      description:
        "Modern web application showcasing responsive design principles and advanced frontend techniques.",
      image: "/api/placeholder/400/300",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "web",
      github: `${github}/vantageDev`,
      live: "#",
      featured: false,
      status: "Live",
    },
    {
      title: "IoT Dashboard",
      description:
        "Real-time IoT data visualization dashboard with interactive charts and device management capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["JavaScript", "Node.js", "Socket.io", "Chart.js"],
      category: "iot",
      github: `${github}/IOT1`,
      live: "#",
      featured: false,
      status: "Prototype",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI/ML" },
    { id: "web", label: "Web Apps" },
    { id: "iot", label: "IoT" },
    { id: "game", label: "Games" },
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      React: <SiReact color="#61dafb" />,
      JavaScript: <SiJavascript color="#f7df1e" />,
      TypeScript: <SiTypescript color="#3178c6" />,
      Python: <SiPython color="#3776ab" />,
      HTML5: <SiHtml5 color="#e34f26" />,
      "Node.js": <SiNodedotjs color="#339933" />,
    };
    return iconMap[tech] || <FaCode />;
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and contributions
            </p>
          </motion.div>

          <motion.div className="project-filters" variants={itemVariants}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  filter === category.id ? "active" : ""
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`project-card ${project.featured ? "featured" : ""}`}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <FaStar /> Featured
                  </div>
                )}

                <div className="project-image">
                  <div className="image-placeholder">
                    <FaCode size={48} />
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View on GitHub"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View live project"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-status">{project.status}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {project.achievements && (
                    <div className="project-achievements">
                      {project.achievements.map((achievement, i) => (
                        <span key={i} className="achievement-badge">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-item">
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="projects-stats" variants={itemVariants}>
            <div className="stats-grid">
              <div className="stat-item">
                <FaGithub />
                <span className="stat-number">28</span>
                <span className="stat-label">GitHub Repositories</span>
              </div>
              <div className="stat-item">
                <FaStar />
                <span className="stat-number">4</span>
                <span className="stat-label">Starred Projects</span>
              </div>
              <div className="stat-item">
                <FaEye />
                <span className="stat-number">890+</span>
                <span className="stat-label">Fynix Followers</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="github-cta" variants={itemVariants}>
            <h3>Want to see more?</h3>
            <p>
              Check out my GitHub profile for additional projects and
              contributions
            </p>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hover:text-white"
            >
              <FaGithub />
              View GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
