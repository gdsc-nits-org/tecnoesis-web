// ImageCarousel.jsx

import React, { useState, useEffect } from 'react';
import styles from './HomeCarousel.module.css';

const images = [
  {
    url: "/galleryimg/imgp3.jpg"
  },
  {
    url: "/galleryimg/imgp5.jpg"

  },
  {
    url: "/galleryimg/imgp6.jpg"
  },
  {
    url: "/galleryimg/imgp8.jpg"
  },
  {
    url: "/galleryimg/imgp9.jpg"
  },
  {
    url: "/galleryimg/imgp10.jpg"
  },
  {
    url: "/galleryimg/imgp11.jpg"
  },
  {
    url: "/galleryimg/imgp13.jpg"
  },
  {
    url: "/galleryimg/imgp14.jpg"
  },
  {
    url: "/galleryimg/imgp15.jpg"
  },
  {
    url: "/galleryimg/imgp16.jpg"
  },
  {
    url: "/galleryimg/imgp17.jpg"
  },
  {
    url: "/galleryimg/imgp18.jpg"
  },
  {
    url: "/galleryimg/imgp19.jpg"
  },

]
const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      handleNextClick();
    }, 4000);

    return () => clearInterval(autoPlayInterval);
  }, [currentSlide, images.length]);



  return (
    <div className={styles.carouselContainerParent}>

      <div className={styles.buttonContainer} >
        <div className={`${styles.carouselButton} ${styles.carouselButton1}`} >
          <img onClick={handlePrevClick} src="/images/module_arrow.svg" alt="prev" className={styles.prev} />
        </div>
      </div>
      <div className={styles.carouselContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Slide ${index + 1}`}
            className={styles.carouselImage}
            //   style={{
            //     transform: `translateX(${(index - currentSlide) * 100}%)`,
            //   }}
            style={{
              transform: `translateX(${(currentSlide) * 100 * (-1)}%)`,
            }}

          />
        ))}
        {/* <button onClick={handlePrevClick} className={styles.carouselButton} style={{ left: 0 }}>
        <img src="/images/module_arrow.svg" alt="prev" className={styles.prev}/>
      </button>
<button onClick={handleNextClick} className={styles.carouselButton} style={{ right: 0 }}>
        <img src="/images/module_arrow.svg" alt="next" className={styles.next}/>
      </button> */}
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.carouselButton} >
          <img onClick={handleNextClick} src="/images/module_arrow.svg" alt="next" className={styles.next} />
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
