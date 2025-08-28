import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { SiProducthunt, SiReact, SiNetlify } from "react-icons/si";
import { name, github, linkedin, email } from "../utils/constant";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: github,
      label: "GitHub",
      color: "#333",
    },
    {
      icon: <FaLinkedin />,
      href: linkedin,
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: <SiProducthunt />,
      href: "https://www.producthunt.com/products/fynix-2/makers",
      label: "Product Hunt",
      color: "#da552f",
    },
    {
      icon: <FaEnvelope />,
      href: `mailto:${email}`,
      label: "Email",
      color: "#ea4335",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>{name}</h3>
              <p>
                Software Development Engineer passionate about creating
                innovative solutions and exceptional user experiences.
              </p>
              <div className="footer-social">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                    style={{ "--link-color": link.color }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Featured Work</h4>
                <ul>
                  <li>
                    <a
                      href="https://www.producthunt.com/products/fynix-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fynix AI Assistant
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${github}/ticketing`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ticketing System
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${github}/devConnector`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DevConnector
                    </a>
                  </li>
                  <li>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      All Repositories
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Technologies</h4>
                <ul>
                  <li>React.js & Redux</li>
                  <li>TypeScript & JavaScript</li>
                  <li>Node.js & Express</li>
                  <li>GenAI & AI Integration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-info">
              <p>
                Built with{" "}
                <span className="heart">
                  <FaHeart />
                </span>{" "}
                using{" "}
                <span className="tech-stack">
                  <SiReact /> React & <SiNetlify /> Netlify
                </span>
              </p>
              <p>
                &copy; {currentYear} {name}. All rights reserved.
              </p>
            </div>

            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>

        <div className="footer-wave">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="wave-svg"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="wave-shape"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="wave-shape"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="wave-shape"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
