import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { name } from "../utils/constant";
import profileImage from "../assets/Me.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="logo-link"
          >
            <img
              src={profileImage}
              alt={`${name} Profile`}
              className="profile-image"
            />
            <span className="logo-text">{name}</span>
          </a>
        </motion.div>

        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
