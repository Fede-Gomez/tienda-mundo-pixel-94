import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-section">
            <h3>Navegación</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/faq">Preguntas</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacidad</Link></li>
              <li><Link to="/terms">Términos</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Mundo Pixel 94</h3>
            <p>Arte en 8 bits hecho a mano con pasión desde Argentina.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mundo Pixel 94. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
