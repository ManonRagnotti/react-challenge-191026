import React, { Component } from 'react';

import { Form, Row, Col, Container, Button } from 'react-bootstrap';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();



class SignInComponent extends Component {
  constructor(props){
    super();
    this.state = {
      email: "",
      password: ""
    }
  }



  render(){
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <div className="studentForm">
      {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      }
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
export default withFirebaseAuth({

  firebaseAppAuth,
})(SignInComponent);
