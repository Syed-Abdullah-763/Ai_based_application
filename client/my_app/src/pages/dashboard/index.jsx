import React, { useState, useRef } from "react";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeChatId, setActiveChatId] = useState("1");
  const [input, setInput] = useState("");
  const fileInputRef = useRef(null);

  const chats = [
    { id: "1", title: "ETF vs stocks for 3-year goal" },
    { id: "2", title: "Monthly DCA plan for $500" },
    { id: "3", title: "Low-risk options for emergency fund" },
  ];

  // Example messages, including a rich "analysis" block
  const messages = [
    {
      id: 1,
      role: "assistant",
      type: "text",
      content:
        "Hi, I’m InvestMind. Tell me your amount, risk level, and time frame.",
    },
    {
      id: 2,
      role: "user",
      type: "text",
      content: "I have $5,000, moderate risk, and a 3-year horizon.",
    },
    {
      id: 3,
      role: "assistant",
      type: "text",
      content:
        "Got it. I’ll compare a diversified ETF mix vs individual stocks for your goal.",
    },
    {
      id: 4,
      role: "assistant",
      type: "analysis",
      title: "Sample allocation (for visualization)",
      content:
        "You could later show a pie chart / bar graph here using this layout.",
      breakdown: [
        { label: "Global Equity ETF", percent: "60%" },
        { label: "Bond ETF", percent: "25%" },
        { label: "Cash / T-Bills", percent: "15%" },
      ],
    },
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // TODO: hook this into your AI backend
    console.log("User message:", input);

    setInput("");
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    setIsSidebarOpen(false);
  };

  const handleUploadClick = () => {
    // Upload disabled for now – UI only
    alert("File upload is disabled for now.");
    // Later:
    // fileInputRef.current?.click();
  };

  return (
    <div className={styles.page}>
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />

      <div className={styles.shell}>
        {/* SIDEBAR */}
        <aside
          className={`${styles.sidebar} ${
            isSidebarOpen ? styles.sidebarOpen : ""
          }`}
        >
          <div className={styles.sidebarHeader}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>AI</span>
              <span className={styles.logoText}>InvestMind</span>
            </div>
            <button className={styles.closeSidebarBtn} onClick={toggleSidebar}>
              ✕
            </button>
          </div>

          <button className={styles.newChatBtn}>+ New Chat</button>

          <div className={styles.historyLabel}>Recent chats</div>

          <div className={styles.historyList}>
            {chats.map((chat) => (
              <button
                key={chat.id}
                className={`${styles.historyItem} ${
                  chat.id === activeChatId ? styles.historyItemActive : ""
                }`}
                onClick={() => handleSelectChat(chat.id)}
              >
                <span className={styles.historyDot} />
                <span className={styles.historyTitle}>{chat.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.sidebarFooter}>
            <p className={styles.sidebarHint}>
              AI responses are research help only, not financial advice.
            </p>
          </div>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {isSidebarOpen && (
          <div className={styles.backdrop} onClick={toggleSidebar} />
        )}

        {/* MAIN CHAT AREA */}
        <section className={styles.chatArea}>
          {/* Top bar */}
          <header className={styles.chatHeader}>
            <div className={styles.chatHeaderLeft}>
              <button className={styles.mobileMenuBtn} onClick={toggleSidebar}>
                ☰
              </button>
              <div>
                <h1 className={styles.chatTitle}>InvestMind AI</h1>
                <p className={styles.chatSubtitle}>
                  Ask about ETFs, stocks, risk and long-term planning.
                </p>
              </div>
            </div>
            {/* Profile removed as requested */}
          </header>

          {/* Messages area */}
          <div className={styles.messages}>
            {messages.map((msg) => {
              const isUser = msg.role === "user";
              const rowClass = isUser
                ? `${styles.messageRow} ${styles.messageRowUser}`
                : `${styles.messageRow} ${styles.messageRowAssistant}`;

              const bubbleClass =
                msg.type === "analysis"
                  ? `${styles.messageBubble} ${styles.messageBubbleRich}`
                  : styles.messageBubble;

              return (
                <div key={msg.id} className={rowClass}>
                  <div className={styles.messageAvatar}>
                    {isUser ? "U" : "AI"}
                  </div>
                  <div className={bubbleClass}>
                    {msg.type === "analysis" ? (
                      <>
                        <div className={styles.analysisHeader}>
                          <span className={styles.analysisLabel}>
                            Portfolio insight
                          </span>
                        </div>
                        <h3 className={styles.analysisTitle}>{msg.title}</h3>
                        <p className={styles.analysisText}>{msg.content}</p>
                        <div className={styles.analysisGrid}>
                          {msg.breakdown.map((item, idx) => (
                            <div key={idx} className={styles.analysisItem}>
                              <div className={styles.analysisItemLabel}>
                                {item.label}
                              </div>
                              <div className={styles.analysisItemValue}>
                                {item.percent}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className={styles.analysisPlaceholder}>
                          {/* Here you can render real charts later, e.g. <MyChart /> */}
                          Graph / chart component can be rendered in this area.
                        </div>
                      </>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input bar */}
          <form className={styles.inputBar} onSubmit={handleSend}>
            {/* Hidden file input for future use */}
            <input
              type="file"
              ref={fileInputRef}
              className={styles.hiddenFileInput}
              disabled
            />

            <button
              type="button"
              className={styles.uploadBtn}
              onClick={handleUploadClick}
            >
              📎
            </button>

            <textarea
              className={styles.input}
              placeholder="Describe your goal, amount, and time frame…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
            />

            <button
              type="submit"
              className={styles.sendBtn}
              disabled={!input.trim()}
            >
              ➤
            </button>
          </form>

          <p className={styles.inputHint}>
            InvestMind gives AI-generated research only. Always confirm before
            investing.
          </p>
        </section>
      </div>
    </div>
  );
}
