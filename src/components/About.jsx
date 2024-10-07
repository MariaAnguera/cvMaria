import React from 'react';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-image">
                    <img src="/imagenes/yo.jpg" alt="Profile" />
                </div>
                <div className="about-content">
                    <h2>Sobre mi</h2>
                    <p>Soy Maria Anguera Tejada, una apasionada por el desarrollo frontend.</p>
                    <p>Me considero una persona autodidacta, curiosa y con muchas ganas de aprender continuamente. Disfruto enfrentando nuevos retos y buscando soluciones creativas a problemas técnicos. Estoy segura de que mi motivación, atención al detalle y capacidad de trabajo en equipo me permitirán aportar valor a cualquier proyecto en el que participe.</p>

                    <div className="skills-grid">
                        <div className="skill">
                            <h3>HTML5</h3>
                            <p className="rating">★★★★☆</p>
                        </div>
                        <div className="skill">
                            <h3>CSS3</h3>
                            <p className="rating">★★★★☆</p>
                        </div>
                        <div className="skill">
                            <h3>JavaScript</h3>
                            <p className="rating">★★★★☆</p>
                        </div>
                        <div className="skill">
                            <h3>React</h3>
                            <p className="rating">★★★★☆</p>
                        </div>
                        <div className="skill">
                            <h3>Bootstrap</h3>
                            <p className="rating">★★★★☆</p>
                        </div>
                        <div className="skill">
                            <h3>MySQL</h3>
                            <p className="rating">★★★★☆</p>
                        </div>
                    </div>

                    <a href="/Cv-MariaAnguera.pdf" download className="btn-download">Descargar CV</a>
                </div>
            </div>
        </section>
    );
}

export default About;
