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
         {/*<findingCampus {...this.props} />*/}
      </div>  
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  const  studentId = Number(ownProps.match.params.studentId);

  return {
        student: state.students.find(student => student.id === studentId)  || { name: '' },
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
