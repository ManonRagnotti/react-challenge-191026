import React, { Component } from 'react';

import { Form, Row, Col, Container, Button } from 'react-bootstrap';

import * as firebase from 'firebase/app';
import 'firebase/auth';


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

class SignInComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      isLogin: this.props.isLogin
    }
    // this.onSignIn = this.onSignIn.bind(this);
    // this.loggedIn = this.loggedIn.bind(this);

  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
 
  loggedIn = () => {
    this.props.onLoginChange(false)
    this.props.history.push("/students")
  }
  
  onSignIn = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(this.loggedIn)
    .catch(function(error) {
      // Handle Errors here.
      console.log(error.message)
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  onSignUp = () => {
    this.context.history.push("/Register")
  }

  render(){
    return (
      <div className="studentForm">
      <Container>
         <Form>
          <Row>
            <Col>
              <Form.Label>Email address</Form.Label>  
              <Form.Control 
                type="email"
                placeholder="email"
                onChange={this.handleChangeEmail}
                 />
            </Col>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password" 
                placeholder="Password"
                onChange={this.handleChangePassword}
                />
            </Col>
          </Row>
          <Row>
            <Col>
            <Button variant="primary" type="submit" onClick={this.onSignIn}>
              Connexion
            </Button>
            </Col>
            <Col>
            <Button variant="primary" type="submit" onClick={this.onSignUp}>
              Inscription
            </Button>
          </Col>
          </Row>
        </Form>
      </Container>
      </div>
    )
  }

}
export default SignInComponent;