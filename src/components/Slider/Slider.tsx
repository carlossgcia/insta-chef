import React, { useState, useEffect } from 'react';
import style from './Slider.module.css';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Cambia el intervalo de tiempo aquí (en milisegundos)
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className={style.carousel}>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className={style.image} />
      <button className={style.button_prev} onClick={prevImage}>
        <Image src="/img/flechas/flecha-derecha.png" alt="" width={20} height={20} />
      </button>
      <button className={style.button_next} onClick={nextImage}>
        <Image src="/img/flechas/flecha-izquierda.png" alt="" width={20} height={20} />
      </button>
    </div>
  );
};

export default Carousel;
