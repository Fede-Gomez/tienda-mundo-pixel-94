import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className={`navbar-item ${location.pathname === "/" ? "active" : ""}`}
        >
          <Link to="/">Categorias</Link>
        </li>
        <li
          className={`navbar-item ${location.pathname === "/faq" ? "active" : ""}`}
        >
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="navbar-item">
          <a
            href="https://www.instagram.com/mundo.pixel.94/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;