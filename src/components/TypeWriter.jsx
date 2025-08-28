import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypeWriter = ({
  texts = [],
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = "",
  prefix = "",
  suffix = "",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const targetText = texts[currentTextIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < targetText.length) {
            setCurrentText(targetText.slice(0, currentText.length + 1));
          } else {
            // Text complete, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Deletion complete, move to next text
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    texts,
    speed,
    deleteSpeed,
    pauseTime,
  ]);

  // Mark as complete when first text is fully typed (for single text usage)
  useEffect(() => {
    if (texts.length === 1 && currentText === texts[0] && !isComplete) {
      setIsComplete(true);
    }
  }, [currentText, texts, isComplete]);

  return (
    <span className={className}>
      {prefix}
      <span className="typewriter-text">
        {currentText}
        <motion.span
          className="cursor"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          |
        </motion.span>
      </span>
      {suffix}
    </span>
  );
};

export default TypeWriter;
