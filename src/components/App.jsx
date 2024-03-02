import React, { useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Footer from './Footer';
import { useFontSize } from '../contexts/FontSizeContext';

function App() {
  const { fontSize } = useFontSize();
  const { backgroundColor } = useFontSize();

  return (
    <div
      className={styles.App}
      style={{
        fontSize: `${fontSize}px`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <Navbar />
      <div className={styles.slider}>
        <h1>Wejdź do świata sztuki</h1>
      </div>
      <div className={styles.container}>
        <AboutUs />
        <Gallery />
        <section id='kontakt'>
          <h2>Kontakt</h2>
          <p>
            Fundacja Sztuka i Dom jest prowadzona przez Dorotę i Zbigniewa
            Strzyżyńskich.
          </p>

          <p>
            Telefon kontaktowy: <a href='tel:572876950'>572 876 950</a>
          </p>
          <p>
            E-mail:{' '}
            <a href='mailto:fundacja.sztukaidom@gmail.com'>
              fundacja.sztukaidom@gmail.com
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
