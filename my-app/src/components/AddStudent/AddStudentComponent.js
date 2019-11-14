import React, { Component } from 'react';
import './AddStudentComponent.scss';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

export default class StudentInfos extends Component {
  constructor(props){
    super();
    this.state = {
      studentInfo: {
        firstname: "",
        lastname: "",
        email: "",
        desc: "",
        skills: {
          back: "",
          front:"",
          project_mngmt: "",
          ux:"",
          ui: ""
        }
      }
    }
  }

  handleChangeFirstname = (e) => {
    this.state.studentInfo.firstname = e.target.value
  }

  handleChangeLastname = (e) => {
    this.state.studentInfo.lastname = e.target.value
  }
  handleChangeEmail = (e) => {
    this.state.studentInfo.email = e.target.value
  }
  handleChangeDesc = (e) => {
    this.state.studentInfo.desc = e.target.value
  }
  handleChangeBack = (e) => {
    this.state.studentInfo.skills.back = e.target.value
  }
  handleChangeFront = (e) => {
    this.state.studentInfo.skills.front = e.target.value
  }
  handleChangeProj = (e) => {
    this.state.studentInfo.skills.project_mngmt = e.target.value
  }
  handleChangeUx = (e) => {
    this.state.studentInfo.skills.ux = e.target.value
  }
  handleChangeUi = (e) => {
    this.state.studentInfo.skills.ui = e.target.value
  }



  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.studentInfo.firstname)
    console.log(this.state.studentInfo.skills.back)

    fetch('https://react-challenge-9e33c.firebaseio.com/users.json',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'ContentType': 'text/plain'
            },
            body: JSON.stringify(this.state.studentInfo)
        }).then(res => res.json())
        .then(data => console.log(data));
  }

  render(){
    return (
      <div className="studentForm">
        <Container>
          <div className="list-header">
            <h3>Ajouter un étudiant</h3>
          </div>
          <Form>
            <Row className="first-row">
              <Col>
                {/* <Form.Label >First Name</Form.Label> */}
                <Form.Control
                  placeholder="Firstname"
                  onChange={this.handleChangeFirstname}
                  name={this.state.studentInfo.firstname}/>
              </Col>
              <Col>
                {/* <Form.Label>Last Name</Form.Label> */}
                <Form.Control
                  placeholder="Lastname"
                  onChange={this.handleChangeLastname}
                  name={this.state.studentInfo.lastname} />
              </Col>
            </Row>
            <Row>
              <Col>
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChangeEmail}
                  name={this.state.studentInfo.email} />
              </Col>
            </Row>
            <Row>
              <Col>
                {/* <Form.Label>Description</Form.Label> */}
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Description"
                  onChange={this.handleChangeDesc}
                  name={this.state.studentInfo.desc} />
              </Col>
            </Row>
            <Row>
              <Col className="list-skills">
                <div className="skills">
                  <Form.Label className="red">Back</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.handleChangeBack}
                    name={this.state.studentInfo.skills.back} >
                    <option>Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                  </Form.Control>
                </div>
                <div className="skills">
                  <Form.Label className="yellow">Front</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.handleChangeFront}
                    name={this.state.studentInfo.skills.front} >
                    <option>Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                  </Form.Control>
                </div>
                <div className="skills">
                  <Form.Label className="blue">UX</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.handleChangeUx}
                    name={this.state.studentInfo.skills.ux} >
                    <option>Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                  </Form.Control>
                </div>
                <div className="skills">
                  <Form.Label className="mint">UI</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.handleChangeUi}
                    name={this.state.studentInfo.skills.ui} >
                    <option>Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                  </Form.Control>
                </div>
                <div className="skills">
                  <Form.Label className="purple">Gestion de Projet</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.handleChangeProj}
                    name={this.state.studentInfo.skills.project_mngmt}>
                    <option>Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                  </Form.Control>
                </div>
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
