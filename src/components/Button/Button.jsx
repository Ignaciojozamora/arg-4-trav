import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, link }) {
  return (
    <a href={link} className={styles.button}>
      <button>{children}</button>
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired, // Propiedad para especificar la URL de destino
};

export default Button;
