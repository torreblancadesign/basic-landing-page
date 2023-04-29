import React from 'react';
import styles from '../styles/style.module.css';

const Component = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="#" className={styles.navLink}>About</a>
        <a href="#" className={styles.navLink}>Projects</a>
        <a href="#" className={styles.navLink}>Sign In</a>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.heroTitle}>Basic Landing</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus a massa ultrices ullamcorper vel id elit. Praesent bibendum purus eget dapibus iaculis.
        </p>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>Copyright © 2021
        </p>
      </footer>
    </div>
  );
};

export default Component;