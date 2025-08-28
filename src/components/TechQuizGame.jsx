import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaTrophy,
  FaRedo,
  FaBrain,
  FaLightbulb,
} from "react-icons/fa";

const TechQuizGame = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("playing"); // playing, finished
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [streak, setStreak] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const questions = [
    {
      question: "What does 'React' primarily help developers build?",
      options: ["Mobile Apps", "User Interfaces", "Databases", "APIs"],
      correct: 1,
      category: "Frontend",
    },
    {
      question:
        "Which programming language is known as 'the language of the web'?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correct: 2,
      category: "Languages",
    },
    {
      question: "What does 'npm' stand for?",
      options: [
        "Node Package Manager",
        "New Project Manager",
        "Next Programming Method",
        "Node Process Module",
      ],
      correct: 0,
      category: "Tools",
    },
    {
      question: "In programming, what does 'DRY' principle mean?",
      options: [
        "Debug Rapidly Yearly",
        "Don't Repeat Yourself",
        "Dynamic Resource Yielding",
        "Data Retrieval Yearly",
      ],
      correct: 1,
      category: "Principles",
    },
    {
      question: "Which HTTP status code means 'Not Found'?",
      options: ["200", "301", "404", "500"],
      correct: 2,
      category: "Web",
    },
    {
      question: "What is the most popular version control system?",
      options: ["SVN", "Git", "Mercurial", "CVS"],
      correct: 1,
      category: "Tools",
    },
    {
      question: "Which CSS framework is known for utility-first classes?",
      options: ["Bootstrap", "Foundation", "Tailwind CSS", "Bulma"],
      correct: 2,
      category: "CSS",
    },
    {
      question: "What does 'API' stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Programming Integration",
        "Automated Process Integration",
        "Application Process Interface",
      ],
      correct: 0,
      category: "Concepts",
    },
    {
      question: "Which database type is MongoDB?",
      options: ["Relational", "NoSQL", "Graph", "Key-Value"],
      correct: 1,
      category: "Database",
    },
    {
      question: "What does 'CI/CD' stand for in DevOps?",
      options: [
        "Code Integration/Code Deployment",
        "Continuous Integration/Continuous Deployment",
        "Central Integration/Central Development",
        "Custom Integration/Custom Delivery",
      ],
      correct: 1,
      category: "DevOps",
    },
    {
      question: "Which programming paradigm focuses on 'objects'?",
      options: ["Functional", "Procedural", "Object-Oriented", "Declarative"],
      correct: 2,
      category: "Programming",
    },
    {
      question: "In Agile methodology, what is a 'Sprint'?",
      options: [
        "A coding competition",
        "A time-boxed iteration",
        "A bug fix",
        "A deployment process",
      ],
      correct: 1,
      category: "Methodology",
    },
    {
      question: "Which company created React?",
      options: ["Google", "Microsoft", "Facebook (Meta)", "Twitter"],
      correct: 2,
      category: "Tech Trivia",
    },
    {
      question: "What does 'localhost' typically resolve to?",
      options: ["192.168.1.1", "127.0.0.1", "0.0.0.0", "8.8.8.8"],
      correct: 1,
      category: "Networking",
    },
    {
      question: "Which is NOT a JavaScript framework/library?",
      options: ["Vue.js", "Angular", "Django", "Svelte"],
      correct: 2,
      category: "Frontend",
    },
    {
      question: "What does 'CSS' stand for?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
      ],
      correct: 1,
      category: "CSS",
    },
    {
      question: "Which HTTP method is used to retrieve data?",
      options: ["POST", "PUT", "GET", "DELETE"],
      correct: 2,
      category: "Web",
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1,
      category: "Algorithms",
    },
    {
      question: "Which company developed TypeScript?",
      options: ["Google", "Facebook", "Microsoft", "Apple"],
      correct: 2,
      category: "Languages",
    },
    {
      question: "What does 'JSON' stand for?",
      options: [
        "Java Serialized Object Notation",
        "JavaScript Object Notation",
        "Java Script Online Notation",
        "Just Simple Object Names",
      ],
      correct: 1,
      category: "Data",
    },
  ];

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 8); // Show 8 random questions per game
  };

  useEffect(() => {
    if (!isOpen) {
      resetGame();
    }
  }, [isOpen]);

  useEffect(() => {
    // Initialize shuffled questions on mount
    if (shuffledQuestions.length === 0) {
      setShuffledQuestions(shuffleArray(questions));
    }
  }, []);

  useEffect(() => {
    let timer;
    if (gameState === "playing" && timeLeft > 0 && !showResult) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(-1); // Time up
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameState, showResult]);

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameState("playing");
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(15);
    setStreak(0);
    setShuffledQuestions(shuffleArray(questions));
  };

  const handleAnswer = (answerIndex) => {
    if (showResult) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect =
      answerIndex === shuffledQuestions[currentQuestion]?.correct;
    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft / 3);
      const streakBonus = streak * 2;
      setScore(score + 10 + timeBonus + streakBonus);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setTimeLeft(15);
      } else {
        setGameState("finished");
      }
    }, 2000);
  };

  const getScoreMessage = () => {
    const percentage = (score / (shuffledQuestions.length * 10)) * 100;
    if (percentage >= 90) return "🚀 Tech Wizard! Outstanding!";
    if (percentage >= 70) return "💻 Great job! You know your stuff!";
    if (percentage >= 50) return "📚 Good effort! Keep learning!";
    return "🌱 Keep exploring tech! Every expert was once a beginner!";
  };

  const getScoreColor = () => {
    const percentage = (score / (shuffledQuestions.length * 10)) * 100;
    if (percentage >= 90) return "#10b981";
    if (percentage >= 70) return "#3b82f6";
    if (percentage >= 50) return "#f59e0b";
    return "#ef4444";
  };

  if (!isOpen || shuffledQuestions.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="quiz-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="quiz-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="quiz-header">
            <div className="quiz-title">
              <FaBrain />
              <span>Tech Challenge Quiz</span>
            </div>
            <button className="close-btn" onClick={onClose}>
              <FaTimes />
            </button>
          </div>

          {gameState === "playing" && (
            <div className="quiz-content">
              <div className="quiz-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / shuffledQuestions.length) * 100
                      }%`,
                    }}
                  />
                </div>
                <span className="progress-text">
                  {currentQuestion + 1} / {shuffledQuestions.length}
                </span>
              </div>

              <div className="quiz-stats">
                <div className="stat">
                  <span className="stat-label">Score</span>
                  <span className="stat-value">{score}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Streak</span>
                  <span className="stat-value">{streak}x</span>
                </div>
                <div className="stat timer">
                  <span className="stat-label">Time</span>
                  <span
                    className="stat-value"
                    style={{ color: timeLeft <= 5 ? "#ef4444" : "#10b981" }}
                  >
                    {timeLeft}s
                  </span>
                </div>
              </div>

              <div className="question-section">
                <div className="question-category">
                  {shuffledQuestions[currentQuestion].category}
                </div>
                <h3 className="question-text">
                  {shuffledQuestions[currentQuestion].question}
                </h3>
              </div>

              <div className="answers-grid">
                {shuffledQuestions[currentQuestion].options.map(
                  (option, index) => (
                    <motion.button
                      key={index}
                      className={`answer-btn ${
                        selectedAnswer === index
                          ? index === shuffledQuestions[currentQuestion].correct
                            ? "correct"
                            : "incorrect"
                          : ""
                      } ${
                        showResult &&
                        index === shuffledQuestions[currentQuestion].correct
                          ? "correct"
                          : ""
                      }`}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="answer-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="answer-text">{option}</span>
                    </motion.button>
                  )
                )}
              </div>

              {showResult && (
                <motion.div
                  className="result-feedback"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {selectedAnswer ===
                  shuffledQuestions[currentQuestion].correct ? (
                    <div className="feedback correct-feedback">
                      <FaLightbulb />
                      <span>
                        Correct! +{10 + Math.floor(timeLeft / 3) + streak * 2}{" "}
                        points
                      </span>
                    </div>
                  ) : (
                    <div className="feedback incorrect-feedback">
                      <span>
                        {timeLeft === 0 ? "Time's up!" : "Not quite right."} The
                        answer is{" "}
                        {
                          shuffledQuestions[currentQuestion].options[
                            shuffledQuestions[currentQuestion].correct
                          ]
                        }
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          )}

          {gameState === "finished" && (
            <motion.div
              className="quiz-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="results-header">
                <FaTrophy style={{ color: getScoreColor() }} />
                <h2>Quiz Complete!</h2>
              </div>

              <div className="final-score">
                <div
                  className="score-circle"
                  style={{ borderColor: getScoreColor() }}
                >
                  <span
                    className="score-number"
                    style={{ color: getScoreColor() }}
                  >
                    {score}
                  </span>
                  <span className="score-label">points</span>
                </div>
              </div>

              <div className="score-message" style={{ color: getScoreColor() }}>
                {getScoreMessage()}
              </div>

              <div className="results-stats">
                <div className="result-stat">
                  <span className="result-label">Correct Answers</span>
                  <span className="result-value">
                    {questions.filter((_, i) => i < currentQuestion + 1).length}{" "}
                    / {shuffledQuestions.length}
                  </span>
                </div>
                <div className="result-stat">
                  <span className="result-label">Accuracy</span>
                  <span className="result-value">
                    {Math.round(
                      (score / (shuffledQuestions.length * 10)) * 100
                    )}
                    %
                  </span>
                </div>
              </div>

              <div className="results-actions">
                <button className="play-again-btn" onClick={resetGame}>
                  <FaRedo />
                  Play Again
                </button>
                <button className="close-results-btn" onClick={onClose}>
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechQuizGame;
