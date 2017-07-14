import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

function Campus (props) {
	const {campuses} = props
	return (
		<div>
			<h1>This is Al's campus page</h1>
			<ul>
			{
				campuses.map(campus => {
					return (
					<li key={campus.id}>
							<NavLink to={`/campuses/${campus.id}`}>
							<span>{campus.name}</span>
							</NavLink>
						</li> 
					)
				})
			}
			<li>
				<NavLink to='/making-campus'>Create that Campus </NavLink>
			</li>
			</ul>
		</div>
	)
}

const mapStateToProps = function (state){
	return {
		campuses: state.campuses
	}
}

export default connect(mapStateToProps)(Campus)