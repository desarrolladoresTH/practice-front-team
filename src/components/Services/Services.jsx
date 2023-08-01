import React from 'react';
import Vector12 from '../../assets'
import wand1 from '../../assets'
import clock1 from '../../assets'
import user1 from '../../assets'
import name1 from '../../assets'
import './Services.css'

const Services = () => {
  return (
    <>
    <main>
      <h2>Nuestros sevicios para potenciar tu payme</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3.2rem"
        height="3rem"
        viewBox="0 0 76 44"
        fill="none"
      >
        <g filter="url(#filter0_d_302_118)">
          <path
            d="M58.5714 18.746L70.0793 35.127L61.746 35.127L50.6349 18.746L61.3492 0.999969L69.6825 0.999969L58.5714 18.746Z"
            fill="#01CEE6"
            stroke="black"
          />
          <path
            d="M39.127 18.746L50.6349 35.127L42.3016 35.127L31.1905 18.746L41.5079 0.999969L50.2381 0.999969L39.127 18.746Z"
            fill="#BF02D6"
            stroke="black"
          />
          <path
            d="M20.0794 18.746L31.1905 35.127L16.5079 35.127L4.99999 18.746L15.7143 0.999968L30.7936 0.999969L20.0794 18.746Z"
            fill="#E60275"
            stroke="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_302_118"
            x="0.403442"
            y="0.499939"
            width="74.6382"
            height="43.127"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_302_118"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_302_118"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <section>
        <div className="design">
          <img className="vector" src={Vector12.png} alt="" />
          <img className="icons" src={wand1.png} alt="wand" />
          <h4>Diseño de productos y servicios</h4>
          <p>
            Diseñamos páginas web y aplicaciones móviles para que puedas dar el
            salto a la digitalización y ser mejor que tus competidores.
          </p>
        </div>
        <div className="opti">
          <img className="vector" src={Vector12.png} alt="" />
          <img className="icons" src={wall-clock1.png} alt="clock" />
          <h4>Optimización de canales digitales</h4>
          <p>
            Definimos indicadores y medimos el rendimiento de los flujos de
            conversión para mejorar tus resultados.
          </p>
        </div>
        <div className="solutions">
          <img className="vector" src={Vector12.png} alt="" />
          <img className="icons" src={user1.png} alt="user" />
          <h4>Soluciones digitales a medida</h4>
          <p>
            Diseñamos soluciones digitales alineando los objetivos de tu Pyme y
            tus necesidades como cliente.
          </p>
        </div>
        <div className="users">
          <img className="vector" src={Vector12.png} alt="" />
          <img className="icons" src={name1.png} alt="name" />
          <h4>Enfoque en los usuarios</h4>
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
