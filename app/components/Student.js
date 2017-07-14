import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { deleteStudent } from '../reducers/removingStudent'

function Students (props) {
	const {students} = props
	console.log(students)
	return (
		<div>
			<h1>This is Al's student's page</h1>
			<ul>
			{
				students && students.map(student => {
					return (
						<li key={student.id}>
							<NavLink to={`/students/${student.id}`}>
							<span>{student.name}</span>
							<button onClick={() => props.deleteStudent(student)}>Delete</button>
							</NavLink>
						</li> 
					)
				})
			}
			<li>
				<NavLink to='/making-student'>Create that Student </NavLink>
			</li>
			</ul>
		</div>
	)
}

const mapStateToProps = function (state, ownProps){
	return {
		students: state.students.students
	}
}

const mapToDispatch = function (dispatch){
	return {
		deleteStudent(student){
			dispatch(deleteStudent(student))
		}
	}
}

export default connect(mapStateToProps, mapToDispatch)(Students)