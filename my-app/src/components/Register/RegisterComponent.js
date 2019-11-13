import React, { Component } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import * as firebase from 'firebase';
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDnJuNxfAMxxqrL7jw6Z4qh1WTAzS24eG0",
  authDomain: "react-challenge-9e33c.firebaseapp.com",
  databaseURL: "https://react-challenge-9e33c.firebaseio.com",
  projectId: "react-challenge-9e33c",
  storageBucket: "react-challenge-9e33c.appspot.com",
  messagingSenderId: "494251381045",
  appId: "1:494251381045:web:0fd143ba0a0f371c373c7c"
});

export default class RegisterComponent extends Component {
  constructor(props){
    super();
    this.state = {
      email: "",
      password: ""
    }
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
 
  
  onSubmit = (e) => {

    e.preventDefault();
    console.log(this.state.email);
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      console.log(error.message)
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
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
          <Button variant="primary" type="submit" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
      </div>
    )
  }

}
