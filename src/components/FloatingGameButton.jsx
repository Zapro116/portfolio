import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGamepad, FaBrain, FaTimes, FaPlay } from "react-icons/fa";
import TechQuizGame from "./TechQuizGame";

const FloatingGameButton = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show welcome message after 3 seconds
    const timer = setTimeout(() => {
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 4000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleGameToggle = () => {
    setIsGameOpen(!isGameOpen);
    setIsExpanded(false);
  };

  return (
    <>
      <div className="floating-game-container">
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              className="welcome-tooltip"
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="tooltip-content">
                <FaBrain />
                <span>Want to test your tech knowledge? Try the quiz! 🚀</span>
              </div>
              <div className="tooltip-arrow" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="floating-game-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
          onClick={handleGameToggle}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="button-icon"
            animate={{ rotate: isGameOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isGameOpen ? <FaTimes /> : <FaGamepad />}
          </motion.div>

          <AnimatePresence>
            {isExpanded && !isGameOpen && (
              <motion.div
                className="button-label"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaPlay size={12} />
                <span>Tech Quiz</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating particles for extra visual appeal */}
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -30, -60],
                x: [0, Math.random() * 20 - 10],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      <TechQuizGame isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
};

export default FloatingGameButton;
