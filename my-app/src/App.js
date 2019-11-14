import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import StudentList from './components/StudentList/StudentList';
import AddStudentComponent from './components/AddStudent/AddStudentComponent';
import RegisterComponent from './components/Register/RegisterComponent';
import SignInComponent from './components/SignIn/SignInComponent';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Navbar.Brand href="/">
              <img src={require('./assets/logo-hetic.png')}/>
            </Navbar.Brand>
            <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/students">Etudiants</Link>
            <Link to="/addStudent" className="navbar-dark navbar-nav nav-link navbar-expand">Ajouter un étudiant</Link>

          <div className="connexion">
              <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/Register">Connexion</Link>
            </div>

          </Nav>
        </Navbar>
        <Switch>
          <Route  path="/register" component={RegisterComponent}  />
          <Route  path="/signIn" component={SignInComponent}  />
          <Route  path="/addStudent" component={AddStudentComponent}  />
          <Route  path="/students" component={StudentList}  />
        </Switch>
      </Router>
    </div>


  );
}

export default App;
