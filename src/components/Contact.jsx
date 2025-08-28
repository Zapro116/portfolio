import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaBuilding,
} from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";
import { email, linkedin, github } from "../utils/constant";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "#ea4335",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Hariom Chaurasia",
      href: linkedin,
      color: "#0077b5",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "Zapro116",
      href: github,
      color: "#333",
    },
    {
      icon: <SiProducthunt />,
      label: "Product Hunt",
      value: "Fynix Maker",
      href: "https://www.producthunt.com/products/fynix-2/makers",
      color: "#da552f",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if we're in development mode
    const isDevelopment =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    try {
      if (isDevelopment) {
        // Simulate successful submission in development
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success(
          "✅ Form submission successful! (Development Mode - No email sent)",
          {
            position: "top-right",
            autoClose: 5000,
          }
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        // Production - attempt to use Netlify function
        const response = await fetch("/.netlify/functions/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let result;
        try {
          result = await response.json();
        } catch (jsonError) {
          throw new Error("Invalid response from server");
        }

        toast.success(
          result.message ||
            "Message sent successfully! I'll get back to you soon.",
          {
            position: "top-right",
            autoClose: 5000,
          }
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      let errorMessage =
        "Failed to send message. Please try again or contact me directly.";

      if (error.message.includes("404")) {
        errorMessage =
          "Contact service temporarily unavailable. Please reach out via email or LinkedIn.";
      } else if (error.message.includes("Invalid response")) {
        errorMessage =
          "Server error. Please try again later or contact me directly.";
      }

      toast.error(errorMessage, {
        position: "bottom-right",
        autoClose: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's discuss opportunities and build something amazing together
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Let's Connect</h3>
              <p>
                I'm currently working at <strong>FYND</strong> building{" "}
                <strong>AI-powered developer tools</strong>, but I'm always open
                to discussing exciting opportunities in frontend engineering,
                GenAI systems, and scalable architecture. Whether you're
                interested in collaboration, consulting, or future
                opportunities, I'd love to hear from you!
              </p>

              <div className="contact-methods">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="method-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="method-info">
                      <span className="method-label">{item.label}</span>
                      <span className="method-value">{item.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="availability">
                <h4>Current Status</h4>
                <div className="status-indicator">
                  <div className="status-dot working"></div>
                  <span>Currently at FYND - Open to discussions</span>
                </div>
                <p>
                  Available for consulting, collaboration, and future
                  opportunities
                </p>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container"
              variants={itemVariants}
            >
              <h3>Send a Message</h3>
              {(window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1") && (
                <div
                  style={{
                    background: "#1e40af20",
                    border: "1px solid #3b82f6",
                    borderRadius: "8px",
                    padding: "12px",
                    marginBottom: "20px",
                    color: "#3b82f6",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  🚧 Development Mode: Form will simulate submission (no email
                  sent)
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser />
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">
                      <FaBuilding />
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company (optional)"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">
                      <FaPaperPlane />
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FaPaperPlane />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div className="contact-cta" variants={itemVariants}>
            <h3>Looking for a Senior Frontend Developer?</h3>
            <p>
              I bring 3.5+ years of experience in React.js, scalable
              architectures, and innovative AI solutions to help your team
              succeed.
            </p>
            <div className="cta-highlights">
              <span>🚀 Scalable Solutions</span>
              <span>🤖 AI Integration</span>
              <span>📊 85%+ Test Coverage</span>
              <span>⚡ Fast Delivery</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
