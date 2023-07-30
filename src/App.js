import React from 'react';
import Menu from './componentes/menu';
import Slider from './componentes/Slider';
import Pilares from './componentes/Pilares';
import Footer from './componentes/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Menu />
      <Slider />
      <Pilares />
      <Footer />
    </div>
  );
};

export default App;

