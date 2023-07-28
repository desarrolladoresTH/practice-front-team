import React from 'react';
import './Header.css';

const Header = () => {
  // Códigos SVG de los íconos
  const icon1 = '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="50" viewBox="0 0 25 50" fill="none"><path d="M14.5 24L0 0H10.5L24.5 24L11 50H0.5L14.5 24Z" fill="#01CEE6"/></svg>';
  const icon2 = '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="50" viewBox="0 0 25 50" fill="none"><path d="M15 24L0.5 0H11L25 24L12 50H1L15 24Z" fill="#BF02D6"/></svg>';
  const icon3 = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="50" viewBox="0 0 33 50" fill="none"><path d="M14 24L0 0H18.5L33 24L19.5 50H0.5L14 24Z" fill="#E60275"/></svg>';

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        
        <h1>Tu Logo</h1>
      </div>

      {/* Menú de navegación */}
      <nav>
        <ul className="nav-links">
          <li><a href="#equipo">Equipo</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li>
            <button className="contact-button">
              Contáctanos
              <span dangerouslySetInnerHTML={{ __html: icon1 }} />
              <span dangerouslySetInnerHTML={{ __html: icon2 }} />
              <span dangerouslySetInnerHTML={{ __html: icon3 }} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
