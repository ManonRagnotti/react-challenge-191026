import React from 'react';
import logo from './logo.svg';
import firebaseConfig from './data.js';
import StudentList from './StudentList';
import './App.css';



function App() {
  return (
    <div className="App">
      <StudentList />
    </div>


  );
}

export default App;
