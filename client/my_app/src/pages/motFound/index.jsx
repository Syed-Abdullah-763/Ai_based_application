// src/NotFound.jsx
import React from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.page}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.container}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>

        <p className={styles.subtitle}>
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <button className={styles.homeBtn} onClick={goHome}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
