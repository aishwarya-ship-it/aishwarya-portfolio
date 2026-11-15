
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download
} from "lucide-react";

import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hero-tag">
          <span className="status-dot"></span>
          ASPIRING FULL STACK DEVELOPER
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm <span>Aishwarya.</span>
          <br />
          I create digital experiences.
        </motion.h1>

        <p className="hero-description">
          I'm a B.Sc Information Technology student
          and aspiring Full Stack Developer.
          I enjoy building beautiful, responsive and
          user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Explore My Work
            <ArrowUpRight size={18} />
          </a>

          <a href="/resume.pdf" download className="btn-outline">
            Download CV
            <Download size={17} />
          </a>
        </div>

        <a href="#about" className="scroll-link">
          <ArrowDown size={16} />
          SCROLL TO EXPLORE
        </a>
      </div>

      <motion.div
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-image">
          <img src={profile} alt="Aishwarya profile" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
