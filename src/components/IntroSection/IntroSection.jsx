import React from 'react';
import styles from './IntroSection.module.css';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';

function IntroSection() {
  return (
    <div className={styles.intro}>
      <div className={styles.introImageContainer}>
        <img src="https://via.placeholder.com/1200x200/CCCCCC/FFFFFF?text=Placeholder+Image" alt="Introduction" className={styles.introImage} />
      </div>
      <div className={styles.introContent}>
        <h1>Welcome to Our Business</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Button link="/book-now">Book Now</Button> 
        <ImageGallery></ImageGallery>

      </div>
    </div>
  );
}

export default IntroSection;
