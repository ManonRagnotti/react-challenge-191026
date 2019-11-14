import React, { Component } from 'react';
import StudentInfos from '../StudentInfos/StudentInfos'

export default class StudentList extends Component {

    constructor(props){
        super();
        this.testGetRequest = this.testGetRequest.bind(this);
        // this.testPostRequest = this.testPostRequest.bind(this);
        this.state = {data: null}
    }


    componentDidMount(){
        this.testGetRequest();
    }

    testGetRequest(){
        fetch('https://react-challenge-9e33c.firebaseio.com/users.json',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'ContentType': 'text/plain'
            }
        }).then(res => res.json())
        .then(data => Object.entries(data).map( d => d[1] )  )
        .then(students => this.setState({data:students}, ()=>console.log(this.state.data)))
        //.then(console.log(this.state.data));
    }

    // testPostRequest(){
    //     const data = {
    //         "desc": "etudiant hetic",
    //         "email": "test@test.com",
    //         "lastname": "manon",
    //         "firstname": "ragnotti",
    //         "skills": {
    //             "back": "A",
    //             "front": "A",
    //             "project_mngmt": "A",
    //             "ui": "A",
    //             "ux": "A"
    //         }
    //     }
    //     fetch('https://react-challenge-9e33c.firebaseio.com/users.json',{
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'ContentType': 'text/plain'
    //         },
    //         body: JSON.stringify(data)
    //     }).then(res => res.json())
    //     .then(data => console.log(data));
    // }

    render(){
        return(
            <div className="container">
              <StudentInfos data={this.state.data}/>
            </div>
        );
    }

}
