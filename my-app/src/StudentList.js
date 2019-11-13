import React, { Component } from 'react';

export default class StudentList extends Component {

    constructor(props){
        super();
        this.testGetRequest = this.testGetRequest.bind(this);
        this.testPostRequest = this.testPostRequest.bind(this);
    }


    componentDidMount(){
        this.testPostRequest();
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
        .then(data => console.log(data));
    }

    testPostRequest(){
        const data = {
            "desc": "etudiant epitech",
            "email": "test@test.com",
            "lastname": "albanel",
            "firstname": "nicolas",
            "skills": {
                "back": "A",
                "front": "A",
                "project_mngmt": "A",
                "ui": "A",
                "ux": "A"
            }
        } 
        fetch('https://react-challenge-9e33c.firebaseio.com/users.json',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'ContentType': 'text/plain'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data));
    }

    render(){
        return(
            <div>
                <h1>Hello world</h1>
            </div>
        );
    }

}

