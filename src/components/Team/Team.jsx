import React from "react";
import'./Team.css'

const Team = () =>{
    return(
        <div className="team">
            <div className="text">
                <div className="title">
                    <h1><img src="src/assets/Group 56.png" alt="" /> El equipo detrás <br />de TH</h1>
                </div>
                <div className="content">
                    <span>Somos del equipo de Front y realizamos esto para brindar experiencia y aprendizaje de diseño web personalizado y accesible para mejorar. Nos enfocamos en crear paginas increibles y acordes al conocimiento de cada uno de nosotros, trabajando de manera cercana y colaborativa para lograr resultados excepcionales. <i>¡Contáctanos y sigamos aprendiendo  juntos!</i></span>
                </div>
            </div>
            <div className="teaminf">
               <div className="member1">
                    <img height={160} width={150} src="src/assets/Temporal-icon.png" alt="" />
                    <span className="name"><b>Cristian Espejel</b></span>
                    <br />
                    <span className="wrk">Developer</span>
                    <br />
                    <a href="https://mx.linkedin.com/"><img className="linkdln" height={40} width={40} src="src/assets/icono_linkedin.png" alt="" /></a>
               </div>
               <div className="member2">
                    <img height={160} width={150} src="src/assets/Temporal-icon.png" alt="" />
                    <span className="name"><b>Pao Zamudio</b></span>
                    <br />
                    <span className="wrk">Developer</span>
                    <br />
                    <a href="https://mx.linkedin.com/"><img className="linkdln" height={40} width={40} src="src/assets/icono_linkedin.png" alt="" /></a>
               </div>
               <div className="member3">
                    <img height={160} width={150} src="src/assets/Aram.png" alt="" />
                    <span className="name"><b>Aram Maya</b></span>
                    <br />
                    <span className="wrk">Student</span>
                    <br />
                    <a href="https://mx.linkedin.com/"><img className="linkdln" height={40} width={40} src="src/assets/icono_linkedin.png" alt="" /></a>
               </div>
            </div>
        </div>
    );
}

export default Team;
