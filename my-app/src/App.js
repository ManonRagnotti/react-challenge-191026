import React from 'react';
import logo from './logo.svg';
import firebaseConfig from './data.js';
import StudentList from './components/StudentList/StudentList';
import Navigation from './components/Navigation/Navigation';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navigation />
      <StudentList />
    </div>


  );
}

export default App;
