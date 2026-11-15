
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

function Education() {
  const education = [
    {
      icon: GraduationCap,
      label: "CURRENTLY PURSUING",
      title: "B.Sc Information Technology",
      description:
        "Undergraduate student focused on programming, computer science and application development."
    },
    {
      icon: BookOpen,
      label: "ADDITIONAL LEARNING",
      title: "Full Stack Development",
      description:
        "Learning HTML, CSS, JavaScript, React and modern web development practices."
    }
  ];

  return (
    <section className="section education-section" id="education">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">MY JOURNEY</p>
        <h2>
          Education & <span>Learning</span>
        </h2>
        <p className="section-description">
          My academic background and continuous learning journey.
        </p>
      </motion.div>

      <div className="education-timeline">

        {education.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              className="education-card"
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="education-icon">
                <Icon size={25} />
              </div>

              <div className="education-details">
                <span className="education-year">
                  {item.label}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

export default Education;
