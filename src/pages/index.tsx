import Menu from '../components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import Slider from '@/components/Slider/Slider';
import React from 'react';


const Home: React.FC = () => {
  const images = [
    '/img/carrousel/carrousel1.png',
    '/img/carrousel/carrousel2.png',
    'img/carrousel/carrousel3.png',
  ];

  return (
    <>
      <div className='cuerpo-menu sticky-top'>
        <Menu />
      </div>
      <Slider images={images} /> 
      <Footer />
    </>
  );
}

export default Home;
