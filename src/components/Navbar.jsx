
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        AISHWARYA<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map(([name, link]) => (
          <a
            key={name}
            href={link}
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </a>
        ))}
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

export default Navbar;
