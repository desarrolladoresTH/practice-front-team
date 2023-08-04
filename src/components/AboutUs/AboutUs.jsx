import React from "react";
import "./AboutUs.css"

const AboutUs = () =>{
    return(
        <>
        <div className="abtus">
            
            <section>
                <div className="txt">
                    <h1 id="Ffam">¡Tu <span>éxito</span> en linea <br /> es nuestra meta!</h1>
                    <div className="desc-content">
                        <span id="th">En TH Digital, sabemos que cada negocio es único, por lo que nos aseguramos de ofrecer soluciones de diseño web personalizadas y adaptadas a las necesidades específicas de cada cliente.</span>
                    </div>
                    <br />
                    <br />
                    <div className="abtsbutton">
                        <div className="contusb">
                            <span id="cont">Contactanos</span>
                        </div>
                        <div className="work">
                            <span id="works">O ve <a href="">nuestro portafolio</a></span>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img height={470} width={490} src="src/assets/28480869_Tiny graphic designer drawing with big pen on computer screen 1 (2).png" alt="" />
                </div>
                <img id="Deco" height={300} width={600} src="src/assets/Group 53.png" alt="" />
            </section>
        </div>
        </>
    );
}

export default AboutUs;