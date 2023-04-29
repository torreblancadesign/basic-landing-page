import React from "react";
import styles from "../styles/style.module.css";

const Component = () => {
  return (
    <div style={{backgroundColor: "black", minHeight: "100vh"}}>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <h1>Test Landing</h1>
        </div>
        <div className={styles.navRight}>
          <a href="#">About</a>
          <a href="#">Tests</a>
          <a href="#">Start</a>
        </div>
      </nav>
      <div className={styles.hero}>
        <h2>Test Landing</h2>
      </div>
      <div className={styles.paragraph}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus a massa ultrices ullamcorper vel id elit. Praesent bibendum purus eget dapibus iaculis. </p>
      </div>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2023 Test Landing</p>
      </footer>
    </div>
  );
};

export default Component;
 