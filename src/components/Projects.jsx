
import { ArrowUpRight } from "lucide-react";

function Projects() {
  const projects = [
    {
      number: "01",
      name: "Campus Voice",
      category: "Web Application",
      description:
        "An anonymous student complaint management system designed to help students share concerns and enable administrators to manage complaints.",
      tech: "React · Node.js · Express · MySQL",
      github: "https://github.com/aishwarya-ship-it",
      live: "https://campus-voice-lime-chi.vercel.app"
    },
    {
      number: "02",
      name: "FashionHub",
      category: "E-Commerce Website",
      description:
        "A fashion shopping website featuring product browsing, search, category filters, cart, wishlist and dark mode.",
      tech: "React · JavaScript · CSS",
      github: "https://github.com/aishwarya-ship-it/fashionhub",
      live: "https://fashionhub-eosin.vercel.app"
    }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="section-label">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
        <p className="section-description">
          Some projects I've worked on while learning and building.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span>{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <div className="project-tech">{project.tech}</div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
