import React, { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleNavbarLinks = () => {
    setShowLinks(!showLinks);
    const toggleButton = document.querySelector(`.${styles.toggle_button}`);
    toggleButton.classList.toggle(`${styles.active}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_left}>
        <img
          src='img/sztuka_i_dom_logo-fundacja.png'
          alt='Logo'
          className={styles.logo}
        />
      </div>
      <ul className={`${styles.navbar_right} ${showLinks ? styles.show : ''}`}>
        <a href='#o-nas'>
          <li>O nas</li>
        </a>
        <a href='#misja'>
          <li>Misja</li>
        </a>
        <a href='#wartosci'>
          <li>Wartości</li>
        </a>
        <a href='#galeria'>
          <li>Galeria</li>
        </a>
        <a href='#kontakt'>
          <li>Kontakt</li>
        </a>
      </ul>
      <a href='#' className={styles.toggle_button} onClick={toggleNavbarLinks}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>
    </nav>
  );
}

export default Navbar;
