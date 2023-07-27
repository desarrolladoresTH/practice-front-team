
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      
      <div className="logo">
       
        <h1>Logo</h1>
      </div>

      {/* Menú de navegación */}
      <nav>
        <ul className="nav-links">
          <li><a href="#equipo">Equipo</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contactanos">Contáctanos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

