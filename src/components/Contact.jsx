import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // Manejo del estado para los datos del formulario y los errores
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Función para manejar los cambios en los inputs del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función para validar el formulario
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Validación del campo nombre
    if (!formData.name) {
      tempErrors.name = "El nombre es requerido";
      isValid = false;
    }

    // Validación del campo email
    if (!formData.email) {
      tempErrors.email = "El correo electrónico es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El correo electrónico no es válido";
      isValid = false;
    }

    // Validación del campo mensaje
    if (!formData.message) {
      tempErrors.message = "El mensaje es requerido";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Función para manejar el envío del formulario
  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
      // Si la validación es correcta, se envía el correo
      emailjs.sendForm('service_va8eohd', 'template_83bp5wu', e.target, 'OL0JgmD8JhXBITitJ')
        .then((result) => {
            console.log(result.text);
            alert('Mensaje enviado con éxito!');
        }, (error) => {
            console.log(error.text);
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        });

      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="section full-screen">
      <div className="container">
        <h2>Contacto</h2>
        <form onSubmit={sendEmail}>
          {/* Nombre */}
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          {/* Mensaje */}
          <textarea
            name="message"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}

          {/* Botón de enviar */}
          <button type="submit">Enviar </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
