import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.header}>💬 Chat Support</div>
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#3E54AC" : "#ddd",
              color: msg.sender === "user" ? "#fff" : "#000",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    width: '300px',
    height: '400px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    right: '1.5rem',
    bottom: '1.5rem',
    zIndex: 1000,
  },
  header: {
    padding: '1rem',
    backgroundColor: '#3E54AC',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  messages: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  message: {
    maxWidth: '75%',
    padding: '0.6rem 1rem',
    borderRadius: '18px',
    fontSize: '0.95rem',
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ccc',
    padding: '0.75rem',
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '0.9rem',
  },
  sendButton: {
    marginLeft: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    backgroundColor: '#3E54AC',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  
};

export default ChatBox;
