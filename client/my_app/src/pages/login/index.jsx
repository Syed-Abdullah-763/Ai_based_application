// src/Login.jsx
import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (!form.email || !form.password) {
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}auth/login`,
        form
      );

      localStorage.setItem("token", response);
      navigate("/profile", { replace: true });
    } catch (err) {
      alert(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.page}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      {/* Header with logo */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo} onClick={handleGoHome}>
            <span className={styles.logoMark}>AI</span>
            <span className={styles.logoText}>InvestMind</span>
          </div>

          <button className={styles.headerGhostBtn} onClick={handleGoHome}>
            Back to Home
          </button>
        </div>
      </header>

      {/* Main auth card */}
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>Log in</h1>
            <p className={styles.subtitle}>
              Sign in to continue asking AI where to invest before you risk your
              money.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <button
                  type="button"
                  className={styles.linkBtn}
                  onClick={handleForgotPassword}
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                className={styles.input}
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.primaryBtn}
              disabled={submitting}
            >
              {submitting ? "loging in…" : "Log In"}
            </button>
          </form>

          <div className={styles.dividerRow}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>or</span>
            <span className={styles.dividerLine} />
          </div>

          <div className={styles.footerText}>
            <span>Don’t have an account?</span>
            <button
              type="button"
              className={styles.linkBtnStrong}
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>

          <p className={styles.disclaimer}>
            By continuing, you agree that InvestMind provides AI-generated
            research only and does not give financial advice or execute trades.
          </p>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
