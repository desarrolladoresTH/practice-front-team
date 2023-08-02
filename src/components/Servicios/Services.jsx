import React from 'react';
import Vector12 from '../../assets/Vector12.png'
import wand1 from '../../assets/wand1.png'
import clock1 from '../../assets/clock.png'
import user1 from '../../assets/user1.png'
import name1 from '../../assets/name1.png'
import './Services.css'

const Services = () => {
  return (
    
    <main className='services'>
      <h2>Nuestros sevicios para potenciar tu payme</h2>
      <div className='description'>
        <div className="design">
          <img className="vector" src={Vector12} alt="" />
          <img className="icons" src={wand1} alt="wand" />
          <h4>Diseño de productos y servicios</h4>
          <p>
            Diseñamos páginas web y aplicaciones móviles para que puedas dar el
            salto a la digitalización y ser mejor que tus competidores.
          </p>
        </div>
        <div className="opti">
          <img className="vector" src={Vector12} alt="" />
          <img className="icons" src={clock1} alt="clock" />
          <h4>Optimización de canales digitales</h4>
          <p>
            Definimos indicadores y medimos el rendimiento de los flujos de
            conversión para mejorar tus resultados.
          </p>
        </div>
        <div className="solutions">
          <img className="vector" src={Vector12} alt="" />
          <img className="icons" src={user1} alt="user" />
          <h4>Soluciones digitales a medida</h4>
          <p>
            Diseñamos soluciones digitales alineando los objetivos de tu Pyme y
            tus necesidades como cliente.
          </p>
        </div>
        <div className="users">
          <img className="vector" src={Vector12} alt="" />
          <img className="icons" src={name1} alt="name" />
          <h4>Enfoque en los usuarios</h4>
          <p>
            Implementamos e integramos tecnologías escakables de alto
            rendimiento, enfocándonos en tu usuario y tu Pyme.
          </p>
        </div>
      </div>
    </main>
    
  );
}

export default Services;
