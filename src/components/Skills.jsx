import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiSass,
  SiBootstrap,
  SiWebpack,
  SiBabel,
  SiGit,
  SiJira,
  SiJest,
  SiAmazonwebservices,
  SiHeroku,
  SiDocker,
  SiExpress,
  SiFlask,
  SiDjango,
  SiLinux,
  SiPostman,
} from "react-icons/si";
import {
  FaDatabase,
  FaTools,
  FaCloud,
  FaCode,
  FaBrain,
  FaAws,
} from "react-icons/fa";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <FaCode />,
      color: "#61dafb",
      skills: [
        {
          name: "React.js",
          icon: <SiReact />,
          level: 95,
          experience: "3+ years",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          level: 90,
          experience: "3+ years",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          level: 85,
          experience: "2+ years",
        },
        { name: "Redux", icon: <SiRedux />, level: 88, experience: "2+ years" },
        { name: "HTML5", icon: <SiHtml5 />, level: 95, experience: "3+ years" },
        { name: "CSS3", icon: <SiCss3 />, level: 90, experience: "3+ years" },
        { name: "SASS", icon: <SiSass />, level: 82, experience: "2+ years" },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          level: 85,
          experience: "3+ years",
        },
      ],
    },
    backend: {
      title: "Backend & Database",
      icon: <FaDatabase />,
      color: "#339933",
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
          level: 80,
          experience: "2+ years",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          level: 78,
          experience: "2+ years",
        },
        {
          name: "Python",
          icon: <SiPython />,
          level: 75,
          experience: "1+ year",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          level: 82,
          experience: "2+ years",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          level: 70,
          experience: "1+ year",
        },
        { name: "MySQL", icon: <SiMysql />, level: 72, experience: "1+ year" },
        { name: "Flask", icon: <SiFlask />, level: 68, experience: "1+ year" },
        {
          name: "Django",
          icon: <SiDjango />,
          level: 65,
          experience: "1+ year",
        },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: <FaTools />,
      color: "#f14e32",
      skills: [
        { name: "Git", icon: <SiGit />, level: 90, experience: "3+ years" },
        {
          name: "Webpack",
          icon: <SiWebpack />,
          level: 85,
          experience: "2+ years",
        },
        { name: "Babel", icon: <SiBabel />, level: 82, experience: "2+ years" },
        { name: "Jest", icon: <SiJest />, level: 88, experience: "2+ years" },
        { name: "Jira", icon: <SiJira />, level: 85, experience: "3+ years" },
        {
          name: "Docker",
          icon: <SiDocker />,
          level: 70,
          experience: "1+ year",
        },
        { name: "Linux", icon: <SiLinux />, level: 75, experience: "2+ years" },
        {
          name: "Postman",
          icon: <SiPostman />,
          level: 80,
          experience: "2+ years",
        },
      ],
    },
    cloud: {
      title: "Cloud & Deployment",
      icon: <FaCloud />,
      color: "#ff9900",
      skills: [
        {
          name: "AWS",
          icon: <SiAmazonwebservices />,
          level: 72,
          experience: "1+ year",
        },
        {
          name: "Heroku",
          icon: <SiHeroku />,
          level: 78,
          experience: "2+ years",
        },
        {
          name: "Netlify",
          icon: <FaCloud />,
          level: 80,
          experience: "2+ years",
        },
        { name: "Vercel", icon: <FaCloud />, level: 75, experience: "1+ year" },
      ],
    },
    ai: {
      title: "AI & Innovation",
      icon: <FaBrain />,
      color: "#8b5cf6",
      skills: [
        {
          name: "GenAI Systems",
          icon: <FaBrain />,
          level: 85,
          experience: "1+ year",
        },
        {
          name: "FHIR Compliance",
          icon: <FaCode />,
          level: 80,
          experience: "1+ year",
        },
        {
          name: "AI Integration",
          icon: <FaBrain />,
          level: 82,
          experience: "1+ year",
        },
        {
          name: "Micro Frontends",
          icon: <FaCode />,
          level: 88,
          experience: "2+ years",
        },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Technologies and tools I work with professionally
            </p>
          </motion.div>

          <motion.div className="skills-navigation" variants={itemVariants}>
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`nav-btn ${activeCategory === key ? "active" : ""}`}
                onClick={() => setActiveCategory(key)}
                style={{ "--accent-color": category.color }}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </motion.div>

          <motion.div className="skills-display" variants={itemVariants}>
            <div className="category-header">
              <div
                className="category-icon"
                style={{ color: skillCategories[activeCategory].color }}
              >
                {skillCategories[activeCategory].icon}
              </div>
              <h3>{skillCategories[activeCategory].title}</h3>
            </div>

            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="skill-header">
                    <div className="skill-info">
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-details">
                        <h4>{skill.name}</h4>
                        <span className="skill-experience">
                          {skill.experience}
                        </span>
                      </div>
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>

                  <div className="skill-progress">
                    <motion.div
                      className="progress-bar"
                      custom={skill.level}
                      variants={progressVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      style={{
                        backgroundColor: skillCategories[activeCategory].color,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-grid">
              <div className="summary-item">
                <h4>Primary Focus</h4>
                <p>Frontend Development with React.js ecosystem</p>
              </div>
              <div className="summary-item">
                <h4>Testing Excellence</h4>
                <p>85%+ code coverage with Jest & React Testing Library</p>
              </div>
              <div className="summary-item">
                <h4>Architecture</h4>
                <p>Scalable micro frontend applications</p>
              </div>
              <div className="summary-item">
                <h4>Innovation</h4>
                <p>GenAI systems & FHIR-compliant solutions</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="skills-achievements" variants={itemVariants}>
            <h3>Key Achievements</h3>
            <div className="achievements-grid">
              <div className="achievement-item">
                <div className="achievement-icon">🏆</div>
                <div className="achievement-content">
                  <h4>Fynix AI Success</h4>
                  <p>
                    Co-created AI coding assistant with 890+ followers on
                    Product Hunt
                  </p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">📊</div>
                <div className="achievement-content">
                  <h4>Test Coverage Excellence</h4>
                  <p>
                    Consistently achieved 85%+ code coverage across projects
                  </p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🚀</div>
                <div className="achievement-content">
                  <h4>Scalable Solutions</h4>
                  <p>
                    Built micro frontend applications serving thousands of users
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
