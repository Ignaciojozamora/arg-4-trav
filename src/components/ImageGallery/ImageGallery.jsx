import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const images = [
  'https://via.placeholder.com/400x300/CCCCCC/FFFFFF?text=Image+1',
  'https://via.placeholder.com/400x300/CCCCCC/FFFFFF?text=Image+2',
  'https://via.placeholder.com/400x300/CCCCCC/FFFFFF?text=Image+3',
];

function ImageGallery() {
  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery item ${index + 1}`} className={styles.image} />
      ))}
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageGallery;
