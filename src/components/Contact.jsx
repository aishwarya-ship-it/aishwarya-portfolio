
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section className="section contact-section" id="contact">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">LET'S CONNECT</p>

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p className="section-description">
          Have an opportunity or want to connect?
          I'd be happy to hear from you.
        </p>
      </motion.div>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <div className="contact-icon">
          <Mail size={30} />
        </div>

        <h3>
          Let's create something meaningful.
        </h3>

        <p>
          Feel free to reach out for job opportunities,
          collaborations or a friendly conversation.
          I'm always happy to connect and learn.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="btn-primary"
        >
          Say Hello
          <ArrowUpRight size={18} />
        </a>

        <div className="contact-socials">

          <a
            href="https://github.com/aishwarya-ship-it"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          
<a
  href="https://www.linkedin.com/in/aishwarya-s-b118b2378/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn ↗
</a>


        </div>

      </motion.div>
    </section>
  );
}

export default Contact;
