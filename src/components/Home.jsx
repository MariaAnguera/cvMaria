import React from 'react';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <section id="home" 
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/imagenes/fondo.jpg'})`, // Solo el background-image
        }}
        >
            <div className="container home-container">
                <div className="home-content">
                    <h1>Hola, mi nombre es</h1>
                    <h2>Maria Anguera</h2>
                    <p>Junior Front-end Developer</p>
                    <Link to="about" smooth={true} duration={1000} className="btn-know-more">
                    Saber más
                </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;
