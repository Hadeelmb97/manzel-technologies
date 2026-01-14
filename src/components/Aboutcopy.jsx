import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Spline from '@splinetool/react-spline';

const TechBadge = ({ label }) => (
  <div className="px-4 py-2 bg-gradient-to-r from-[#00f0ff]/10 to-[#8b5cf6]/10 border border-[#00f0ff]/30 rounded-full backdrop-blur-sm">
    <span className="text-[#00f0ff] font-bold text-sm tracking-wider">{label}</span>
  </div>
);

const Aboutcopy = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff6b35]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-24">
        <motion.div variants={textVariant()}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00f0ff]" />
            <span className="text-[#00f0ff] text-sm font-semibold tracking-[0.3em] uppercase">
              Award Winning Platform
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#00f0ff]" />
          </div>
        </motion.div>

        <motion.div variants={textVariant()}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4">
            Simulate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#8b5cf6] to-[#ff6b35]">
              Smarter
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8">
            Build Better Decisions
          </h1>
        </motion.div>

        <motion.div 
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <TechBadge label="Digital Twin" />
          <TechBadge label="VR" />
          <TechBadge label="Simulation" />
          <TechBadge label="AI" />
        </motion.div>

        <motion.p 
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Redefining how we design, build, and experience reality through immersive 
          digital twin solutions for real estate and city simulation.
        </motion.p>

        <motion.div 
          variants={fadeIn("up", "spring", 0.7, 1)}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] transition-all duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2 text-white font-semibold text-base">
              Get in Touch
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#works"
            className="group px-8 py-4 rounded-full border-2 border-white/20 hover:border-[#00f0ff]/50 transition-all duration-300 hover:bg-white/5"
          >
            <span className="flex items-center gap-2 text-white font-semibold text-base">
              View Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </motion.div>

        <motion.p 
          variants={fadeIn("up", "spring", 0.8, 1)}
          className="text-gray-500 text-sm mb-4"
        >
          Click on Akin to explore the interactive experience
        </motion.p>
      </div>

      <div className="relative w-full h-[500px] md:h-[600px]">
        <Spline scene="https://prod.spline.design/cLaUct9bnQWsrDZA/scene.splinecode" />
      </div>

      <motion.div 
        variants={fadeIn("up", "spring", 1, 1)}
        className="relative z-10 text-center mt-8 mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Interactive{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6]">
            Simulation Platform
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          We build immersive and rewarding architectural simulation platforms with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff6b35] font-semibold">
            enjoyable experiences.
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Aboutcopy);
