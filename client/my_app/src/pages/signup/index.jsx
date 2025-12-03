// src/Signup.jsx
import React, { useState } from "react";
import styles from "./signup.module.css";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
  });

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
      if (!form.email || !form.password || !form.name || !form.age) {
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}auth/signup`,
        form
      );

      navigate("/otp-verification", {
        replace: true,
        state: {
          email: form.email,
          token: response.data.token,
        },
      });
    } catch (err) {
      alert(err.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.page}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      {/* Header */}
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

      {/* Main */}
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>Create your account</h1>
            <p className={styles.subtitle}>
              Join InvestMind and let AI help you think more clearly about where
              your money should go.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className={styles.field}>
              <label htmlFor="fullName" className={styles.label}>
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className={styles.input}
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Age */}
            <div className={styles.field}>
              <label htmlFor="age" className={styles.label}>
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min="18"
                className={styles.input}
                placeholder="18"
                value={form.age}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
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
              {submitting ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <div className={styles.footerText}>
            <span>Already have an account?</span>
            <button
              type="button"
              className={styles.linkBtnStrong}
              onClick={handleGoLogin}
            >
              Log in
            </button>
          </div>

          <p className={styles.disclaimer}>
            By creating an account, you agree that InvestMind provides
            AI-generated research only and does not give financial advice or
            execute trades.
          </p>
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
