// src/App.jsx
import React from "react";
import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const HEADER_OFFSET = 80; // space to keep section title visible
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const offset = elementTop - HEADER_OFFSET;

    window.scrollTo({
      top: offset < 0 ? 0 : offset,
      behavior: "smooth",
    });
  };

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>AI</span>
              <span className={styles.logoText}>InvestMind</span>
            </div>

            <nav className={styles.nav}>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection("how-it-works")}
              >
                How it works
              </button>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection("security")}
              >
                Security
              </button>
            </nav>
          </div>

          <div className={styles.headerActions}>
            <button className={styles.headerLogin} onClick={handleLogin}>
              Log In
            </button>
            <button className={styles.headerPrimary} onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Ask AI where to invest{" "}
              <span className={styles.highlight}>
                before you risk your money.
              </span>
            </h1>
            <p className={styles.subtitle}>
              InvestMind is your AI co-pilot for investing. Ask questions in
              plain language, compare opportunities, and get data-backed
              insights in seconds. You stay in control — we cut the noise.
            </p>

            <div className={styles.actions}>
              <button className={styles.primaryBtn} onClick={handleGetStarted}>
                Get Started
              </button>
              <button className={styles.secondaryBtn} onClick={handleLogin}>
                Log In
              </button>
            </div>

            <p className={styles.trustText}>
              No auto-trading, no hype — just clear AI-powered research to help
              you think.
            </p>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.cardHeader}>
              <span className={styles.pill}>Live AI Preview</span>
              <span className={styles.statusDot} />
            </div>

            <div className={styles.chatBubbleUser}>
              <span className={styles.chatLabel}>You</span>
              <p>
                “I have $10,000. Should I put it in ETFs, blue-chip stocks, or
                just keep it in bonds?”
              </p>
            </div>

            <div className={styles.chatBubbleAi}>
              <span className={styles.chatLabelAi}>InvestMind AI</span>
              <p>
                Let’s start with your risk tolerance and time horizon. I’ll
                compare diversified ETFs, stable stocks, and bond options with
                historical returns and drawdowns.
              </p>
            </div>

            <div className={styles.metricsRow}>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Investors helped</span>
                <span className={styles.metricValue}>12,480+</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Markets covered</span>
                <span className={styles.metricValue}>25+</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Avg. response</span>
                <span className={styles.metricValue}>1.2s</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className={styles.section} id="about">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>About InvestMind</h2>
            <p className={styles.sectionSubtitle}>
              Most investors are drowning in hype, ads, and random tips.
              InvestMind gives you one place to ask clear questions and get
              sober, structured answers — powered by AI and real market data.
            </p>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <h3>Built for serious investors</h3>
              <p>
                Whether you’re starting with your first $500 or managing a
                bigger portfolio, InvestMind helps you compare options
                logically, not emotionally.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>AI that explains, not shills</h3>
              <p>
                No “BUY NOW” screaming. You get pros, cons, risks, and context
                so you understand every trade-off.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>You stay in control</h3>
              <p>
                We never touch your money or execute trades. You ask, AI helps
                you think — decisions stay with you.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.section} id="how-it-works">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How it works</h2>
            <p className={styles.sectionSubtitle}>
              Three simple steps from question to clarity.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepBadge}>1</div>
              <h3>Ask in plain language</h3>
              <p>
                “Is this stock overvalued?”, “Should I DCA into this ETF?”, or
                “What are low-risk options for 3 years?” — just type it.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepBadge}>2</div>
              <h3>AI analyses & explains</h3>
              <p>
                The AI parses fundamentals, volatility, history, and risk to
                build a clear, structured answer with scenarios.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepBadge}>3</div>
              <h3>Decide with confidence</h3>
              <p>
                You see pros/cons, comparisons, and next steps. No hidden
                agendas, no commissions for what you choose.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className={styles.section} id="features">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What you get inside</h2>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>Portfolio Q&amp;A</h3>
              <p>
                Ask about positions, allocation, or rebalancing. Get straight
                answers in seconds.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Asset comparison</h3>
              <p>
                Compare ETFs, stocks, and bonds side by side with risk, returns,
                and fees shown clearly.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Scenario planning</h3>
              <p>
                See how your choices behave in best, base, and worst-case
                scenarios over time.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>No casino vibes</h3>
              <p>
                Calm, dark interface built for people who actually care where
                their money goes.
              </p>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section className={styles.section} id="security">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Security & transparency</h2>
          </div>

          <div className={styles.securityStrip}>
            <div className={styles.securityItem}>
              🔒 <span>Bank-grade encryption for data in transit</span>
            </div>
            <div className={styles.securityItem}>
              🧾 <span>No selling your data to brokers or third parties</span>
            </div>
            <div className={styles.securityItem}>
              ⚠️ <span>Not financial advice — you make the final call</span>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta} id="cta">
          <h2>Ready to invest with a clearer head?</h2>
          <p>
            Join early access and start asking smarter questions about where
            your money should go.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn} onClick={handleGetStarted}>
              Get Started
            </button>
            <button className={styles.secondaryBtn} onClick={handleLogin}>
              Log In
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>AI</span>
              <span className={styles.logoText}>InvestMind</span>
            </div>
            <p className={styles.footerText}>
              AI-powered research to help investors think clearly. No hype, no
              noise.
            </p>
          </div>

          <div className={styles.footerCols}>
            <div className={styles.footerCol}>
              <h4>Product</h4>
              <button
                className={styles.footerLinkBtn}
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className={styles.footerLinkBtn}
                onClick={() => scrollToSection("how-it-works")}
              >
                How it works
              </button>
              <button
                className={styles.footerLinkBtn}
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
            </div>
            <div className={styles.footerCol}>
              <h4>Legal</h4>
              <span className={styles.footerLinkMuted}>
                Terms (coming soon)
              </span>
              <span className={styles.footerLinkMuted}>
                Privacy (coming soon)
              </span>
              <span className={styles.footerLinkMuted}>Risk disclaimer</span>
            </div>
            <div className={styles.footerCol}>
              <h4>Contact</h4>
              <span className={styles.footerLinkMuted}>
                support@investmind.ai
              </span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {currentYear} InvestMind. All rights reserved.</span>
          <span className={styles.footerBottomNote}>
            InvestMind does not provide financial advice or execute trades.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
