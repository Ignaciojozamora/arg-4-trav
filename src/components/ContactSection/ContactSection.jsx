import React from 'react';
import styles from './ContactSection.module.css';

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.mainImage}>
        <img src="https://via.placeholder.com/1200x800" alt="Main Image Description" />
      </div>
      <div className={styles.contactInfo}>
        <h2>Contact Us</h2>
        <div className={styles.info}>
          <div className={styles.item}>
            <h3>Email</h3>
            <p>example@example.com</p>
          </div>
          <div className={styles.item}>
            <h3>Phone</h3>
            <p>+1234567890</p>
          </div>
          <div className={styles.item}>
            <h3>Hours</h3>
            <p>Monday-Friday: 9am-5pm</p>
          </div>
          <div className={styles.item}>
            <h3>Location</h3>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019104903185!2d-122.41941608467898!3d37.77492977975982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c0611b553%3A0xf9b8e9b76172d25!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1611780515760!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h3>Contact Form</h3>
          <form className={styles.contactForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;


