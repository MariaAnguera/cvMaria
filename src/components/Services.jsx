import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="services-container">
        <h2>Proyectos</h2>
        <p>Aquí tienes algunos de los proyectos que he hecho durante mi formación</p>
        <div className="services-grid">
          
          {/* Proyecto PixelShop */}
          <a href="/PixelShop" target="_blank" className="project project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src="/iconos/pixelShop.ico" alt="pixelShop Icon" className="project-icon" />
                <p>Proyecto PixelShop</p>
              </div>
              <div className="project-card-back">
                <p>Una tienda en línea para productos digitales.</p>
              </div>
            </div>
            </a>

          {/* Proyecto Lista de Tareas */}
          <a href="/lista-tarea" target="_blank" className="project project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src="/iconos/listatarea.ico" alt="listatarea Icon" className="project-icon" />
                <p>Proyecto Lista de Tareas</p>
              </div>
              <div className="project-card-back">
                <p>Simple pero perfecto para gestionar tus tareas diarias.</p>
              </div>
            </div>
            </a>

          {/* Proyecto Política de Privacidad */}
          <a href="/politica-de-privacidad" target="_blank" className="project project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src="/iconos/politica.ico" alt="politicaprivacidad Icon" className="project-icon" />
                <p>Proyecto Política de Privacidad</p>
              </div>
              <div className="project-card-back">
                <p>Documento de política de privacidad generado automaticamente para el usuario.</p>
              </div>
            </div>
          </a>

          {/* Proyecto SimpleShop */}
          <a href="/simpleShop" target="_blank" className="project project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src="/iconos/simpleShop.ico" alt="simpleShop Icon" className="project-icon" />
                <p>Proyecto SimpleShop</p>
              </div>
              <div className="project-card-back">
                <p>Uno de mis primeros proyectos. Una tienda de productos sencilla.</p>
              </div>
            </div>
            </a>

        </div>
      </div>
    </section>
  );
}

export default Services;
