import React, { useState } from 'react';
import styles from '../../styles/Gallery.module.css';

function Gallery({ images, onImageClick }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const openPopup = (index) => {
    setCurrentImage(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Calculate the correct offset to center the current image
  const getTranslateXValue = () => {
    const imageWidth = 400; // Image width + margin
    const containerWidth = 600; // Carousel width 
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
              onClick={() => openPopup(index)}
            />
          ))}
        </div>
        <button onClick={handleNextImage} className={styles.arrowRight}>&gt;</button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <button onClick={closePopup} className={styles.closeButton}>×</button>
            <button onClick={handlePreviousImage} className={styles.arrowLeft}>&lt;</button>
            <img src={images[currentImage]} alt="Popup Gallery" className={styles.popupImage} />
            <button onClick={handleNextImage} className={styles.arrowRight}>&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
