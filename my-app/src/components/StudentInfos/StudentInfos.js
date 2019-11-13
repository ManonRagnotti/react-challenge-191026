import React, { Component } from 'react';
import './StudentInfos.css';

export default class StudentInfos extends Component {
  constructor(props){
    super();
  }

  render(){
    return (
      <div>
        {
          this.props.data && this.props.data.map((student) => {
          return (
            <div className="container_list">
              <div className="student">
                <h3 className="name">{ student.firstname } { student.lastname }</h3>
                <span className="email">{ student.email }</span>
                <p className="description">{student.desc}</p>
                <div className="note">
                  <div className="back">
                    <span>Back</span>
                    <div className="circle">
                      <span>{ student.skills.back }</span>
                    </div>
                  </div>
                  <div className="front">
                    <span>Front</span>
                    <span>{ student.skills.front }</span>
                  </div>
                  <div className="ux">
                    <span>UX</span>
                    <span>{ student.skills.ux }</span>
                  </div>
                  <div className="ui">
                    <span>UI</span>
                    <span>{ student.skills.ui }</span>
                  </div>
                  <div className="gestion">
                    <span>Gestion</span>
                  <span>{ student.skills.project_mngmt}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    )
  }

}
