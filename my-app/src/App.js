import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import StudentList from './components/StudentList/StudentList';
import AddStudentComponent from './components/AddStudent/AddStudentComponent';
import RegisterComponent from './components/Register/RegisterComponent';
import SignInComponent from './components/SignIn/SignInComponent';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLogin: true
    }
    this.signOut = this.signOut.bind(this)
    this.onLoginChange = this.onLoginChange.bind(this)

  }

  signOut() {
    this.setState({
      isLogin: true
    })
    console.log(window.isLogin)
    // window.isLogin = true
    // this.forceUpdate()
  }

  onLoginChange(isLogged) {
    this.setState({
      isLogin: isLogged
    })
  }

  render(){
    var isLogged;
    console.log(window.isLogin)
      if (this.state.isLogin) {
        isLogged = <div className="connexion">
    <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/signIn">Connexion</Link>
  </div>
      } else {
        isLogged =  <div className="deconnexion">
        <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/signIn" onClick={this.signOut}>Déconnexion</Link>
      </div>
      }
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
                {isLogged}
                {/* <div className="connexion">
                    <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/signIn" onClick={this.signOut}>Déconnexion</Link>
                  </div>
                <div className="connexion">
                    <Link className="navbar-dark navbar-nav nav-link navbar-expand" to="/signIn">Connexion</Link>
                  </div> */}

            </Nav>
          </Navbar>
          <Switch>
            <Route  path="/register" component={RegisterComponent}  />
            <Route  path="/signIn" component={() => <SignInComponent isLogin={this.state.isLogin} onLoginChange={this.onLoginChange}/>}  />
            <Route  path="/addStudent" component={AddStudentComponent}  />
            <Route  path="/students" component={StudentList}  />
          </Switch>
        </Router>
      </div>


    );
  }
}
export default App;
