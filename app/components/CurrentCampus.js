import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewCampus from './NewCampus';

function TheCurrentCampus (props) {

    const { students, campus } = props
    console.log(students)
    return (  
      <div>
            <h2>{campus.name}</h2>
        <ul>
        {
            students.map(student => {
                return(
                <li>
                    <h3>Name: {student.name}</h3>
                    <h3>Email: {student.email}</h3>
                </li>
                )
            })
        }
        </ul>
      </div>  
    );
}

const mapStateToProps = function (state, ownProps) {
    // console.log('students', state.students)
    // console.log('campuses', state.campuses)
  const campusId = Number(ownProps.match.params.campusId);
  return {
        students: state.students.filter(student => student.campusId === campusId),
        campus: state.campuses.find(campus => campus.id === campusId),
        campusId
  };
};

export default connect(
  mapStateToProps,
  null
)(TheCurrentCampus);
