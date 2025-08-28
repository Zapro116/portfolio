import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code of professional standard with 85%+ test coverage",
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description:
        "Building GenAI-based systems and cutting-edge solutions like Fynix AI coding assistant",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description:
        "Adapting to new challenges across diverse projects and technologies",
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Thriving in Agile environments with cross-functional teams",
    },
  ];

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
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-content">
                <h3>My Journey</h3>
                <p>
                  With over <strong>3.5+ years</strong> of professional
                  experience as a Software Development Engineer, I've worked at
                  leading companies like <strong>FYND</strong> and{" "}
                  <strong>Innovaccer</strong>, building impactful solutions.
                  From developing the{" "}
                  <strong>Fynix AI VS Code extension</strong>
                  that became #1 Product of the Day on Product Hunt to creating
                  <strong> GenAI-based real-time Q&A systems</strong> and{" "}
                  <strong>FHIR-compliant microservices</strong>, I've
                  consistently delivered innovative solutions.
                </p>

                <p>
                  My experience spans <strong>Agile environments</strong>,
                  version control with Git, project management with Jira, and
                  modern build tools like Babel and Webpack. I'm passionate
                  about{" "}
                  <strong>writing clean code of professional standard</strong>
                  and have implemented robust unit testing across projects using
                  Jest and React Testing Library.
                </p>

                <p>
                  Currently working as a{" "}
                  <strong>Software Development Engineer at FYND</strong>, I'm
                  contributing to cutting-edge AI-powered developer tools and
                  driving innovation in the VS Code extension ecosystem. I'm
                  proud to be a core frontend engineer for{" "}
                  <strong>Fynix</strong>, the AI-powered coding assistant that
                  achieved #1 Product of the Day on Product Hunt.
                </p>

                <div className="highlight-box">
                  <h4>🎯 Current Focus</h4>
                  <p>
                    Building next-generation{" "}
                    <strong>AI-powered developer tools</strong> and creating
                    innovative solutions that enhance productivity and
                    streamline the development experience worldwide.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-values" variants={itemVariants}>
              <h3>What Drives Me</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="value-card"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">3.5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">85%+</span>
                <span className="stat-label">Test Coverage</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Multiple</span>
                <span className="stat-label">GenAI Systems</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Agile</span>
                <span className="stat-label">Methodology</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
