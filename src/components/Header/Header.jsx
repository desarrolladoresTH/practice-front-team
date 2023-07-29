import React from 'react';
import Logo from '../../assets/Logo-TH.webp'
import './Header.css';

const Header = () => {
  // Códigos SVG de los íconos
  const icon1 = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 50 35" fill="none"><path d="M11.5079 16.381L0 0H8.33333L19.4444 16.381L8.73016 34.127H0.396825L11.5079 16.381Z" fill="#01CEE6"/><path d="M34.9206 16.381L23.8095 0H38.4921L50 16.381L39.2857 34.127H24.2063L34.9206 16.381Z" fill="#E60275"/><path d="M23.4127 16.381L11.9048 0H20.2381L31.3492 16.381L21.0317 34.127H12.3016L23.4127 16.381Z" fill="#BF02D6"/></svg>';


  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        
        <img src={Logo} alt="logo-th" className='logo-Th' />
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
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
