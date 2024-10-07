import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    // Estado para manejar si el menú está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar el menú hamburguesa
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="home" smooth={true} duration={1000} onClick={toggleMenu}>Inicio</Link></li>
                    <li><Link to="about" smooth={true} duration={1000} onClick={toggleMenu}>Sobre mí</Link></li>
                    <li><Link to="services" smooth={true} duration={1000} onClick={toggleMenu}>Proyectos</Link></li>
                    <li><Link to="contact" smooth={true} duration={1000} onClick={toggleMenu}>Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
