import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []); //condition

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
