import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import SectionTitle from "./SectionTitle";
import { flutterPackages } from "../data/portfolioData";

const FlutterContributions = () => {
  return (
    <section id="contributions" className="py-20 sm:py-32 bg-primary-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <SectionTitle>Flutter Contributions</SectionTitle>

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 flex flex-col gap-8">
          {flutterPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-bg rounded-xl border border-white/5 hover:border-accent-1/30 transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-1/10 flex items-center justify-center flex-shrink-0">
                    <SiFlutter size={20} className="text-accent-1" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary font-mono group-hover:text-accent-1 transition-colors">
                      {pkg.name}
                    </h3>
                    <span className="text-xs text-accent-2 font-mono">{pkg.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-text-secondary/60 border border-white/10 px-3 py-1 rounded-full">
                    {pkg.license} License
                  </span>
                  <a
                    href={pkg.pubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-1/10 border border-accent-1/30 text-accent-1 text-sm font-medium hover:bg-accent-1/20 transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>pub.dev</span>
                  </a>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex flex-col lg:flex-row gap-6">
                {/* Left: description + features */}
                <div className="flex-1">
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
                    {pkg.description}
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary/80">
                        <FaCheckCircle size={13} className="text-accent-1 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: platform chips */}
                <div className="lg:w-48 flex flex-col gap-3">
                  <p className="text-xs font-mono text-accent-2 uppercase tracking-widest">
                    Platforms
                  </p>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    {pkg.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-text-secondary border border-white/10 px-3 py-1 rounded-md hover:border-accent-1/40 hover:text-accent-1 transition-colors"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlutterContributions;
