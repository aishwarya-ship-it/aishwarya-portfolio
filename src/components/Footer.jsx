
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <a href="#home" className="logo">
        AISHWARYA<span>.</span>
      </a>

      <p>
        Designed & Built with care by Aishwarya.
      </p>

      <div className="footer-socials">
        <a
          href="https://github.com/aishwarya-ship-it"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/aishwarya-s-b118b2378/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <p className="footer-copyright">
        © {new Date().getFullYear()} Aishwarya. All Rights Reserved.
      </p>

      <a href="#home" className="back-to-top">
        <ArrowUp size={18} />
      </a>

    </footer>
  );
}

export default Footer;
