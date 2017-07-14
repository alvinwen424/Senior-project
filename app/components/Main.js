import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { fetchStudents } from '../reducers/students'
import { fetchCampuses } from '../reducers/campuses'

import NewCampus from './NewCampus'
import NewStudent from './NewStudent'
import CurrentCampus from './CurrentCampus'
import CurrentStudent from './TheCurrentStudent';
import Campus from './Campus';
import Student from './Student';
import Home from './Home';
import Navbar from './Navbar';
import store from '../store';

class Main extends Component {

componentDidMount(){
	this.props.fetchStudents();
	this.props.fetchCampuses();
}

	render (){
		return (
			<BrowserRouter>
			<div>
			<Navbar />
				<Switch>
					<Route path='/making-campus' component={NewCampus} />
					<Route path='/making-student' component={NewStudent} />
					<Route path='/campuses/:campusId' component={CurrentCampus} />
					<Route path='/students/:studentId' component={CurrentStudent} />
					<Route path="/campuses" component={Campus} />
					<Route path="/students" component={Student} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
			</BrowserRouter>
		)
	}
}

const mapDispatch = {fetchStudents, fetchCampuses}


export default connect(null, mapDispatch)(Main)