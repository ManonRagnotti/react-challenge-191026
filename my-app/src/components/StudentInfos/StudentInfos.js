import React, { Component } from 'react';
import './StudentInfos.scss';

export default class StudentInfos extends Component {
  constructor(props){
    super();
  }

  render(){
    return (
      <div>
        <div className="list-header">
          <h3>Liste des étudiants</h3>
        </div>
        {
          this.props.data && this.props.data.map((student) => {
          return (
            <div className="container_list">
              <div className="student">
                <span className="name">{ student.firstname } { student.lastname }</span>
                <span className="email">{ student.email }</span>
                <p className="description">{student.desc}</p>
                <div className="note">
                  <div className="courses">
                    <span>Back</span>
                    <div className="div_circle">
                      <div className="circle red">
                         <span>{ student.skills.back }</span>
                      </div>
                    </div>
                  </div>
                  <div className="courses">
                    <span>Front</span>
                    <div className="div_circle">
                      <div className="circle yellow">
                        <span>{ student.skills.front }</span>
                      </div>
                    </div>
                  </div>
                  <div className="courses">
                    <span>UX</span>
                    <div className="div_circle">
                      <div className="circle blue">
                        <span>{ student.skills.ux }</span>
                      </div>
                    </div>
                  </div>
                  <div className="courses">
                    <span>UI</span>
                    <div className="div_circle">
                      <div className="circle mint">
                        <span>{ student.skills.ui }</span>
                      </div>
                    </div>
                  </div>
                  <div className="courses">
                    <span>Gestion</span>
                    <div className="div_circle">
                      <div className="circle purple">
                        <span>{ student.skills.project_mngmt }</span>
                      </div>
                    </div>
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
