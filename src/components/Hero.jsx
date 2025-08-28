import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";
import { SiProducthunt, SiReact, SiWebpack, SiVite } from "react-icons/si";
import TypeWriter from "./TypeWriter";
import { name, role, github, linkedin, resume } from "../utils/constant";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="cursor-pointer" />,
      href: github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="cursor-pointer" />,
      href: linkedin,
      label: "LinkedIn",
    },
    {
      icon: <SiProducthunt className="cursor-pointer" />,
      href: "https://www.producthunt.com/products/fynix-2",
      label: "Product Hunt",
    },
  ];

  const handleDownloadCV = () => {
    window.open(resume, "_blank");
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="highlight">{name}</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <TypeWriter
                texts={[
                  role,
                  "AI Enthusiast",
                  "React.js Expert",
                  "Tech Innovator",
                  "Frontend Developer",
                  "Product Builder",
                  "Problem Solver",
                  "Team Player",
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
              />
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Frontend developer with <strong>3.5+ years</strong> of experience
              building <strong>scalable React applications</strong>,{" "}
              <strong>GenAI-based systems</strong>, and{" "}
              <strong>micro frontend architectures</strong>. Maker of{" "}
              <a
                href="https://www.producthunt.com/products/fynix-2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link cursor-pointer"
              >
                Fynix AI coding assistant
              </a>
              .
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="stat">
                <span className="stat-number">3.5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">85%+</span>
                <span className="stat-label">Code Coverage</span>
              </div>
              <div className="stat">
                <span className="stat-number">28</span>
                <span className="stat-label">GitHub Repos</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={() => {
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>

              <motion.button
                className="btn btn-secondary"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download CV
              </motion.button>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link cursor-pointer"
                  aria-label={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-image">
              <motion.div
                className="image-placeholder"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="avatar">HC</div>
              </motion.div>
              <div className="floating-elements">
                <div className="floating-element react">
                  <SiReact />
                </div>
                <div className="floating-element js">JS</div>
                <div className="floating-element webpack">
                  <SiWebpack />
                </div>
                <div className="floating-element vite">
                  <SiVite />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
