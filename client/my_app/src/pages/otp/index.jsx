import React, { useState } from "react";
import styles from "./otp.module.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("OTP will be expired in 1 minute");

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (otp.length < 6) {
      return setMessage("Please enter the 6-digit OTP");
    }

    const email = location?.state?.email;
    const token = location?.state?.token;

    if (!email || !token) {
      setMessage("Missing email or token. Please login again.");
      return;
    }

    setLoading(true);

    try {
      const otpResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}auth/verify-otp`,
        {
          otp,
          email,
        }
      );

      setMessage(response.data.message || "OTP verified successfully!");

      localStorage.setItem("token", token);
      navigate("/profile");
    } catch (err) {
      const errMsg =
        err?.response?.data?.message ||
        "Failed to verify OTP. Please try again.";
      alert(errMsg);
      setMessage(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    const email = location?.state?.email;
    if (!email) {
      setMessage("Missing email. Please go back and try again.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}auth/resend-otp`,
        { email }
      );

      setMessage(response.data.message || "A new OTP has been sent.");
    } catch (error) {
      const errMsg =
        error?.response?.data?.message ||
        "Failed to resend OTP. Please try again.";
      alert(errMsg);
      setMessage(errMsg);
    }
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <section className={styles.card}>
        <header className={styles.header}>
          <div className={styles.brandMark}>🔒</div>
          <h1 className={styles.title}>Verify OTP</h1>
          <p className={styles.subtitle}>
            Enter the 6-digit code sent to your email.
          </p>
          <p className={styles.infoText}>{message}</p>
        </header>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            className={styles.input}
            placeholder="Enter 6-digit OTP"
          />

          <button
            type="submit"
            className={styles.primaryBtn}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <footer className={styles.footer}>
          <p>
            Didn’t get a code?{" "}
            <button
              type="button"
              className={styles.link}
              onClick={resendOtp}
              disabled={loading}
            >
              Resend OTP
            </button>
          </p>
        </footer>
      </section>
    </main>
  );
}
