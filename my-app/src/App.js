import React from 'react';
import logo from './logo.svg';
import firebaseConfig from './data.js';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyDnJuNxfAMxxqrL7jw6Z4qh1WTAzS24eG0",
  authDomain: "react-challenge-9e33c.firebaseapp.com",
  databaseURL: "https://react-challenge-9e33c.firebaseio.com",
  projectId: "react-challenge-9e33c",
  storageBucket: "react-challenge-9e33c.appspot.com",
  messagingSenderId: "494251381045",
  appId: "1:494251381045:web:0fd143ba0a0f371c373c7c"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>


  );
}

export default App;
