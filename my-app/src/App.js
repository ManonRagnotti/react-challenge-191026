import React from 'react';
import StudentList from './components/StudentList/StudentList';
import Navigation from './components/Navigation/Navigation';
import AddStudentComponent from './components/AddStudent/AddStudentComponent';
import RegisterComponent from './components/Register/RegisterComponent';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Router>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
          <Navbar.Brand href="/">HETIC</Navbar.Brand>
            <Link to="/addStudent" className="navbar-dark navbar-nav nav-link navbar-expand">Ajouter un étudiant</Link>
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/students">Students</Link>
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/navigation">Nav</Link>
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/Register">Register</Link>

          </Nav>
        </Navbar>
        <Switch>
          <Route  path="/register" component={RegisterComponent}  />
          <Route  path="/addStudent" component={AddStudentComponent}  />
          <Route  path="/students" component={StudentList}  />
          <Route  path="/navigation" component={Navigation}  />
        </Switch>
      </Router>
    </div>


  );
}

export default App;
