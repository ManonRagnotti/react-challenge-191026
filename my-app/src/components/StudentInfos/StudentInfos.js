import React, { Component } from 'react';

export default class StudentInfos extends Component {
  constructor(props){
    super();
  }

  componentDidMount(){

  }
  render(){
   // if( this.props.list ) console.log(Object.entries(this.props.list))
    return (
      <div>
        {
          this.props.data &&
          this.props.data.map
          (
            student => <p>{ student.firstname }</p>
          )
        }
      </div>
    )
  }

}
 


