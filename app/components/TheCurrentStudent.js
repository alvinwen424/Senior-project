import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewStudent from './NewStudent';
import { changeStudent } from '../reducers/currentStudents';

// function findingCampus(prop){
//    console.log(store.campuses)
//   // const { campusId } = props.student;
//   // const campus = store.campus
//   return (
//     <h4></h4>
//   )
// }


class TheCurrentStudent extends Component {
  constructor(){
    super()
  }

  // componentDidMount () {
  //   this.props.changeStudent(this.props.student.name);
  // }


  render () {
    return (
      <div>
        <h2>Name: {this.props.student.name}</h2>
        <h3>Email: {this.props.student.email}</h3>
        <h3>Campus: {this.props.campus.name}</h3>
        {/*<button onClick={() => props.deleteStudent(student)}>Delete</button>*/}
      </div>  
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  const  studentId = Number(ownProps.match.params.studentId);
  const student = state.students.find(student => student.id === studentId)  || { name: '' };
  const campus = state.campuses.find(campus => campus.id === student.campusId); 
  return {
        student: student,
        campus: campus
  };
};

// const mapDispatchToProps = function (dispatch) {
//   return {
//     changeStudent(studentName) {
//       dispatch(changeStudent(studentName));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  null
)(TheCurrentStudent);
