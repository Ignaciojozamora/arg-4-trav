import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://api.whatsapp.com/send?phone=XXXXXXXXXX" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
      <p>&copy; 2024 Arg-4-Trav. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;

