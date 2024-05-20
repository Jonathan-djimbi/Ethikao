import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const Carrousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Ne pas rendre le carrousel avant que le composant soit monté

  return (
    <Carousel style={{ height: '650px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/12.png"
          alt="First slide"
          style={{ height: '650px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="carousel-caption-centered">
          <h3>Découvrez notre sélection</h3>
          <p>Découvrez notre sélection de chocolat directement importé d'Afrique.</p>
          <button className="btn btn-primary">Découvrir</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/12.png"
          alt="Second slide"
          style={{ height: '650px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="carousel-caption-centered">
          <h3>Découvrez notre sélection</h3>
          <p>Découvrez notre sélection de chocolat directement importé d'Afrique.</p>
          <button className="btn btn-primary">Découvrir</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/12.png"
          alt="Third slide"
          style={{ height: '650px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="carousel-caption-centered">
          <h3>Découvrez notre sélection</h3>
          <p>Découvrez notre sélection de chocolat directement importé d'Afrique.</p>
          <button className="btn btn-primary">Découvrir</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
