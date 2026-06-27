import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

// Typing effect component
const Typewriter = ({ texts, speed = 150, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        setDisplayedText(texts[index].substring(0, subIndex));
      },
      reverse ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, pause]);

  return (
    <span className="text-accent-2">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-24 md:pt-0 flex items-center justify-center overflow-hidden bg-primary-bg"
    >
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-72 h-72 bg-accent-1/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-2/20 rounded-full blur-[120px]"
      />

      <div className="w-[95%] max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent-1 font-mono mb-3 text-sm sm:text-base tracking-wide"
          >
            Hey there, I'm
          </motion.p>

          {/* Name with Gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-white to-text-secondary"
          >
            {personalInfo.name}.
          </motion.h1>

          {/* Dynamic Role / Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-text-secondary">
              I{" "}
              <Typewriter
                texts={[
                  "build digital experiences.",
                  "build mobile apps.",
                  "solve real-world problems.",
                  "love innovation.",
                ]}
              />
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-text-secondary text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-8"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-white transition-colors transform hover:scale-110"
            >
              <FaGithub size={32} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-accent-1 transition-colors transform hover:scale-110"
            >
              <FaLinkedin size={32} />
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-1 via-accent-2 to-accent-1 blur-md opacity-60 scale-105" />
            {/* Gradient border wrapper */}
            <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-accent-1 via-accent-2 to-accent-1">
              <img
                src="/heshanPravintha.jpeg"
                alt="Heshan Pravintha"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-0 right-0 flex justify-center text-text-secondary/50"
      >
        <FaChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
