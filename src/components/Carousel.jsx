import React, { useState } from 'react';
import '../styles/Car.css';

const Carousel = ({ items }) => {
  // useState tracks the current image to be displayed in carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // handles navigation to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // handles navigation to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        <button className="carousel-prev" onClick={prevSlide}>
          &#8592;
        </button>
        <div className="carousel-inner">
          <img src={items[currentIndex].image} alt={`Rule ${currentIndex + 1}`} />
        </div>
        <button className="carousel-next" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
      <div className="carousel-text">
        <p className="ruleText">{items[currentIndex].text}</p>
      </div>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;