import Menu from '../components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Recetas from '@/components/RecetaCard/Recetas';

import Slider from '@/components/Slider/Slider';
import React from 'react';


const Home: React.FC = () => {
  const images = [
    '/img/carrousel/carrousel1.png',
    '/img/carrousel/carrousel2.png',
    '/img/carrousel/carrousel3.png',
  ];

  return (
    <>
      <div className='cuerpo-menu sticky-top'>
        <Menu />
      </div>
      <Slider images={images} />
      <div className='container'>
        <Recetas />
      </div>
      <Footer />
    </>
  );
}

export default Home;
