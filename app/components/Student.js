import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
function Students (props) {
	const {students} = props
	return (
		<div>
			<h1>This is Al's student's page</h1>
			<ul>
			{
				students.map(student => {
					return (
						<li key={student.id}>
							<NavLink to={`/students/${student.id}`}>
							<span>{student.name}</span>
							</NavLink>
						</li> 
					)
				})
			}
			</ul>
		</div>
	)
}

const mapStateToProps = function (state, ownProps){
	return {
		students: state.students
	}
}

export default connect(mapStateToProps)(Students)