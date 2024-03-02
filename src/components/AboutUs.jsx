import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container_about_us}>
      <section id='o-nas' className={styles.section}>
        <h2>O NAS</h2>
        <p>
          Jesteśmy organizacją non-profit zajmującą się promowaniem sztuki i
          kultury w naszym mieście i regionie. Naszym celem jest edukowanie
          społeczeństwa w dziedzinie sztuki i zachęcanie do kreatywności.
        </p>
      </section>

      <section id='misja' className={styles.section}> 
        <h2>MISJA</h2>

        <p>
          Szkoła Liderów to instytucja dbająca o jakość życia publicznego w
          Polsce i wśród Polaków za granicami. Od ponad 27 lat pracujemy na
          rzecz rozwoju świadomego, opartego na wartościach przywództwa.
          Wynajdujemy i wspieramy liderów i liderki różnych obszarów życia
          publicznego: w organizacjach pozarządowych, instytucjach samorządu
          terytorialnego oraz w partiach i organizacjach politycznych. Wierzymy,
          że to właśnie osoby o zdolnościach przywódczych, pociągając za sobą
          innych, są motorem zmian. Fundacja jest miejscem spotkania i dialogu.
          W naszych programach uczestniczą osoby z różnych opcji politycznych i
          społecznych. Konfrontacja z innym punktem widzenia jest jednym z
          podstawowych narzędzi Szkoły do budowania z jednej strony kultury
          dyskusji opartej na szacunku, z drugiej – świadomości własnego systemu
          wartości i wywodzącej się z niego tożsamości. Programy Fundacji są
          silnym doświadczeniem rozwojowym, dla wielu Absolwentów i Absolwentek
          stają się punktem zwrotnym w ich karierach w życiu publicznym. Szkoła
          Liderów wyposaża w narzędzia do przeprowadzania zmiany i wywierania
          wpływu, pogłębia samoświadomość i stwarza możliwości dalszego rozwoju.
          Podstawowe programy Fundacji, dzięki zaangażowaniu donorów i
          darczyńców, pozostają od wielu lat bezpłatne. Ponadto Szkoła Liderów
          oferuje indywidualnie dopasowane do potrzeb klienta programy i usługi.
          Zysk z działalności gospodarczej w całości przeznaczany jest na cele
          statutowe organizacji.
        </p>
      </section>

      <section id='wartosci' className={styles.section}>
        <h2>WARTOŚCI</h2>
        <p>
          Szkoła Liderów upowszechnia model przywództwa opartego na:
          odpowiedzialności. Inwestujemy w osoby o zdolnościach przywódczych,
          które nie boją się wyzwań i związanych z nimi poświęceń; w liderów,
          którzy nie wahają się podejmować trudnych wyborów i śmiałych decyzji
          oraz biorą pełną odpowiedzialność za ich konsekwencje. budowaniu
          zaufania i współpracy. Wierzymy, że dobre przywództwo dalekie jest od
          wodzostwa. Istnieją różne wzorce zachowań liderów, jednak wszystkie
          łączy umiejętność angażowania innych i poszukiwania sprzymierzeńców.
          tworzeniu wizji odpowiadających na aktualne problemy w Polsce i na
          świecie Tematy poruszane podczas programów Szkoły są głęboko
          zakorzenione w zastanej rzeczywistości polskiej i światowej.
          Stymulujemy dyskusję i poszukiwanie rozwiązań w obszarach ważnych dla
          rozwoju Polski: gospodarka, środowisko, energetyka, edukacja, system
          społeczny, ustrój i samorząd.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
