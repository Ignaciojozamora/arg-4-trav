import React from 'react';
import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.mainImage}>
        <img src="https://via.placeholder.com/1200x800" alt="Main Image Description" />
      </div>
      <div className={styles.secondaryImages}>
        <div className={styles.imageContainer}>
          <img src="https://via.placeholder.com/600x300" alt="Image 1 Description" />
          <div className={styles.content}>
            <h2>Title 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://via.placeholder.com/600x300" alt="Image 2 Description" />
          <div className={styles.content}>
            <h2>Title 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://via.placeholder.com/600x300" alt="Image 3 Description" />
          <div className={styles.content}>
            <h2>Title 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://via.placeholder.com/600x300" alt="Image 4 Description" />
          <div className={styles.content}>
            <h2>Title 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
