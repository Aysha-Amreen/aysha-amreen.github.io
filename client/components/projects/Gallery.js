import React, { useState } from 'react';
import styles from '../../styles/onlineCafe.module.css';

function Gallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  // Calculate the correct offset to center the current image
  const getTranslateXValue = () => {
    const imageWidth = 320; // Image width + margin
    const containerWidth = 600; // Carousel width (set in CSS)
    const centerOffset = (containerWidth - imageWidth) / 2;
    return -(currentImage * imageWidth - centerOffset);
  };

  const getClassForImage = (index) => {
    if (index === currentImage) {
      return styles.active;
    }
    if (index === (currentImage - 1 + images.length) % images.length) {
      return styles.previous;
    }
    if (index === (currentImage + 1) % images.length) {
      return styles.next;
    }
    return '';
  };

  return (
    <div className={styles.gallerySection}>
      <h2 className={styles.heading}>Gallery</h2>
      <div className={styles.carousel}>
        <button onClick={handlePreviousImage} className={styles.arrowLeft}>&lt;</button>
        <div className={styles.carouselTrack} style={{ transform: `translateX(${getTranslateXValue()}px)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className={`${styles.carouselImage} ${getClassForImage(index)}`}
            />
          ))}
        </div>
        <button onClick={handleNextImage} className={styles.arrowRight}>&gt;</button>
      </div>
    </div>
  );
}

export default Gallery;
