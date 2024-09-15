import React, { useState, useEffect } from 'react';
import '../css/chatbot.css';

const predefinedMessages = [
  "Hello! How can I assist you today?",
  "Do you need help with something specific?",
  "Feel free to ask me any questions.",
  "Is there anything else you'd like to know?",
  "Done",  
  "Thank you for using Hello Chat!"
];

const Chatbot = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    setShowLoadingScreen(true);
    setTimeout(() => {
      setShowLoadingScreen(false);
      setShowChat(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (showChat) {
      setTimeout(() => {
        setShowMessages(true);
        sendPredefinedMessage();
      }, 300);
    }
  }, [showChat]);

  const sendPredefinedMessage = () => {
    if (messageIndex < predefinedMessages.length) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'received', text: predefinedMessages[messageIndex] }
      ]);
      setMessageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'sent', text: userMessage }
    ]);

    if (userMessage.toLowerCase() === "done") {
      setTimeout(() => {
        sendPredefinedMessage();
      }, 500);
    } else {
      setTimeout(() => {
        sendPredefinedMessage();
      }, 200);
    }

    setUserMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-app">
      {showLoadingScreen && (
        <div className="loading-screen">
          <h2 className="hello-chat">
            <span className="hello-text">Hello</span><br />
            <span className="chat-text">Chat.</span>
          </h2>
          <p className="tagline">The last chat app you’ll ever need.</p>
        </div>
      )}

      {showChat && (
        <div className="chat-container">
          {showMessages && (
            <div className="right-side">
              <div className="chat-header">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1xtUSpVecnmpeUWrInONrPL7SUinC1xCJQ&s" alt="Profile" className="profile-pic" />
                <div className="chat-header-details">
                  <h3 className="chat-name">John Doe</h3>
                  <p className="last-seen">Last seen: Today</p>
                </div>
              </div>
              <div className="messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.type}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="message-input">
                <input
                  type="text"
                  placeholder="Message..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
