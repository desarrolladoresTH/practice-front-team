import React from 'react';

import './Services.css'

const Services = () => {
  return (
    <>
    <main>
      <h2>Nuestros sevicios para potenciar tu payme</h2>
      <section>
        <div className="service">
          <h4>Diseño de productos y servicios</h4>
          <img src="" alt="varita" />
          <p>
            Diseñamos páginas web y aplicaciones móviles para que puedas dar el
            salto a la digitalización y ser mejor que tus competidores.
          </p>
        </div>
        <div className="service">
          <h4>Optimización de canales digitales</h4>
          <img src="" alt="reloj" />
          <p>
            Definimos indicadores y medimos el rendimiento de los flujos de
            conversión para mejorar tus resultados.
          </p>
        </div>
        <br />
        <div className="service">
          <h4>Soluciones digitales a medida</h4>
          <img src="" alt="personita" />
          <p>
            Diseñamos soluciones digitales alineando los objetivos de tu Pyme y
            tus necesidades como cliente.
          </p>
        </div>
        <div className="service">
          <h4>Enfoque en los usuarios</h4>
          <img src="" alt="usuario" />
          <p>
            Implementamos e integramos tecnologías escakables de alto
            rendimiento, enfocándonos en tu usuario y tu Pyme.
          </p>
        </div>
      </section>
    </main>
    </>
  );
}

export default Services;
