import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isSending, setIsSending] = useState(false); // To track sending state
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return; // Ignore empty input

    setIsSending(true); // Show sending effect

    try {
      const formData = new FormData();
      formData.append('question', question);

      // Make a POST request with FormData
      const res = await axios.post('https://chatappbk-flask.onrender.com', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Allow FormData to set its boundary
        },
      });

      setResponse(res.data.response); // Store the response
      console.log('AI Response:', res.data.response);
    } catch (error) {
      console.error('Error generating response:', error);
      setResponse('Error: Could not fetch the response from the server.');
    } finally {
      setIsSending(false); // Remove sending effect
      setQuestion(''); // Clear input
    }
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="mb-4 gradient-text">AI Chat Application</h1>
      <div className="chat-window card shadow-sm">
        <div className="messages p-3 overflow-auto flex-grow-1">
          {response && (
            <>
              <div className="message user-message d-flex justify-content-end mb-3">
                <span className="bubble user-bubble p-2 rounded">
                  {question}
                </span>
              </div>
              <div className="message ai-message d-flex justify-content-start mb-3">
                <span className="bubble ai-bubble p-2 rounded">
                  {response}
                </span>
              </div>
            </>
          )}
          {isSending && (
            <div className="d-flex justify-content-end">
              <span className="text-muted fst-italic">Sending...</span>
            </div>
          )}
          <div ref={messagesEndRef}></div>
        </div>
        <form onSubmit={handleSubmit} className="chat-input d-flex p-3 border-top">
          <input
            type="text"
            placeholder="Type your message..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="form-control me-2 rounded-pill"
          />
          <button type="submit" className="btn btn-primary rounded-pill" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

      {/* Inline CSS for custom styling */}
      <style jsx>{`
        .gradient-text {
          font-size: 2.5rem;
          font-weight: bold;
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .chat-window {
          width: 500px;
          max-width: 100%;
          height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #f8f9fa;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .messages {
          height: 100%;
          overflow-y: auto;
          scrollbar-width: thin;
        }

        .bubble {
          max-width: 70%;
          word-wrap: break-word;
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
        }

        .user-bubble {
          background-color: #6a11cb;
          color: #fff;
          border-top-right-radius: 0;
        }

        .ai-bubble {
          background-color: #e9ecef;
          color: #212529;
          border-top-left-radius: 0;
        }
      `}</style>
    </div>
  );
}

export default App;
