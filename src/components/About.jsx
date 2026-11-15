
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function About() {
  const highlights = [
    {
      number: "01",
      title: "Creative Thinking",
      description: "Creating clean, simple and user-friendly digital experiences."
    },
    {
      number: "02",
      title: "Continuous Learning",
      description: "Exploring new technologies and improving my development skills."
    },
    {
      number: "03",
      title: "Problem Solving",
      description: "Turning ideas into practical solutions through code."
    }
  ];

  return (
    <section className="section about-section" id="about">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </motion.div>

      <div className="about-content">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>
            Turning ideas into meaningful digital experiences.
          </h3>

          <p>
            Hi, I'm Aishwarya, a B.Sc Information Technology
            student passionate about web development and
            creating digital experiences.
          </p>

          <p>
            I enjoy working with HTML, CSS, JavaScript and React
            to build responsive and user-friendly websites.
            I also have programming knowledge in Java and C++.
          </p>

          <p>
            My goal is to become a skilled Full Stack Developer,
            explore new technologies and contribute to
            meaningful real-world projects.
          </p>

          <a
            href="https://github.com/aishwarya-ship-it"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Visit my GitHub
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.div
          className="about-highlight"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {highlights.map((item) => (
            <div className="highlight-item" key={item.number}>
              <span>{item.number}</span>

              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;
