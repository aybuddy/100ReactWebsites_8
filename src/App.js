import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    // logic for sending message
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <form action=''>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type='submit' onClick={sendMessage}>
          Send Message
        </button>
      </form>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
