'use client';

import { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500); // Show splash for 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.splashContainer}>
      <div className={styles.splashContent}>
        <div className={styles.logoAnimation}>
          <div className={`${styles.dot} ${styles.dotBlue}`}></div>
          <div className={`${styles.dot} ${styles.dotRed}`}></div>
          <div className={`${styles.dot} ${styles.dotYellow}`}></div>
          <div className={`${styles.dot} ${styles.dotGreen}`}></div>
        </div>

        <h1 className={styles.welcomeText}>
          <span className={`${styles.letter} ${styles.letter0}`}>H</span>
          <span className={`${styles.letter} ${styles.letter1}`}>e</span>
          <span className={`${styles.letter} ${styles.letter2}`}>l</span>
          <span className={`${styles.letter} ${styles.letter3}`}>l</span>
          <span className={`${styles.letter} ${styles.letter4}`}>o</span>
          <span className={styles.comma}>,</span>
        </h1>

        <h2 className={styles.subtitleText}>
          <span className={`${styles.word} ${styles.word0}`}>Welcome</span>
        </h2>

        <h3 className={styles.nameText}>
          <span className={`${styles.nameWord} ${styles.nameWord0}`}>I'm</span>
          <span className={`${styles.nameWord} ${styles.nameWord1}`}>Josh</span>
        </h3>

        <p className={styles.taglineText}>
          Let's explore together
        </p>

        <div className={styles.decorativeCircles}>
          <div className={`${styles.circle} ${styles.circle1}`}></div>
          <div className={`${styles.circle} ${styles.circle2}`}></div>
          <div className={`${styles.circle} ${styles.circle3}`}></div>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div className={styles.progressFill}></div>
      </div>
    </div>
  );
}



