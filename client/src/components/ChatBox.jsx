import React, { useState, useEffect, useRef } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { 
      text: "Hi! I'm SkillBot 🤖 Your AI learning assistant. How can I help you today?", 
      sender: "bot",
      timestamp: new Date().toLocaleTimeString() 
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Smart bot responses
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 Welcome to SkillSwap! I can help you find learning partners, suggest skills, or answer questions about our platform.";
    }
    
    if (message.includes('match') || message.includes('partner')) {
      return "Great question! 🎯 I can help you find perfect learning matches based on your skills. Try visiting the 'Match Suggestions' page or tell me what you want to learn!";
    }
    
    if (message.includes('skill') && message.includes('learn')) {
      return "Awesome! 📚 What skill would you like to learn? Popular skills on our platform include React, Python, UI/UX Design, Data Science, and Digital Marketing.";
    }
    
    if (message.includes('python') || message.includes('react') || message.includes('javascript')) {
      const skill = message.includes('python') ? 'Python' : message.includes('react') ? 'React' : 'JavaScript';
      return `${skill} is a fantastic choice! 🚀 I found several expert ${skill} teachers on SkillSwap. Would you like me to show you some matches?`;
    }
    
    if (message.includes('teach') || message.includes('share')) {
      return "That's wonderful! 🌟 Sharing knowledge is what makes SkillSwap special. You can add your skills in the 'Manage Skills' section and start teaching others!";
    }
    
    if (message.includes('session') || message.includes('meeting')) {
      return "Learning sessions are easy! 🎥 Once you connect with someone, you can schedule video calls directly through our platform. Check the 'Learning Sessions' page!";
    }
    
    if (message.includes('help') || message.includes('how')) {
      return "I'm here to help! 💡 You can:\n• Find learning partners in 'Matches'\n• Manage your skills in 'Manage Skills'\n• Join learning sessions\n• Connect with peers\n\nWhat would you like to do?";
    }
    
    if (message.includes('thanks') || message.includes('thank you')) {
      return "You're very welcome! 😊 Happy learning! Feel free to ask me anything else about SkillSwap.";
    }
    
    // Default responses for unrecognized input
    const defaultResponses = [
      "That's interesting! 🤔 Could you tell me more about what you're looking for?",
      "I'd love to help! ✨ Try asking me about finding learning partners, skills, or how SkillSwap works.",
      "Great question! 💭 I can help you with matches, skills, sessions, or general platform questions.",
      "I'm here to assist! 🎯 What would you like to know about SkillSwap?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const userMsg = { 
      text: newMessage, 
      sender: "user",
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setNewMessage("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(newMessage);
      const botMsg = { 
        text: botResponse, 
        sender: "bot",
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const quickReplies = [
    "Find matches",
    "How to learn?",
    "Popular skills",
    "Start teaching"
  ];

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.header}>
        <span>🤖 SkillBot Assistant</span>
        <div style={styles.onlineIndicator}>
          <span style={styles.onlineDot}></span>
          Online
        </div>
      </div>
      
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.messageWrapper}>
            <div
              style={{
                ...styles.message,
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                backgroundColor: msg.sender === "user" ? "#6366f1" : "#f8f9fa",
                color: msg.sender === "user" ? "#fff" : "#2d3748",
                borderRadius: msg.sender === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              }}
            >
              {msg.text.split('\n').map((line, lineIndex) => (
                <div key={lineIndex}>{line}</div>
              ))}
            </div>
            <div style={{
              ...styles.timestamp,
              textAlign: msg.sender === "user" ? "right" : "left"
            }}>
              {msg.timestamp}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div style={styles.messageWrapper}>
            <div style={{...styles.message, ...styles.typingIndicator}}>
              <div style={styles.typingDots}>
                <span style={styles.dot}></span>
                <span style={styles.dot}></span>
                <span style={styles.dot}></span>
              </div>
              SkillBot is typing...
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Reply Buttons */}
      {messages.length <= 2 && (
        <div style={styles.quickReplies}>
          <div style={styles.quickRepliesLabel}>Quick questions:</div>
          <div style={styles.quickReplyContainer}>
            {quickReplies.map((reply, index) => (
              <button 
                key={index}
                onClick={() => handleQuickReply(reply)}
                style={styles.quickReplyBtn}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.input}
        />
        <button 
          onClick={handleSend} 
          style={{
            ...styles.sendButton,
            opacity: newMessage.trim() === "" ? 0.5 : 1,
            cursor: newMessage.trim() === "" ? "not-allowed" : "pointer"
          }}
          disabled={newMessage.trim() === ""}
        >
          <span style={styles.sendIcon}>📤</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  header: {
    backgroundColor: '#6366f1',
    color: '#fff',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  onlineIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
  },
  onlineDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10b981',
    borderRadius: '50%',
  },
  messages: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    backgroundColor: '#fafafa',
    maxHeight: 'calc(100% - 160px)', // Account for header and input
  },
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  message: {
    maxWidth: '80%',
    padding: '0.75rem 1rem',
    borderRadius: '18px',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    wordWrap: 'break-word',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  timestamp: {
    fontSize: '0.7rem',
    color: '#9ca3af',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
  typingIndicator: {
    backgroundColor: '#e5e7eb',
    color: '#6b7280',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  typingDots: {
    display: 'flex',
    gap: '0.2rem',
  },
  dot: {
    width: '4px',
    height: '4px',
    backgroundColor: '#6b7280',
    borderRadius: '50%',
  },
  quickReplies: {
    padding: '0.75rem',
    borderTop: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb',
    position: 'sticky',
    bottom: '60px', // Position above input area
  },
  quickRepliesLabel: {
    fontSize: '0.8rem',
    color: '#6b7280',
    marginBottom: '0.5rem',
    fontWeight: '500',
  },
  quickReplyContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  quickReplyBtn: {
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '20px',
    padding: '0.5rem 0.75rem',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: '#374151',
  },
  inputContainer: {
    display: 'flex',
    padding: '1rem',
    gap: '0.5rem',
    borderTop: '1px solid #e5e7eb',
    backgroundColor: '#ffffff',
    position: 'sticky',
    bottom: 0,
    zIndex: 10,
  },
  input: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '20px',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  sendButton: {
    backgroundColor: '#6366f1',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    flexShrink: 0,
  },
  sendIcon: {
    fontSize: '1rem',
  },
};

export default ChatBox;
