import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="l-footer">
        <h1>Perritos ramdom</h1>
        <p>Es una página creada para DogLovers.</p>
      </div>

      <ul className="r-footer">
        <li>
          <h1>DEPORTES Y EVENTOS</h1>
          <ul className="box">
            <li><a href="#">Estado de orden</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Opciones de pago</a></li>
            <li><a href="#">Promociones</a></li>
          </ul>
        </li>
        <li className="columnas">
          <h1>ACERCA DE NIKE</h1>
          <ul className="box">
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Empleos</a></li>
            <li><a href="#">Inversionistas</a></li>
            <li><a href="#">Sustentabilidad</a></li>
          </ul>
        </li>
        <li>
          <ul className="box">
            <li><a href="#">Buscar tiendas</a></li>
            <li><a href="#">Hazte miembro</a></li>
          </ul>
        </li>
      </ul>

      <div className="b-footer">
        <p> Coyright @2023 All rights reserved by: Alexandra Navarro</p>
      </div>
      <div className="redes-sociales">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-google"></i>
      </div>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </footer>
    </>
  );
};

export default Footer;
