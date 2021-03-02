import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'charlie', text: 'Hey' },
    { username: 'echo', text: 'Hi' },
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []); //condition

  const sendMessage = (event) => {
    event.preventDefault();
    // logic for sending message
    setMessages([...messages, { username: username, text: input }]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <h2>Welcome {username}</h2>
      <form action=''>
        <FormControl>
          <InputLabel>Enter Message</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
