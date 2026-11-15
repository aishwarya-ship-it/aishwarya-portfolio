
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Palette,
  Database,
  Braces,
  Terminal
} from "lucide-react";

function Skills() {
  const skills = [
    { name: "HTML", icon: Globe, level: "Frontend" },
    { name: "CSS", icon: Palette, level: "Frontend" },
    { name: "JavaScript", icon: Braces, level: "Programming" },
    { name: "React.js", icon: Code2, level: "Frontend" },
    { name: "Java", icon: Terminal, level: "Programming" },
    { name: "C++", icon: Database, level: "Programming" }
  ];

  return (
    <section className="section skills-section" id="skills">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">WHAT I WORK WITH</p>

        <h2>
          My <span>Skills</span>
        </h2>

        <p className="section-description">
          Technologies and tools I use while learning
          and building real-world projects.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ y: -8 }}
            >
              <div className="skill-icon">
                <Icon size={29} strokeWidth={1.7} />
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.level}</p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}

export default Skills;
