// src/pages/RequestOtp.jsx (or wherever you keep it)
import React, { useState } from "react";
import styles from "./requestOtp.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RequestOtp() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      return setError("Please enter your email address");
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}auth/resend-otp`,
        { email }
      );

      setMessage(
        response?.data?.message ||
          "If this email exists, a verification code has been sent."
      );

      navigate("/otp-verification", {
        replace: true,
        state: {
          email: email,
        },
      });
    } catch (err) {
      const errMsg =
        err?.response?.data?.message ||
        "Something went wrong while sending OTP. Please try again.";
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <section className={styles.card}>
        <header className={styles.header}>
          <div className={styles.brandMark}>📧</div>
          <h1 className={styles.title}>Send Verification Code</h1>
          <p className={styles.subtitle}>
            Enter your email address and we’ll send you a 6-digit code.
          </p>
        </header>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />

          {error && (
            <p className={`${styles.message} ${styles.error}`}>{error}</p>
          )}
          {message && (
            <p className={`${styles.message} ${styles.success}`}>{message}</p>
          )}

          <button
            type="submit"
            className={styles.primaryBtn}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </form>

        <footer className={styles.footer}>
          <p>
            Already have a code?{" "}
            <Link to="/otp-verification" className={styles.link}>
              Verify OTP
            </Link>
          </p>
          <p>
            Remembered your password?{" "}
            <Link to="/login" className={styles.link}>
              Back to Login
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
}
