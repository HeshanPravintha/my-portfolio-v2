import React from "react";
import SectionTitle from "./SectionTitle";
import { education } from "../data/portfolioData.jsx";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <SectionTitle id="about-title">About Me</SectionTitle>

        <motion.div
          className="max-w-8xl mx-auto text-left mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-center lg:text-xl text-text-secondary leading-relaxed font-light">
            <span className="text-accent-1 font-mono text-2xl mr-2">
              Hello!
            </span>
            I'm Heshan, a Senior Software Engineer with 3+ years of experience building
            high-performance mobile applications for millions of users. I specialize in Flutter
            and React Native, delivering production-level solutions for leading telecommunications
            and insurance providers. I thrive in collaborative environments, lead with clean
            architecture principles, publish open-source Flutter packages, and love solving
            complex engineering challenges.
          </p>
        </motion.div>

        <h3 className="text-xl sm:text-2xl font-bold text-accent-1 mb-6 sm:mb-10 font-mono flex items-center">
          <span className="mr-4 text-3xl">/</span> Education History
        </h3>

        {/* New Education Layout: Minimal "Tech List" style */}
        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-bg p-6 rounded-md border-l-2 border-transparent hover:border-accent-1 transition-all duration-300 hover:bg-white/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="flex items-start">
                  <FaGraduationCap className="text-text-secondary/50 text-2xl mt-1 mr-4 group-hover:text-accent-1 transition-colors" />
                  <div>
                    <h4 className="text-xl font-bold text-text-primary group-hover:text-accent-1 transition-colors">
                      {edu.institution}
                    </h4>
                    <p className="text-text-secondary font-medium mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <p className="font-mono text-sm text-accent-1/80 bg-accent-1/10 inline-block px-3 py-1 rounded-md mb-2">
                    {edu.duration}
                  </p>
                  <p className="text-sm text-text-secondary font-mono block">
                    {edu.score}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
