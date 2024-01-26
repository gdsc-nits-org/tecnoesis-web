// ImageCarousel.jsx

import React, { useState, useEffect } from 'react';
import styles from './HomeCarousel.module.css';

const images = [
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/lxilsxgndsnulhk06snp"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/hgaybso4dg38ctmyla6b"

  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/l2sl88hyigmqmvojaxwu"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/oohkiwfwo41jctugqygb"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/ozzoyarayifvq1u3ppsi"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/kjkagbeotvz5xebsoakg"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/axfdyshx3chrnix0xhmy"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/nfyvdnot721mvb2ykvhx"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/xxtp6zdzk3oy6vikqjij"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/p4ylpueqw8bb1knfkfu9"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/fe5jbivxs8o13jatbqlj"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/vp18zllaralmaevrzksh"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/o0z2snxqaaochtfxmxrq"
  },
  {
    url: "https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/vswq5zdxxtufokrp8lyk"
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
