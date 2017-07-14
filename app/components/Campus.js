import React, { Component } from 'react';
import { connect } from 'react-redux';

function Campus (props) {
	const {campuses} = props
	return (
		<div>
			<h1>This is Al's campus page</h1>
			<ul>
			{
				campuses.map(campus => {
					return (
						<li>
							<span>{campus.name}</span>
						</li> 
					)
				})
			}
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