import React, { useEffect } from 'react';
import styles from './Gallery.module.css';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

const Gallery = () => {
  // simplelightbox
  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a');

    lightbox.on('show.simplelightbox', function (e) {
      console.log('Image ' + (e.index + 1) + ' shown');
    });

    return () => {
      lightbox.destroy();
    };
  });

  return (
    <section id='galeria' className={styles.gallery_container}>
      <h2> GALERIA</h2>
      <div className={`gallery ${styles.gallery_fundacja}`}>
        <a href='/img/galeria/galeria_1.jpg'>
          <img
            src='/img/galeria/galeria_1-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_2.jpg'>
          <img
            src='/img/galeria/galeria_2-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_3.jpg'>
          <img
            src='/img/galeria/galeria_3-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_4.jpg'>
          <img
            src='/img/galeria/galeria_4-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_5.jpg'>
          <img
            src='/img/galeria/galeria_5-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_6.jpg'>
          <img
            src='/img/galeria/galeria_6-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_7.jpg'>
          <img
            src='/img/galeria/galeria_7-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_8.jpg'>
          <img
            src='/img/galeria/galeria_8-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_9.jpg'>
          <img
            src='/img/galeria/galeria_9-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_10.jpg'>
          <img
            src='/img/galeria/galeria_10-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_11.jpg'>
          <img
            src='/img/galeria/galeria_11-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_12.jpg'>
          <img
            src='/img/galeria/galeria_12-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_13.jpg'>
          <img
            src='/img/galeria/galeria_13-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_14.jpg'>
          <img
            src='/img/galeria/galeria_14-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_15.jpg'>
          <img
            src='/img/galeria/galeria_15-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
        <a href='/img/galeria/galeria_16.jpg'>
          <img
            src='/img/galeria/galeria_16-min.jpg'
            alt='Warsztaty Fundacji Sztuka i Dom'
          />
        </a>
      </div>
    </section>
  );
};

export default Gallery;
