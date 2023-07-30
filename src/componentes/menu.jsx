import React from 'react';

const Menu = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-dark bg-black">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <h2>NIKE</h2>
      </a>

      <div class="menu" id="">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#">Lanzamientos</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Hombre</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Mujer</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Ofertas</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
        </ul>
      </div>

    </div>
    </nav> 
    </> 
  );
};

export default Menu;
